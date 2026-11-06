export function formatCurrency(cents) {
  if (!Number.isFinite(cents)) {
    throw new Error("Amount must be a finite number");
  }

  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
  }).format(cents / 100);
}