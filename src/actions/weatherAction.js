export const saveWeatherData = (data) => {
  console.log("Data added to state: ", data);
  return {
    type: 'SAVE_DATA',
    payload: data
  }
}

export const saveToLocalstorage = (data) => {
  return {
      type: 'SAVE_TO_LOCALSTORAGE',
      payload: data
  }
}