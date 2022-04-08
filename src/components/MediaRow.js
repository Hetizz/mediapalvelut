import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/variables';
import {Link} from 'react-router-dom';
import {ImageListItem, ImageListItemBar} from '@mui/material';

const MediaRow = ({file}) => {
  console.log('MediaRow');
  return (
    <ImageListItem
      key={file.file_id}
      component={Link}
      to={'/single'}
      state={{file}}
    >
      <img
        src={mediaUrl + file.thumbnails.w320}
        alt={file.title}
        loading="lazy"
      />
      <ImageListItemBar title={file.title} subtitle={file.description} />
    </ImageListItem>
  );
};

MediaRow.propTypes = {
  file: PropTypes.object,
};

export default MediaRow;
