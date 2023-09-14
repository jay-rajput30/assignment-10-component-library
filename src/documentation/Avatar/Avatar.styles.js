import styled from "styled-components";

export const StyledFigure = styled.figure`
  width: ${(props) => (props.size ? props.size + "px" : "48px")};
  height: ${(props) => (props.size ? props.size + "px" : "48px")};
  border: ${(props) =>
    props.border ? props.border + "px solid black" : "none"};
  border-radius: 50%;
`;
export const StyledImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  border-radius: 50%;
`;
