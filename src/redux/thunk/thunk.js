import { 
  initTariffsAC,
} from '../actionCreators/tariffsAC.js';

const URL = 'https://api.sweb.ru/notAuthorized/';
const PARAMS = {"jsonrpc":"2.0","method":"vpsOsConfig","params":{}};

export const postFetchTariffsAC = () => {
  return (dispatch) => {
     fetch(URL, {
      method: 'POST',
      body: JSON.stringify(PARAMS),
    })
      .then((response) => response.json())
      .then((data) => {
            dispatch(initTariffsAC(data.result));
      });
  }
}
