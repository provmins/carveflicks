import dayjs from 'dayjs';
import 'dayjs/locale/ko';

const today = dayjs();

const dayDiff = date => today.diff(date, 'day');

const runningTime = time => {
  return { hour: Math.floor(time / 60), minute: Math.floor(time % 60) };
};

const getYear = today.year();

const getMonth = today.format('MM');

const getDay = day => today.add(day, 'day').locale('ko').format('DD');

const getWeekDay = day => today.add(day, 'day').locale('ko').format('ddd');

const getTime = day => today.format('ss');

export { today, dayDiff, runningTime, getYear, getMonth, getDay, getWeekDay, getTime };
