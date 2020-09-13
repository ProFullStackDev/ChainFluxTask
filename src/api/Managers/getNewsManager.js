import {get} from '../chainFluxTaskClient';

const getINDNews = () => {
  return get ('?country=in&apiKey=b2b2ac206923480aa0467475337780a7');
};

const getTechNews = () => {
  return get (
    '?country=in&category=technology&apiKey=b2b2ac206923480aa0467475337780a7'
  );
};

module.exports = {
  getINDNews,
  getTechNews,
};
