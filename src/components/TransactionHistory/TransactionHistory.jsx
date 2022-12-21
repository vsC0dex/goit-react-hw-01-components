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
        {items.map(items => (
          <BodyList type={items.type} key={items.id}>
            <BodyItems>{items.type}</BodyItems>
            <BodyItems>{items.amount}</BodyItems>
            <BodyItems>{items.currency}</BodyItems>
          </BodyList>
        ))}
      </Body>
    </Table>
  );
};
