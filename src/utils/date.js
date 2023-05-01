import dayjs from 'dayjs';

const today = dayjs();

const dayDiff = date => today.diff(date, 'day');

const runningTime = time => {
  return { hour: Math.floor(time / 60), minute: Math.floor(time % 60) };
};

export { today, dayDiff, runningTime };
