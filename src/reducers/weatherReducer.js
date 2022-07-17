const initialState = {
  weatherData: []
}

const weatherDataReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_DATA':

      const copyArray = [...state.weatherData];
      const filterdState = copyArray.filter(item => item.title !== action.payload.title); // no dupes plz
      
      if(filterdState.length === state.weatherData.length) {
        action.payload.key = state.weatherData.length;
        return {
          ...filterdState,
          weatherData: [
            ...filterdState,
            action.payload
          ]
        }
      }
      return {
        ...state
      }

    case 'SAVE_TO_LOCALSTORAGE':
      localStorage.setItem('weatherData', JSON.stringify(state.weatherData));
      return state;

    default:
      return state
  }
}