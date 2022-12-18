import { Profile } from './Profile/Profile';
// import { Statistics } from './Statistics/Statistics';
import user from '../user.json';
import data from '../data.json';
import { StatisticsList } from './StatisticsList/StatisticsList';

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
      <StatisticsList stats={data} />
    </div>
  );
};
