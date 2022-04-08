import {useEffect, useState} from 'react';
import {baseUrl} from '../utils/variables';

const fetchJson = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    if (response.ok) {
      return json;
    } else {
      const message = json.message;
      throw new Error(message);
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

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

const useUser = () => {
  const getUser = async (token) => {
    const fetchOptions = {
      method: 'GET',
      headers: {
        'x-access-token': token,
      },
    };
    return await fetchJson(baseUrl + 'users/user', fetchOptions);
  };

  const getUsername = async (username) => {
    const checkUser = await fetchJson(baseUrl + 'users/username/' + username);
    if (checkUser.available) {
      return true;
    } else {
      throw new Error('Username not available');
    }
  };

  const postUser = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    return await fetchJson(baseUrl + 'users', fetchOptions);
  };
  return {getUser, postUser, getUsername};
};

const useLogin = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    return await fetchJson(baseUrl + 'login', fetchOptions);
  };
  return {postLogin};
};

const useTag = () => {
  const getTag = async (tag) => {
    const tagResult = await fetchJson(baseUrl + 'tags/' + tag);
    if (tagResult.length > 0) {
      return tagResult;
    } else {
      throw new Error('No results');
    }
  };
  return {getTag};
};

export {useMedia, useUser, useLogin, useTag};
