// App.jsx файл
import Profile from "./Profile/Profile";
import user from './user.json';
import Statistics from "./Statistics/Statistics";
import data from './data.json';
import FriendListItem from "./FriendList/FriendList";
import friends from "./friends.json"
import TransactionHistory from "./TransactionHistory/TransactionHistory"
import transactions from './transactions.json';

export const App = () => {
  return (
    <div
      style={{
        
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        gap: 30,
        
        
      }}
    >
   <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    
      <Statistics title={"Upload stats"} data={data} />
    
      <FriendListItem friends={friends}/>


      <TransactionHistory items={transactions} />
    </div>
  );
};








