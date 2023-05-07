import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, ModalContent, ModalOverlay, ModalTitle, ModalForm, TransactionTypeContainer, TransactionTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

function NewTransactionModal(){
  return (
    <Dialog.Portal>
      <ModalOverlay/>
      <ModalContent>
        <ModalTitle>Nova Transação</ModalTitle>
        <CloseButton>
          <X size={24}/>
        </CloseButton>

        <ModalForm>
          <input type="text" placeholder="Descrição" required/>
          <input type="text" placeholder="Preço" required/>
          <input type="text" placeholder="Categoria" required/>

          <TransactionTypeContainer>
            <TransactionTypeButton 
              variant="income"
              value="income"
            >
              <ArrowCircleUp size={24}/>
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton
              variant="outcome"
              value="outcome"
            >
              <ArrowCircleDown size={24}/>
              Saída
            </TransactionTypeButton>
          </TransactionTypeContainer>

          <button type="submit">
            Cadastrar
          </button>
        </ModalForm>

        
      </ModalContent>
    </Dialog.Portal>
  );
}

export { NewTransactionModal };