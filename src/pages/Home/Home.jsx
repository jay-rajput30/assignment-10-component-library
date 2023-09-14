import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import Alert from "../../documentation/Alert/Alert";

// const HomeWrapper = styled.div`
//   display: flex;
// `;

const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  margin: var(--space-7) auto;

  & h1 {
    font-size: var(--font-length-lg2);
  }

  & p {
    font-size: var(--font-length-md2);
  }
  & button {
    margin-top: var(--space-3);
    color: var(--clr-secondary);
  }
`;
const Home = () => {
  const navigate = useNavigate();
  const viewMoreBtnClickHandler = () => {
    navigate("/components");
  };
  return (
    <div>
      <Navbar />
      <MainWrapper>
        <h1>welcome to my component library</h1>
        <p>
          this contains a list of component you can use for your react project
        </p>
        <button onClick={viewMoreBtnClickHandler}>get started</button>
        {/* <Avatar
          imgLink={`https://images.pexels.com/photos/904111/pexels-photo-904111.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`}
          size={92}
          border={1}
        /> */}
        {/* <Alert type="info" text="hello world" position="top" /> */}
      </MainWrapper>
    </div>
  );
};

export default Home;
