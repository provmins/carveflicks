import React, { useCallback, useEffect, useState } from 'react';
import { AccountContainer, AccountForm, AccountInputBox, AccountMessage } from './account-styled';
import { imgRegister, imgLogin } from '../../assets/images';
const Account = ({ flag }) => {
  const [form, setForm] = useState({
    email: {
      value: '',
      message: ''
    },
    password: {
      value: '',
      message: ''
    },
    passwordConfirm: {
      value: '',
      message: ''
    }
  });

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
            message: '이메일 형식이 올바르지 않습니다. 다시 입력해주세요.'
          }
        });
      } else {
        setForm({
          ...form,
          email: { value: emailValue, message: '' }
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
            message: '총 8자 이상 / 숫자, 영문, 특수문자를 조합하여 입력해주세요.'
          }
        });
      } else {
        setForm({
          ...form,
          password: {
            value: passwordValue,
            message: ''
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
            message: '비밀번호가 일치하지 않습니다. 다시 입력해주세요.'
          }
        });
      } else {
        setForm({
          ...form,
          passwordConfirm: {
            value: passwordValue,
            message: ''
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
        message: ''
      },
      password: {
        value: '',
        message: ''
      },
      passwordConfirm: {
        value: '',
        message: ''
      }
    });
  }, [flag]);

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
            value={form.email.value}
          />
        </AccountInputBox>
        <AccountMessage>{form.email.message}</AccountMessage>
        <AccountInputBox>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            onChange={onChangePassword}
            placeholder={flag === 'register' ? '8자 이상 영문, 숫자, 특수문자 포함' : ''}
            value={form.password.value}
          />
        </AccountInputBox>
        <AccountMessage>{form.password.message}</AccountMessage>
        {flag === 'register' && (
          <>
            <AccountInputBox>
              <label htmlFor="password">비밀번호 확인</label>
              <input
                type="password"
                id="passwordConfirm"
                onChange={onChangePasswordConfirm}
                placeholder="비밀번호를 한번 더 입력해주세요."
                value={form.passwordConfirm.value}
              />
            </AccountInputBox>
            <AccountMessage>{form.passwordConfirm.message}</AccountMessage>
          </>
        )}
        {flag === 'register' ? <button>회원가입</button> : <button>로그인</button>}
      </AccountForm>
    </AccountContainer>
  );
};

export default Account;
