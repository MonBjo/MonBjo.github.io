export const addWeatherData = (data) => {
  console.log("Data added to state: ", data);
  return {
    type: 'ADD_DATA',
    payload: data
  }
}

export const saveToLocalstorage = (data) => {
  return {
      type: 'SAVE_TO_LOCALSTORAGE',
      payload: data
  }
}