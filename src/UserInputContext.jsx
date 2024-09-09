import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserInputContext = createContext();

export const UserInputProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [userData, setUserData] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  useEffect(() => {
    if (success) {
      fetchUserData();
      navigate("/Cru");
    }
  }, [success, navigate]);

  const handleSubmit = async (e) => {
    if (e) {
        e.preventDefault();
    }
    const { name, email, password } = formData;
    if (!name || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      alert('Sign up successful!');
 
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        password: ''
      });
      setSuccess(true);

      
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while signing up.');
      setFormData({
        name: '',
        email: '',
        password: ''
      });
    }
  };

  const fetchUserData = async () => {
    try {
      const incoming = await fetch('http://localhost:8080/users',{
        method:'GET'
      });
      
      if (!incoming.ok) {
        throw new Error('Network incoming was not ok');
      }
      const urdata = await incoming.json();
      setUserData(urdata);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };  
  const delChange = async (userId) => {
    console.log("User ID:", userId);
    try {
      const response = await fetch(`http://localhost:8080/delete?usid=${userId}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      const urdata = await response.json();
      alert('Data is successfully deleted!');
      setUserData(urdata);
      
    } catch (error) {
      console.error('Error deleting user:', error);
      
    }
  }
  
  // const updatUser = async (userId, updatedData) => {
  //   try {
  //     const response = await fetch(`http://localhost:8080/update?usied=${userId}`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(updatedData),
  //     });
  //     if (!response.ok) {
  //       throw new Error('Failed to update user data');
  //     }
  //     const data = await response.json();
  //     console.log(data);
  //     alert('User data updated successfully!');
      
  //   } catch (error) {
  //     console.error('Error updating user data:', error);
  //   }
  // }
  

  return (
    <UserInputContext.Provider value={{ formData, success, delChange, handleChange, handleSubmit, userData, fetchUserData }}>
      {children}
    </UserInputContext.Provider>
  );
};

export default UserInputContext;
