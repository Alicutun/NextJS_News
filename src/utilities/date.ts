// format YYYY-MM-DD HH:MM:SS
export const formatTimeToYMD_HMS = (time: string) => {
  const format = new Date(time).toISOString().slice(0, 19).replace('T', ' ');
  return format;
};
// format YYYY-MM-DD (list Article)
export const formatTimeToYMD = (time: string) => {
  const format = new Date(time).toISOString().slice(0, 10).replace('T', ' ');
  return format;
};
