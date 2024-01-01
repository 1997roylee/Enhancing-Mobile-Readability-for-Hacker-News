import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(RelativeTime);

export function formatRelative(date: dayjs.Dayjs) {
    const now = dayjs();
    const then = dayjs(date);

    if (now.unix() - then.unix() < 3600) return dayjs().to(dayjs(date));

    return dayjs(date).format('YYYY-MM-DD');
}
