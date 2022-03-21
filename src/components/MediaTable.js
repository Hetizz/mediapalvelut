// import PropTypes from 'prop-types';
// import {useEffect, useState} from 'react';
import MediaRow from './MediaRow';
// import {baseUrl} from '../utils/variables';
import {useMedia} from '../hooks/ApiHooks';


const MediaTable = () => {
  const {mediaArray} = useMedia();

  console.log(mediaArray);
  return (
    <table>
      <tbody>
        {mediaArray.map((item, index) => {
          return <MediaRow key={index} file={item} />;
        })}
      </tbody>
    </table>
  );
};

MediaTable.propTypes = {};

export default MediaTable;
