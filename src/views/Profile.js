// eslint-disable-next-line no-unused-vars
import {useTag, useUser} from '../hooks/ApiHooks';
// eslint-disable-next-line no-unused-vars
import {useContext, useEffect, useState} from 'react';
import {MediaContext} from '../contexts/MediaContext';
import {mediaUrl} from '../utils/variables';
import {
  Avatar,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import {AccountCircle, Badge, ContactMail} from '@mui/icons-material';

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
      <Typography component="h1" variant="h2">
        Profile
      </Typography>
      {user && (
        <Card>
          <CardContent>
            <List>
              <ListItem>
                <ListItemAvatar sx={{mx: 'auto', width: '100%'}}>
                  <Avatar
                    variant="square"
                    src={avatar.filename}
                    imgProps={{
                      alt: `${user.username}'s profile image`,
                    }}
                    sx={{mx: 'auto', width: '100%', height: '30vh'}}
                  />
                </ListItemAvatar>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText primary={user.username} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ContactMail />
                </ListItemIcon>
                <ListItemText primary={user.email} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Badge />
                </ListItemIcon>
                <ListItemText primary={user.full_name} />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Profile;
