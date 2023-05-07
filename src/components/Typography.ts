import styled from "styled-components";

type RegularTextProps = {
  size?: "s" | "m" | "l";
}


type TitleTextProps = {
  size?: "s" | "m";
}

const RegularText = styled.span<RegularTextProps>`
  font-family: Roboto, sans-serif;
  font-size: ${({ theme, size }) => theme.fonts[`text-${size ?? "m"}`]};
  color: ${({theme}) => theme.colors["gray-300"]};
`;

const TitleText = styled.strong<TitleTextProps>`
  font-family: Roboto, sans-serif;
  font-size: ${({ theme, size }) => theme.fonts[`title-${size ?? "s"}`]};
  color: ${({theme}) => theme.colors["gray-300"]};
`;


export { RegularText, TitleText };