import styled from "styled-components";

const HeaderContainer = styled.header`
  background: ${({theme}) => theme.colors["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${({theme}) => theme.colors["green-500"]};
  color: ${({theme}) => theme.colors.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  transition: 0.4s;

  &:hover{
    background-color: ${({theme}) => theme.colors["green-700"]};
  }
`;

export {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton
};