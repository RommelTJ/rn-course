import {ADD_PLACE, DELETE_PLACE, DESELECT_PLACE, SELECT_PLACE} from "../actions/actionTypes";

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat(
          {
            key: Math.random().toString(),
            name: action.payload,
            image: {
              uri: "https://www.gannett-cdn.com/-mm-/fa888cd8ba5934840efa2cd0be4e477c78b2b1d1/c=0-42-2118-1239&r=x1683&c=3200x1680/local/-/media/2016/07/25/Phoenix/Phoenix/636050500824809040-ThinkstockPhotos-516182342.jpg"
            }
          }
        )
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((place) => place.key !== state.selectedPlace.key),
        selectedPlace: null
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => place.key === action.payload)
      };
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    default:
      return state;
  }
};

export default reducer;