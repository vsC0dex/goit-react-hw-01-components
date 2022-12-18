import { Statistics } from 'components/Statistics/Statistics';

export const StatisticsList = ({ stats }) => {
  return (
    <ul>
      {stats.map(stat => (
        <li key={stat.id}>
          <Statistics stat={stats} />
        </li>
      ))}
    </ul>
  );
};
