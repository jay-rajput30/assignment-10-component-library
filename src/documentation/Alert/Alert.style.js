import styled from "styled-components";

export const StyledDiv = styled.div`
  border: 1px solid;
  ${(props) => handleAlertType(props.type)};
  width: 60%;
  height: 10vh;
  padding: var(--space-1) var(--space-1);
  border-radius: 5px;
  font-weight: bold;
  position: absolute;
  bottom: ${({ position }) => (position === "bottom" ? "10px" : "none")};
  top: ${({ position }) => (position === "top" ? "10px" : "none")};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const handleAlertType = (option) => {
  switch (option) {
    case "success": {
      return "background-color: #a3e635; ";
    }
    case "warning": {
      return "background-color: #facc15; ";
    }
    case "error": {
      return "background-color: #f87171; ";
    }
    case "info": {
      return "background-color: #60a5fa; ";
    }
    default:
      return;
  }
};
