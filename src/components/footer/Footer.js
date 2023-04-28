import React from 'react';
import { BusinessInfo, FooterContainer, FooterContent } from './footer-styled';
import { imgLogo } from '../../assets/images';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <img src={imgLogo} alt="LOGO" />
        <div>
          <ul>
            <li>이용약관</li>
            <li>개인정보 처리방침</li>
          </ul>
        </div>
        <BusinessInfo>
          <p>(주)Carveflicks 사업자 정보</p>
          <p>상호: 주식회사 카프 / 대표: 손OO</p>
          <p>주소: 서울특별시 강남구 테헤란로 00, 00층 000호(역삼동, OO타워)</p>
          <p>사업자등록번호 : 000-00-00000 / 통신판매번호 : 제 2023-서울OOO-0000호</p>
          <p>이메일 : contact@carveflicks.net / 대표전화 : 0000-0000</p>
        </BusinessInfo>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
