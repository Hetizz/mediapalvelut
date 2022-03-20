import './App.css';
import MediaTable from './components/MediaTable';

const mediaArray = [
  {
    title: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales ' +
      'enim eget leo condimentum vulputate. ' +
      'Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi ' +
      'mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget ' +
      // eslint-disable-next-line max-len
      'elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales ' +
      'eros.',
    thumbnails: {
      w160: 'http://placekitten.com/160/161',
    },
    filename: 'http://placekitten.com/2048/1920',
  },
  {
    title: 'Title 2',
    description:
    // eslint-disable-next-line max-len
      'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    thumbnails: {
      w160: 'http://placekitten.com/160/162',
    },
    filename: 'http://placekitten.com/2041/1922',
  },
  {
    title: 'Title 3',
    description:
    // eslint-disable-next-line max-len
      'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    thumbnails: {
      w160: 'http://placekitten.com/160/163',
    },
    filename: 'http://placekitten.com/2039/1920',
  },
];

function App() {
  return <MediaTable mediaArray={mediaArray}/>;
}

export default App;
