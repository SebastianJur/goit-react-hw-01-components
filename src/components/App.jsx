import Profile from './Profile';
import Statistics from './Statistics';
// import FriendList from './FriendList';

// import css from "./Profile.css";

import user from '../data/user.json';
import data from '../data/data.json';
// import friends from '../data/FriendList.json';

const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
      {/* <FriendList friends={friends} /> */}
    </>
  );
};

export default App;