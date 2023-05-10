import { SearchFormContainer } from "./styles";

import { MagnifyingGlass } from "phosphor-react";
import { useTransaction } from "../../../../hooks/useTransaction";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

function SearchForm(){
  const { 
    register, 
    handleSubmit,
    formState: { isSubmitting }
   } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });
  const { fetchTransactions } = useTransaction();
  console.log(isSubmitting);

  async function handleSearchTransaction(data: SearchFormInputs){
    await fetchTransactions(data.query);
  }

  return(
    <SearchFormContainer
      onSubmit={handleSubmit(handleSearchTransaction)}
    >
      <input 
        type="text" 
        placeholder="Busque por transações" 
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20}/>
        Buscar
      </button>
    </SearchFormContainer>
  );
}

export { SearchForm };