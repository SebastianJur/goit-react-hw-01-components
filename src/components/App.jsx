import Profile from './Profile';
import Statistics from './Statistics';
// import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';


import user from '../data/user.json';
import data from '../data/data.json';
// import friends from '../data/FriendList.json';
import transactions from '../data/transactions.json';

const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
      {/* <FriendList friends={friends} /> */}
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;