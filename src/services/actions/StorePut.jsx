const initialState = {
    data: {}
  };
  
  export const PUT_ACTION = 'PUT_ACTION';
  
  export const putAction = payload => ({
    type: PUT_ACTION,
    payload,
  });
  