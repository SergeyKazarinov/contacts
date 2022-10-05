import { AppDispatch } from "../index";
import { userSlice } from "./UserSlice";

export const fetchUser = () => async (dispatch: AppDispatch) => {
  try {
    await fetch('http://localhost:3001/contacts')
      .then(res => res.json())
      .then(data => dispatch(userSlice.actions.usersFetchingSuccess(data)))
      .catch(e => dispatch(userSlice.actions.userFetchingError(e.message)))

  } catch (e) {
    dispatch(userSlice.actions.userFetchingError((e as Error).message))
  }
}

