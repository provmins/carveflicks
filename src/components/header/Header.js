import React from 'react';
import {
  HeaderContainer,
  HeaderMobile,
  PopupContainer,
  PopupHeader,
  PopupContent
} from './header-styled';
import { imgLogo, imgButton, imgInfo } from '../../assets/images';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const handleSubMenu = () => setIsPopup(!isPopup);
  const [isPopup, setIsPopup] = useState(false);

  return (
    <HeaderContainer>
      <HeaderMobile>
        <Link to="/">
          <img src={imgLogo} alt="logo" />
        </Link>
        <button onClick={handleSubMenu}>
          <img src={imgButton} alt="menubar" />
        </button>
      </HeaderMobile>
      <PopupContainer active={isPopup}>
        <PopupHeader>
          <div>
            <p>로그인 해주세요 :&#41;</p>
            <div>
              <ul>
                <li>
                  <Link to="/">
                    <img src={imgInfo} alt="" />
                  </Link>
                </li>
                <li>
                  <button onClick={handleSubMenu} />
                </li>
              </ul>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">로그인</Link>
              </li>
              <li>
                <Link to="/">회원가입</Link>
              </li>
            </ul>
          </div>
        </PopupHeader>
        <PopupContent></PopupContent>
      </PopupContainer>
    </HeaderContainer>
  );
};

export default Header;
