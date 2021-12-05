import styled from 'styled-components';

export const HeroContainer = styled.div`
  background: #354147;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: relative;
  top: -100px;
  right: 0;
  bottom: 100px;
  left: 0;
  /* width: 100%;
  height: 100%; */
  overflow: hidden;
`;

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  /* -o-object-fit: cover; */
  /* object-fit: cover; */
  background: #354147;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 400px;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 55px;
  text-align: center;
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 32px;
  /* text-align: center; */
  left: 0;
  max-width: 600px;
`;
