import React from 'react';
import { HeaderContainer, HeaderMobile } from './header-styled';
import { imgLogo, imgButton } from '../../assets/images';
import { Link } from 'react-router-dom';
import Popup from './popup/Popup';
import { useDispatch } from 'react-redux';
import { isOpen } from '../../store/reducer/popupSlice';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <>
      <HeaderContainer>
        <HeaderMobile>
          <Link to="/">
            <img src={imgLogo} alt="logo" />
          </Link>
          <button onClick={() => dispatch(isOpen())}>
            <img src={imgButton} alt="menubar" />
          </button>
        </HeaderMobile>
      </HeaderContainer>
      <Popup />
    </>
  );
};

export default Header;
