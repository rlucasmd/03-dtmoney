import { useTheme } from "styled-components";
import { RegularText, TitleText } from "../Typography";
import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

function Summary(){
  const { colors } = useTheme();
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
          R$ 17.000,00
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
          R$ 17.000,00
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
          R$ 17.000,00
        </TitleText>
      </SummaryCard>
    </SummaryContainer>
  );
}

export { Summary };