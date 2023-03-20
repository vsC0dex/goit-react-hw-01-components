import PropTypes from 'prop-types';

// import { Statistics } from 'components/Statistics/Statistics';

import {
  Item,
  List,
  Section,
  Title,
  Label,
  Percentage,
} from './StatisticsList.styled';
export const StatisticsList = ({ stats, title }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Section>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
