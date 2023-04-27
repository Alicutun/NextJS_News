import moment from 'moment';

// format YYYY-MM-DD HH:MM:SS
export const formatTimeToYMD_HMS = (time: string) => {
  const format = moment(time).format('YYYY-MM-DD hh:mm:ss');
  return format;
};
// format YYYY-MM-DD (list Article)
export const formatTimeToYMD = (time: string) => {
  const format = moment(time).format('YYYY-MM-DD');
  return format;
};
