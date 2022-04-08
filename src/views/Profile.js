// eslint-disable-next-line no-unused-vars
import {useTag, useUser} from '../hooks/ApiHooks';
// eslint-disable-next-line no-unused-vars
import {useContext, useEffect, useState} from 'react';
import {MediaContext} from '../contexts/MediaContext';
import {mediaUrl} from '../utils/variables';

const Profile = () => {
  const [user] = useContext(MediaContext);
  const [avatar, setAvatar] = useState({
    filename: 'https://placekitten.com/200/300',
  });
  const {getTag} = useTag();

  const fetchAvatar = async () => {
    if (user) {
      const avatars = await getTag('avatar_' + user.user_id);
      const ava = avatars.pop();
      ava.filename = mediaUrl + ava.filename;
      setAvatar(ava);
    }
  };

  useEffect(() => {
    fetchAvatar();
  }, [user]);

  return (
    <>
      <h1>Profile</h1>
      {user && (
        <ul>
          <li>
            <img
              src={avatar.filename}
              alt={`${user.username}'s profile image`}
            />
          </li>

          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.full_name}</li>
        </ul>
      )}
    </>
  );
};

export default Profile;
