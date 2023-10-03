//NoticeCard-Style.jsx
import { styled } from "styled-components";

export const CardWrappper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 3px solid red; */
`;

export const CardBox = styled.div`
  display: flex;
  width: 100%;
  min-height: 150px;
  margin-top: 26px;
  padding: 15px 20px;
  gap: 10px;
  border-radius: 20px;
  background: var(--white, #fff);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
`;

export const CardImg = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 20px;
  background: lightgray 50%;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  /* width: 100%;
  height: 46px; */
  color: #553c2e;
  font-family: Noto Sans KR;
  font-size: 16px;
`;

export const Body = styled.div`
  margin-top: 7px;
  /* width: 140px; */
  color: #8c847f;
  font-family: Noto Sans KR;
  font-size: 12px;
`;
