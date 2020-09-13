import axios from 'axios';

let apiClient = null;

class ChainFluxTaskClient {
  constructor () {
    this.get = this.get.bind (this);
  }

  _getClient () {
    apiClient = axios.create ({
      baseURL: 'http://newsapi.org/v2/top-headlines',
    });

    return apiClient;
  }

  _config () {
    return {};
  }

  get (url) {
    return this._getClient ().get (url, this._config ());
  }
}

const cFClient = new ChainFluxTaskClient ();
const get = cFClient.get;

module.exports = {
  get,
  ChainFluxTaskClient,
};
