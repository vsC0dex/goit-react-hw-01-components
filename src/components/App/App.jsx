import { Profile } from '../Profile/Profile';
import user from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import { StatisticsList } from '../StatisticsList/StatisticsList';
import { Friends } from '../Friends/Friends';
import { Transactions } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
