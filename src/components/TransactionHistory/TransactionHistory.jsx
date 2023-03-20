import PropTypes from 'prop-types';

import {
  Body,
  BodyItems,
  BodyList,
  Head,
  HeadItems,
  HeadList,
  Table,
} from './TransactionHistory.styled';

export const Transactions = ({ items }) => {
  return (
    <Table>
      <Head>
        <HeadList>
          <HeadItems>Type</HeadItems>
          <HeadItems>Amount</HeadItems>
          <HeadItems>Currency</HeadItems>
        </HeadList>
      </Head>

      <Body>
        {items.map(({ type, id, amount, currency }) => (
          <BodyList type={type} key={id}>
            <BodyItems>{type}</BodyItems>
            <BodyItems>{amount}</BodyItems>
            <BodyItems>{currency}</BodyItems>
          </BodyList>
        ))}
      </Body>
    </Table>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
