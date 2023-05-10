import * as Dialog from "@radix-ui/react-dialog";
import {
  TransactionTypeContainer,
  TransactionTypeButton,
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalTitle,
  ModalForm,
} from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { useTransaction } from "../../hooks/useTransaction";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"])
});

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

function NewTransactionModal() {
  const { createTransaction } = useTransaction();

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset
  } = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: "income"
    }
  });

  async function handleCreateNewTransaction(data: newTransactionFormInputs) {
    await createTransaction(data);
    reset();
  }

  return (
    <Dialog.Portal>
      <ModalOverlay />
      <ModalContent>
        <ModalTitle>Nova Transação</ModalTitle>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <ModalForm onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register("description")}
          />
          <input
            type="text"
            placeholder="Preço"
            required
            {...register("price", { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register("category")}
          />

          <Controller
            name="type"
            control={control}
            render={({ field }) => {
              return (
                <TransactionTypeContainer
                  onChange={field.onChange}
                  defaultValue={field.value}
                >
                  <TransactionTypeButton
                    variant="income"
                    value="income"
                  >
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton
                    variant="outcome"
                    value="outcome"
                  >
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionTypeContainer>
              );
            }}
          />



          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </ModalForm>


      </ModalContent>
    </Dialog.Portal>
  );
}

export { NewTransactionModal };