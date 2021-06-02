export function formatPrice(value: number | string): string {
  const priceValue = Number(value);

  const formated = priceValue.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return formated;
}
