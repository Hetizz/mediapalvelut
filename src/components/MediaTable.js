import PropTypes from 'prop-types';
// import {useEffect, useState} from 'react';
import MediaRow from './MediaRow';
// import {baseUrl} from '../utils/variables';
import {useMedia} from '../hooks/ApiHooks';
import {useWindowSize} from '../hooks/WindowHooks';
import {ImageList, CircularProgress} from '@mui/material';
import {useContext} from 'react';
import {MediaContext} from '../contexts/MediaContext';

const MediaTable = ({allFiles = true}) => {
  const {user} = useContext(MediaContext);
  const {mediaArray, loading, deleteMedia} = useMedia(allFiles, user?.user_id);
  const windowSize = useWindowSize();
  console.log(mediaArray);
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
      <ImageList
        variant="masonry"
        cols={windowSize.width > 768 ? 3 : 2} gap={8}>
        {mediaArray.map((item, index) => {
          return <MediaRow
            key={index}
            file={item}
            userId={user.user_id}
            deleteMedia={deleteMedia} />;
        })}
      </ImageList>
      )}
    </>
  );
};

MediaTable.propTypes = {
  allFiles: PropTypes.bool,
};

export default MediaTable;
