import { StyledDiv } from "./Alert.style";

const Alert = ({ type, text, position }) => {
  console.log({ type, text });
  return (
    <StyledDiv type={type} position={position}>
      {text}
    </StyledDiv>
  );
};

export default Alert;
