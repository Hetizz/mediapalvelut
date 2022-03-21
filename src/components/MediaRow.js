import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/variables';
import {Link} from 'react-router-dom';

const MediaRow = ({file}) => {
  console.log('MediaRow');
  return (
    <tr>
      <td>
        <img src={mediaUrl + file.thumbnails.w160} alt={file.title} />
      </td>
      <td>
        <h4>{file.title}</h4>
        <p>{file.description}</p>
      </td>
      <td>
        <Link to={'/single'} state={{file}}>
          View
        </Link>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  file: PropTypes.object,
};

export default MediaRow;
