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
        // flexDirection: 'column',
        
        
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









// Такой обьект получаем data.json
// [
//     { "id": "id-1", "label": ".docx", "percentage": 22 },
//     { "id": "id-2", "label": ".pdf", "percentage": 4 },
//     { "id": "id-3", "label": ".mp3", "percentage": 17 },
//     { "id": "id-4", "label": ".psd", "percentage": 47 },
//     { "id": "id-5", "label": ".pdf", "percentage": 10 }
//   ]
  


