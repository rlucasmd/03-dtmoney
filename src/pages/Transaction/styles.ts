import styled from "styled-components";

const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  tr{
    td:first-child{
      width: 50%;
    }
  }

  td{
    padding: 1.25rem 2rem;
    background: ${({theme}) => theme.colors["gray-700"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

`;

type PriceHighlightProps = {
  variant: "income" | "outcome";
}

const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({theme, variant}) => theme.colors[`${variant}`]};
`;

export { TransactionsContainer, TransactionsTable, PriceHighlight };