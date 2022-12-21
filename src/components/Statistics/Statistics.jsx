import { Label, Percentage } from './Statistics.styled';
export const Statistics = ({ stat: { label, percentage } }) => {
  return (
    <>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </>
  );
};
