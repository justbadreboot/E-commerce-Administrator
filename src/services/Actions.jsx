import axios from 'axios';

export const fetchData = () => {
  return (dispatch) => {
    axios.get('https://tu-api.com/data')
      .then(res => {
        dispatch({
          type: 'FETCH_DATA',
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: 'FETCH_DATA_ERROR',
          payload: err
        });
      });
  };
};
