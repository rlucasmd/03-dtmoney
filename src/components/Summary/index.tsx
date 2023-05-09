import { useTheme } from "styled-components";
import { RegularText, TitleText } from "../Typography";
import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useTransaction } from "../../hooks/useTransaction";
import { formatMoney } from "../../utils/formatter";

function Summary(){
  const { colors } = useTheme();
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

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <RegularText>
            Entradas
          </RegularText>
          <ArrowCircleUp 
            size={32} 
            color={colors["green-300"]}
          />
        </header>
        <TitleText>
          {formatMoney.format(summary.income)}
        </TitleText>
      </SummaryCard>
      <SummaryCard>
        <header>
          <RegularText>
            Saídas
          </RegularText>
          <ArrowCircleDown 
            size={32} 
            color={colors["red-300"]}
          />
        </header>
        <TitleText>
          {formatMoney.format(summary.outcome)}
        </TitleText>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <RegularText>
            Total
          </RegularText>
          <CurrencyDollar 
            size={32} 
            color={colors.white}
          />
        </header>
        <TitleText>
          {formatMoney.format(summary.total)}  
        </TitleText>
      </SummaryCard>
    </SummaryContainer>
  );
}

export { Summary };