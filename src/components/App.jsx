import Profile from './Profile';

// import css from "./Profile.css";

import user from '../data/user.json';

const App = () => {
  return (
    <>
      <Profile user={user} />
    </>
  );
};

export default App;