import React from 'react';
import { Link } from 'react-router-dom';
import { PopupContainer, PopupHeader, PopupContent, PTopBox, PBottomBox } from './popup-styled';
import { imgInfo } from '../../../assets/images';
import { useDispatch, useSelector } from 'react-redux';
import { isOpen } from '../../../store/reducer/popupSlice';

const Popup = () => {
  const open = useSelector(state => state.popup.open);
  const dispatch = useDispatch();

  return (
    <PopupContainer active={open}>
      <PopupHeader>
        <PTopBox>
          <p>로그인 해주세요 :&#41;</p>
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
            <li>
              <Link to="/">로그인</Link>
            </li>
            <li>
              <Link to="/">회원가입</Link>
            </li>
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
