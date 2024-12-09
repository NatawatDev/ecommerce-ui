const formatPrice = (price: number): string => {
  return price.toLocaleString('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export default formatPrice
