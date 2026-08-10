export const formatCurrency = (value: number, currency: string = "USD") => {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch (error) {
    // Fallback to a simple formatting if Intl fails or currency code is invalid
    return `$${value.toFixed(2)}`;
  }
};
