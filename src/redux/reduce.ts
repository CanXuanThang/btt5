import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  SEARCH_VALUE_ITEM,
} from "./types";

interface DataState {
  data: any;
  loading: boolean;
  error: any;
  searchItem?: any;
}

const initialState: DataState = {
  data: null,
  loading: false,
  error: null,
  searchItem: null,
};

const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SEARCH_VALUE_ITEM:
      return {
        ...state,
        loading: false,
        searchItem: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
