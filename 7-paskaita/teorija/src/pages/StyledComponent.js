import Button from "../components/StyledComponent/Button";
import styled from "styled-components";
import CustomButton from "../components/StyledComponent/CustomButton";
import CustomInput from "../components/StyledComponent/CustomInput";

const Container = styled.div`
  padding: 40px;
  display: flex;
`;

const TomatoButton = styled(CustomButton)`
  color: tomato;
  border-color: tomato;
  text-decoration: none;
`;

function StyledComponent() {
  const props = { size: "sm", inputColor: "rebeccapurple" };
  return (
    <Container>
      <Container>
        <CustomButton>Mano buttonas</CustomButton>
        <TomatoButton as="a" href="https://www.google.com/">
          Mano pomidorinis buttonas
        </TomatoButton>
      </Container>
      <Container>
        <CustomInput
          defaultValue="Guoda"
          inputColor={props.inputColor}
          size={props.size}
        />
        <CustomInput defaultValue="Guoda" inputColor="red" size="lg" />
        <CustomInput defaultValue="Guoda" size="xl" />
      </Container>
    </Container>
  );
}

export default StyledComponent;
