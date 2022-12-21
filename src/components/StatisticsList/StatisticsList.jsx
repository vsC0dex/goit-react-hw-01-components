import { Statistics } from 'components/Statistics/Statistics';

import { Item, List, Section, Title } from './StatisticsList.styled';
export const StatisticsList = ({ stats }) => {
  return (
    <Section>
      <Title>Upload stats</Title>
      <List>
        {stats.map(stat => (
          <Item key={stat.id}>
            <Statistics stat={stat} />
          </Item>
        ))}
      </List>
    </Section>
  );
};
