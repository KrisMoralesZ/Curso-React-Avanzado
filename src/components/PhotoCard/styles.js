import styled from "styled-components";

export const ImgWrapper = styled.div`
  display: block;
  border-radius: 10px;
  padding: 56.25% 0 0 0;
  height: 0;
  position: relative;
`
export const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`
