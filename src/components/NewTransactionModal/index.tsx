import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, ModalContent, ModalOverlay, ModalTitle, ModalForm } from "./styles";
import { X } from "phosphor-react";

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

          <button type="submit">
            Cadastrar
          </button>
        </ModalForm>

        
      </ModalContent>
    </Dialog.Portal>
  );
}

export { NewTransactionModal };