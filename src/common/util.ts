import { DateTime } from 'luxon';
import { DATE_FORMAT } from './constant';

export const toggleDarkMode = () => {
  const isContainDark = document.body.classList.contains('dark');

  if (isContainDark) {
    document.body.classList.remove('dark');
  } else {
    document.body.classList.add('dark');
  }
  return isContainDark;
};

export const parseDate = (dateString: string, format?: string) => {
  return DateTime.fromISO(dateString).toFormat(format ?? DATE_FORMAT);
};
