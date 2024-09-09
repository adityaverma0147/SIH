import React, { useContext } from 'react';
import UserInputContext from './UserInputContext';
import './cru.css'; 
import pencil from './pencil.png';
import dustbin from './dustbin.png';
import { Link } from 'react-router-dom';
const Cru = () => {
const { delChange,success, updatUser,userData } = useContext(UserInputContext);
console.log(success);
// if(!success){
//   return "Loading...";
// }
// const updatedForm = () => {
// }

// fetchUserData()
  return (
    <div className='cruPage'>
      <table className='cruTable'>
        <thead>
          <tr>
            <th className='userID'><Link to= '/FormComponent'>Sr No.</Link></th>
            <th className='userName'>Name</th>
            <th className='userEmail'>Email</th>
            <th className='userPassword'>Password</th>
            <th>DELETE</th>
            <th>UPDATE</th>
          </tr> 
        </thead>
        <tbody>
          {userData && userData.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              
              <td>
                <button onClick={() => delChange(user.id)}>
                    <img src={dustbin} alt="del." />
                </button>
                </td>
                <td>
                <button onClick={() => updatUser(user.id)}><img src={pencil} alt="update" /></button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>            
    </div>
  );
}

export default Cru;
