import styled from "styled-components";

const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input{
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${({theme}) => theme.colors["gray-900"]};
    color: ${({theme}) => theme.colors["gray-300"]};
    padding: 1rem;

    ::placeholder{
      color: ${({theme}) => theme.colors["gray-500"]};
    }
  }

  button{
    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;
    background: transparent;
    border: 1px solid ${({theme}) => theme.colors["green-300"]};
    color: ${({theme}) => theme.colors["green-300"]};
    font-weight: bold;

    border-radius: 6px;

    transition: 0.2s;

    cursor: pointer;

    &:hover{
      background: ${({theme}) => theme.colors["green-500"]};
      border-color: ${({theme}) => theme.colors["green-500"]};
      color: ${({theme}) => theme.colors.white};
    }
  }

`;


export { SearchFormContainer };