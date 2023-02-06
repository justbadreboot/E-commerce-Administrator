const initialState = {
    data: {}
  };
  
  export const PUT_ACTION = 'PUT_ACTION';
  
  export const putAction = payload => ({
    type: PUT_ACTION,
    payload,
  });
  
export const putProdAction= payload=>({
  type: PUT_ACTION,
  payload
})