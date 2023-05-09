import { useTransaction } from "../hooks/useTransaction";

function useSummary(){
  const { transactions } = useTransaction();
  const summary = transactions.reduce((accumulator, {type, price}) => {
    if(type === "income"){
      accumulator["income"] += price;
      accumulator["total"] += price;
    }
    if(type === "outcome"){
      accumulator["outcome"] += price;
      accumulator["total"] -= price;
    }
    return accumulator;
  }, {income: 0, outcome: 0, total: 0});
  return { summary };
}

export { useSummary };