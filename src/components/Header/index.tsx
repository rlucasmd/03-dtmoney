import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImage from "../../assets/logo.svg";

function Header(){
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} />
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}

export { Header };