import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PopupContainer, PopupHeader, PopupContent, PTopBox, PBottomBox } from './popup-styled';
import { imgInfo } from '../../../assets/images';
import { useDispatch, useSelector } from 'react-redux';
import { isOpen } from '../../../store/reducer/popupSlice';
import { resetUser } from '../../../store/reducer/userSlice';
import { useCookies } from 'react-cookie';

const Popup = () => {
  const open = useSelector(state => state.popup.open);
  const email = useSelector(state => state.user.email);
  const dispatch = useDispatch();
  const [cookies, removeCookie] = useCookies(['token']);

  return (
    <PopupContainer active={open}>
      <PopupHeader>
        <PTopBox>
          <p>{email !== '' ? `${email}님 환영합니다.` : '로그인 해주세요 :)'}</p>
          <ul>
            <li>
              <Link to="/">
                <img src={imgInfo} alt="" />
              </Link>
            </li>
            <li>
              <button onClick={() => dispatch(isOpen())} />
            </li>
          </ul>
        </PTopBox>
        <PBottomBox>
          <ul>
            {cookies.token !== 'undefined' ? (
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    // 로그아웃 시 쿠키 삭제
                    removeCookie('token');
                    dispatch(isOpen());
                    dispatch(resetUser());
                  }}
                >
                  로그아웃
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/auth/login" onClick={() => dispatch(isOpen())}>
                    로그인
                  </Link>
                </li>
                <li>
                  <Link to="/auth/register" onClick={() => dispatch(isOpen())}>
                    회원가입
                  </Link>
                </li>
              </>
            )}
          </ul>
        </PBottomBox>
      </PopupHeader>
      <PopupContent>
        <div>COMMING SOON</div>
      </PopupContent>
    </PopupContainer>
  );
};

export default Popup;
