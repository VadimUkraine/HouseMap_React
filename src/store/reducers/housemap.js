const INIT_STATE = {
  houseList: {}
};

export default function showHouseData(state = INIT_STATE, action) {
  switch (action.type) {
    case 'GET_ALL_HOUSE_DATA':
      return { houseList: action.payload };
    default:
      return state;
  }
}
