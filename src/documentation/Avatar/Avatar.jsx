import { StyledImg, StyledFigure } from "./Avatar.styles";

const Avatar = ({ imgLink, size, border }) => {
  return (
    <StyledFigure size={size} border={border}>
      <StyledImg src={imgLink} alt={imgLink} />
    </StyledFigure>
  );
};

export default Avatar;
