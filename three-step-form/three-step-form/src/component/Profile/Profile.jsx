import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfileform } from '../../redux/profileslice';
import { setActivebar } from '../../redux/activebarslic';
import Button from '../Button';

const Profile = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profile);

  console.log('Re-rendering Profile');
  console.log(profiles, '==== profile state');

  useEffect(() => {
    if (profiles?.name) {
      setName(profiles.name);
    }
  }, [profiles?.name]);

  const handleNext = useCallback(() => {
    if (name.trim() === '') return alert("Name is required!");

    dispatch(updateProfileform({ field: 'name', value: name }));
    dispatch(setActivebar('intrest'));
  }, [dispatch, name]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Profile</h2>
      <input
        type="text"
        placeholder="Enter name here..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />
      <div style={styles.buttonWrapper}>
        <Button text="Next" onClick={handleNext} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    maxWidth: 400,
    margin: '0 auto',
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
  },
  input: {
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    border: '1px solid #ccc',
  },
  buttonWrapper: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'flex-end',
  },
};

export default Profile;
