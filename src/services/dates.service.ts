import { format } from 'date-fns';

export const asVerbose = (date: Date | string) => {
  return format(date, 'MMMM Do, YYYY');
};
