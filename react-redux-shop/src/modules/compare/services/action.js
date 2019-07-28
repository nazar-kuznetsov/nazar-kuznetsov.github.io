import {ADD_COMPARE, CLEAR_COMPARE, DELETE_COMPARE, COMPARE_UPDATE_LOCAL_STORAGE} from './constants';

export const addCompare = data => ({
  type: ADD_COMPARE,
  payload: data
});

export const clearCompare = () => ({
  type: CLEAR_COMPARE
});

export const deleteCompare = id => ({
  type: DELETE_COMPARE,
  payload: {id}
});

export const compareUpdateLocalStorage = () => ({
  type: COMPARE_UPDATE_LOCAL_STORAGE
});

export const saveLocalStorage = data => {
  localStorage.setItem('compare-phone', JSON.stringify(data));
};

export const loadLocalStorage = () => {
  return JSON.parse(localStorage.getItem('compare-phone'));
};

export const clearLocalStorage = () => {
  localStorage.removeItem('compare-phone');
};


