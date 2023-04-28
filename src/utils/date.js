import dayjs from 'dayjs';

const today = dayjs();

const dayDiff = date => {
  return today.diff(date, 'day');
};

export { today, dayDiff };
