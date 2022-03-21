import {useEffect, useState} from 'react';
import {baseUrl} from '../utils/variables';

// const apiUrl = 'http://media.mw.metropolia.fi/wbma/';
const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const getMedia = async () => {
    try {
      const mediaResponse = await fetch(baseUrl + 'media');
      const media = await mediaResponse.json();
      const allFiles = await Promise.all(
          media.map(async (file) => {
            const fileResponse = await fetch(`${baseUrl}media/${file.file_id}`);
            return await fileResponse.json();
          }),
      );
      setMediaArray(allFiles);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);
  return {mediaArray};
};

export {useMedia};
