import React, { useCallback, useEffect, useState } from 'react';
import {
  AccountContainer,
  AccountForm,
  AccountInputBox,
  AccountMessage,
  Button
} from './account-styled';
import { imgRegister, imgLogin } from '../../assets/images';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { currentUser } from '../../store/reducer/userSlice';

const Account = ({ flag }) => {
  const [cookies, setCookie] = useCookies(['token']);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: {
      value: '',
      message: '',
      check: false
    },
    password: {
      value: '',
      message: '',
      check: false
    },
    passwordConfirm: {
      value: '',
      message: '',
      check: false
    }
  });

  const { email, password, passwordConfirm } = form;

  // 유효성 검사
  const onChangeEmail = useCallback(
    e => {
      const emailRegex =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      const emailValue = e.target.value;

      if (!emailRegex.test(emailValue)) {
        setForm({
          ...form,
          email: {
            value: emailValue,
            message: '이메일 형식이 올바르지 않습니다. 다시 입력해주세요.',
            check: false
          }
        });
      } else {
        setForm({
          ...form,
          email: { value: emailValue, message: '', check: true }
        });
      }
    },
    [form]
  );

  const onChangePassword = useCallback(
    e => {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
      const passwordValue = e.target.value;

      if (!passwordRegex.test(passwordValue)) {
        setForm({
          ...form,
          password: {
            value: passwordValue,
            message: '총 8자 이상 / 숫자, 영문, 특수문자를 조합하여 입력해주세요.',
            check: false
          }
        });
      } else {
        setForm({
          ...form,
          password: {
            value: passwordValue,
            message: '',
            check: true
          }
        });
      }
    },
    [form]
  );

  const onChangePasswordConfirm = useCallback(
    e => {
      const passwordValue = e.target.value;
      if (form.password.value !== passwordValue) {
        setForm({
          ...form,
          passwordConfirm: {
            value: passwordValue,
            message: '비밀번호가 일치하지 않습니다. 다시 입력해주세요.',
            check: false
          }
        });
      } else {
        setForm({
          ...form,
          passwordConfirm: {
            value: passwordValue,
            message: '',
            check: true
          }
        });
      }
    },
    [form]
  );
  // 유효성 검사 끝

  // 로그인, 회원가입 페이지 이동 시 state 초기화
  useEffect(() => {
    setForm({
      email: {
        value: '',
        message: '',
        check: false
      },
      password: {
        value: '',
        message: '',
        check: false
      },
      passwordConfirm: {
        value: '',
        message: '',
        check: flag === 'register' ? false : true
      }
    });
  }, [flag]);

  // 회원가입, 로그인 기능
  const onSubmit = async params => {
    try {
      const response = await axios.post(`/${params}`, {
        email: form.email.value,
        password: form.password.value
      });
      const { accessToken, user } = response.data;
      if (params === 'login') {
        setCookie('token', accessToken, { path: '/' });
        navigate('/');
        dispatch(currentUser({ id: user.id, email: user.email }));
      } else {
        alert('Welcome to Carveflicks!');
        navigate('/');
      }
    } catch (err) {
      if (err.response.status === 400) {
        params === 'login'
          ? alert('아이디 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요.')
          : alert('가입된 이메일 입니다.\n다른 이메일로 입력해주세요.');
      } else if (err.response.status === 500) {
        alert('서버 점검중입니다.');
      }
    }
  };

  return (
    <AccountContainer>
      {flag === 'register' ? <img src={imgRegister} alt="" /> : <img src={imgLogin} alt="" />}
      <AccountForm action="">
        <p>{flag === 'register' ? '회원가입' : '로그인'}</p>
        <AccountInputBox>
          <label htmlFor="email">이메일</label>
          <input
            type="text"
            id="email"
            onChange={onChangeEmail}
            placeholder={flag === 'register' ? 'customer@gmail.com' : ''}
            value={email.value}
          />
        </AccountInputBox>
        <AccountMessage>{email.message}</AccountMessage>
        <AccountInputBox>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            onChange={onChangePassword}
            placeholder={flag === 'register' ? '8자 이상 영문, 숫자, 특수문자 포함' : ''}
            value={password.value}
          />
        </AccountInputBox>
        <AccountMessage>{password.message}</AccountMessage>
        {flag === 'register' && (
          <>
            <AccountInputBox>
              <label htmlFor="password">비밀번호 확인</label>
              <input
                type="password"
                id="passwordConfirm"
                onChange={onChangePasswordConfirm}
                placeholder="비밀번호를 한번 더 입력해주세요."
                value={passwordConfirm.value}
              />
            </AccountInputBox>
            <AccountMessage>{passwordConfirm.message}</AccountMessage>
          </>
        )}

        <Button
          onClick={e => {
            e.preventDefault();
            onSubmit(flag);
          }}
          disabled={
            email.check === true && password.check === true && passwordConfirm.check === true
              ? false
              : true
          }
        >
          {flag === 'register' ? '회원가입' : '로그인'}
        </Button>
      </AccountForm>
    </AccountContainer>
  );
};

export default Account;
