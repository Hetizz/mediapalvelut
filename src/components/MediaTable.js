// import PropTypes from 'prop-types';
// import {useEffect, useState} from 'react';
import MediaRow from './MediaRow';
// import {baseUrl} from '../utils/variables';
import {useMedia} from '../hooks/ApiHooks';
import {useWindowSize} from '../hooks/WindowHooks';
import {ImageList, CircularProgress} from '@mui/material';


const MediaTable = () => {
  const {mediaArray, loading} = useMedia();
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
          return <MediaRow key={index} file={item} />;
        })}
      </ImageList>
      )}
    </>
  );
};

MediaTable.propTypes = {};

export default MediaTable;
