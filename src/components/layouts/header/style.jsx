import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 100;

  top: 0;
  width: 100%;
  max-width: 420px;
  height: 60px;

  padding: 10px 30px;
  /* 배경 그라디언트 */

  background-image: url("/background.svg");
  background-size: 100%;
  background-repeat: repeat;

  font-family: Dongguk;
  color: white;
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SideBarWrapper = styled.div`
  width: 250px;

  top: 60px;
  right: 0px;
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  background: linear-gradient(14deg, #ffb4d8 1.4%, #ffce9c 100%);
  z-index: 99999;

  img {
    width: 250px;
  }
`;

export const SideBarContent = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 250px;

  font-size: 18px;
  color: ${props => props.theme.colors.fontBrown};
  z-index: 9999;
`;
