import axios from 'axios';


export function showHouseData(houseList) {
  return {
    type: 'GET_ALL_HOUSE_DATA',
    payload: houseList
  };
}

export function getHouseMapData() {
  return function (dispatch) {
    axios
      .get(`http://demo4452328.mockable.io/properties`)
      .then((res) => {
        const houseList = res.data.data;
        dispatch(showHouseData(houseList));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}