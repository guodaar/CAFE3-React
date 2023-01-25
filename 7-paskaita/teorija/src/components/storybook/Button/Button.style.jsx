import styled from 'styled-components';

const PrimaryButton = styled.button`
border: 2px solid rgb(212, 15, 80);
border-radius: 4px;
background-color: rgb(212, 15, 80);
padding: 17px 30px;
color: white;
font-size: 16px;
cursor: pointer;
transition: 0.2s ease-in-out;
&:hover{
  background-color: white;
  color: rgb(212, 15, 80)
}
`

const SecondaryButton = styled.button`
border: 2px solid rgb(212, 15, 80);
border-radius: 4px;
background-color: white;
padding: 17px 30px;
color: rgb(212, 15, 80);
font-size: 16px;
cursor: pointer;
transition: 0.2s ease-in-out;
&:hover{
  background-color: rgb(212, 15, 80);
  color: white;
}
`

export {PrimaryButton, SecondaryButton};