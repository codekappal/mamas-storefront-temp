export function parseCookTimeToMinutes(cookTime: string): number {
  const minutes = parseInt(cookTime, 10);
  return Number.isNaN(minutes) ? 30 : minutes;
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
