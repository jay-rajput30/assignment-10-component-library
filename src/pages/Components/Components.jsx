import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { StyledComponentSection } from "./Components.styles";
const ComponentName = ({ name }) => {
  return <NavLink>{name}</NavLink>;
};
const Components = () => {
  return (
    <div>
      <Navbar />
      <StyledComponentSection>
        <ComponentName name="Alert" />
      </StyledComponentSection>
    </div>
  );
};

export default Components;
