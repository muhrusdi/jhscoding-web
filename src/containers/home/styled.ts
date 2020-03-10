import styled from "styled-components";
import { Button as Btn } from "antd";

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 52px;
  font-weight: 900;
  line-height: 1;
  span {
    color: #3278ff;
  }
  @media screen and (max-width: 576px) {
    font-size: 38px;
  }
`;

export const Text = styled.p`
  font-size: 22px;
  color: #848484;
  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
`;

export const Content = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Button = styled(Btn)`
  &&& {
    background: #e4eeff;
    border-radius: 8px;
    padding: 0 32px;
    height: 53px;
    border: transparent;
    color: #1a52bf;
  }
`;

export const Coming = styled.span`
  display: inline-block;
  padding: 4px 10px;
  background: #ececec;
  border-radius: 8px;
  margin-bottom: 14px;
  font-weight: 600;
`;

export const ImgContent = styled.div`
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
