import {
  INIT_TARIFFS,
  FILTER_TARIFFS,
  FILTER_SOFTWARE,
} from '../actionTypes/tariffsAT';

export const initTariffsAC = (payload) => {
  return {
    type: INIT_TARIFFS,
    payload,
  };
};
export const filterTariffsAC =(payload) =>{
  return {
    type : FILTER_TARIFFS,
    payload,
  }
}
export const filterDistributiveAC =(payload) =>{
  return {
    type : FILTER_SOFTWARE,
    payload,
  }
}




