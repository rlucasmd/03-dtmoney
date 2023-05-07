import styled, { ThemeConsumer } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

const ModalOverlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

const ModalContent = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${({theme}) => theme.colors["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

const ModalTitle = styled(Dialog.Title)`
  font-size: 1.5rem;
  line-height: 1.4;
  font-weight: bold;
`;

const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;

  color: ${({theme}) => theme.colors["gray-500"]};
`;

const ModalForm = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input{
    border-radius: 6px;
    border: 0;
    background: ${({theme}) => theme.colors["gray-900"]};
    color: ${({theme}) => theme.colors["gray-300"]};

    padding: 1rem;

    &::placeholder{
      color: ${({theme}) => theme.colors["gray-500"]};
    }
  }
  button[type="submit"]{
      height: 50px;
      border: 0;
      background: ${({theme}) => theme.colors["green-500"]};
      color: ${({theme}) => theme.colors.white};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;

      cursor: pointer;

      transition: 0.2s;

      &:hover{
        background: ${({theme}) => theme.colors["green-700"]};
      }
    }
`;

const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2 ,1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

type TransactionTypeButtonProps = {
  variant: "income" | "outcome";
}

const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  background: ${({theme}) => theme.colors["gray-700"]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;

  border: 0;
  color: ${({theme}) => theme.colors["gray-300"]};

  svg{
    color: ${({theme, variant}) => theme.colors[`${variant}`]};
  }
`;

export { 
  ModalOverlay, 
  ModalContent, 
  ModalTitle, 
  CloseButton, 
  ModalForm, 
  TransactionTypeContainer,
  TransactionTypeButton
};

