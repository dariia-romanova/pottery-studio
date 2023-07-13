export const getDates = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  return `${startDate.getDate()}.${startDate.getMonth() + 1} - ${endDate.getDate()}.${endDate.getMonth() + 1}`;
}