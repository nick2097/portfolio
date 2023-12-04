import styled from "styled-components";
import {Theme} from "../../../styles/theme";

const Contacts = styled.section`
  position: relative;
`
const Form = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  
  textarea {
    resize: none;
    height: 155px;
  }
`

const Field = styled.input`
  width: 100%;
  background-color: ${Theme.colors.secondaryBg};
  border: 1px solid ${Theme.colors.borderColor};
  padding: 7px 15px;
  
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;
  color: ${Theme.colors.font};
  
  &::placeholder {
    color: #495057;
    text-transform: capitalize;
  }
  
  &:focus-visible {
    outline: 2px solid ${Theme.colors.borderColor};
  }
`

export const S = {
    Contacts,
    Form,
    Field
}