import styled, { ThemeContext, css } from "styled-components";

const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;
`;

type SummaryCardProps = {
  variant?: "green";
}


const SummaryCard = styled.div<SummaryCardProps>`
  background: ${({theme}) => theme.colors["gray-600"]};
  border-radius: 6px;
  padding: 1.5rem 1.5rem 1.5rem 2rem;

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({theme}) => theme.colors["gray-300"]};
  }

  strong{
    display: block;
    margin-top: 1rem;
  }

  ${({variant, theme}) => variant === "green" && css`
    background: ${theme.colors["green-700"]};
  `}
`;

export { SummaryContainer, SummaryCard };