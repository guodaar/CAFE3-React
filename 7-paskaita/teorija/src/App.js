import "./App.css";
import styled from "styled-components";
import RegistrationPage from "./pages/RegistrationPage";
import StyledComponent from "./pages/StyledComponent";

const Container = styled.div`
  background-color: #e8e8e8;
  padding: 50px;
  height: 100vh;
`;

function App() {
  const props = { size: "sm", inputColor: "rebeccapurple" };
  return (
    <Container>
      <RegistrationPage />
    </Container>
  );
}

export default App;
