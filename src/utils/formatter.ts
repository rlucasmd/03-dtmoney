const formatMoney = new Intl.NumberFormat(
  "pt-BR", 
  { 
    style:"currency",
    currency: "BRL"
  }
);

const formatDate = new Intl.DateTimeFormat("pt-BR");

export { formatDate, formatMoney };