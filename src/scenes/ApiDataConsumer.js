let baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api'

const getApiData = async (base = '') => {
  const response = await fetch(base, {
    method: 'GET',
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'       
    },
    referrerPolicy: 'no-referrer', 
  });
  return JSON.stringify(await response.json()); 
}

const postApiData = async (base = '', data = {}) => {
  const response = await fetch(base, {
    method: 'POST',
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'       
    },
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  return JSON.stringify(await response.json()); 
}
 

export const consumeGameData = {
  async getGameID(url = baseUrl) {
    let result;
    if (localStorage.getItem('Mygame_id') !== null) {
      result = localStorage.getItem('Mygame_id');
    } else {
      const newGameID = await postApiData(`${url}/games/`, {
        name: "Phoom Game",
      });
      console.log(newGameID)
      const newGameIDToJSON = JSON.parse(newGameID);
      const sliceArray = newGameIDToJSON.result.match(new RegExp('ID: ' + '(.*)' + ' added'));
      const [ID] = sliceArray[1];
      localStorage.setItem('Mygame_id', ID);
    }
    return result;
  },

  async postGameStats(user, score, url = baseUrl) {
    const response = await postApiData(
      `${url}/games/${await this.getGameID()}/scores`,
      {user,score}
    )
    return response
  }, 

  async getGamersStats(url = baseUrl) {
    const response = await getApiData(
      `${url}/games/${await this.getGameID()}/scores`,
    )
    return JSON.parse(await response).result
  }
}