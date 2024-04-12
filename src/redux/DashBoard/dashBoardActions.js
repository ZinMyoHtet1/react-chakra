import dashboardActions from "./actionTypes";

const { TASKS_FETCH_REQUEST, TASKS_FETCH_SUCCESS, TASKS_FETCH_FAIL } =
  dashboardActions;

export const fetchRequest = () => {
  return { type: TASKS_FETCH_REQUEST, payload: null };
};

export const fetchSuccess = (tasks) => {
  return { type: TASKS_FETCH_SUCCESS, payload: tasks };
};

export const fetchFail = (error) => {
  return { type: TASKS_FETCH_FAIL, payload: error };
};

export const tasksLoader = async (dispatch, url) => {
  try {
    dispatch(fetchRequest());
    let i = 0;
    while (i < 100000) i++;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Something went wrong!");
    }
    const tasks = await res.json();
    dispatch(fetchSuccess(tasks));
    // return { data: tasks };
  } catch (error) {
    console.log("error", error);
    dispatch(fetchFail(error.message));
    // return { error: error.message };
  }
};
