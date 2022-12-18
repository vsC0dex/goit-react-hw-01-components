import { Statistics } from 'components/Statistics/Statistics';
export const StatisticList = ({ stats }) => {
  return stats.map(stat => (
    <li key={stat.id}>
      <Statistics stat={stat} />
    </li>
  ));
};
