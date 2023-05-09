import { useTheme } from "styled-components";
import { RegularText, TitleText } from "../Typography";
import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { formatMoney } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

function Summary() {
  const { colors } = useTheme();
  const { summary } = useSummary();
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