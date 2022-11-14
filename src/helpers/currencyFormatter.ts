export const currencyFormatter = (number: number, currencyType: string) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyType,
  });

  return formatter.format(number);
};
