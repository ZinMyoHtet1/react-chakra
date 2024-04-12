import dashboardActions from "./actionTypes";

const { TASKS_FETCH_REQUEST, TASKS_FETCH_SUCCESS, TASKS_FETCH_FAIL } =
  dashboardActions;

const initialState = {
  loading: false,
  tasks: [],
  error: "",
};

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case TASKS_FETCH_REQUEST:
      console.log("Requesting");
      return {
        ...state,
        loading: true,
      };
    case TASKS_FETCH_SUCCESS:
      console.log("Success");

      return {
        loading: false,
        tasks: action.payload,
        error: "",
      };
    case TASKS_FETCH_FAIL:
      console.log("Fail");

      return {
        loading: false,
        tasks: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

export default dashboardReducer;
