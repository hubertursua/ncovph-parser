import moment from 'moment';

export default function toDateRecovered(str: string): Date | null {
  const date = moment(str, 'M/D/YYYY').toDate();

  if (date.toString() === 'Invalid Date') {
    return null;
  }

  return date;
}
