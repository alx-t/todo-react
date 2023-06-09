import { AuthApi } from "src/features/api/auth/auth-api";
import { AppThunk } from "src/store/store";
import { removeMe, setMe } from "./auth-slice";

export const getMeTC = (): AppThunk => async (dispatch) => {
  try {
    const res = await AuthApi.getMe();
    if (res.data.resultCode === 0) {
      dispatch(setMe(res.data.data))
    } else {
      alert(res.data.messages[0])
    }
  } catch (error) {
    alert(error)
  }
}

export const authorizeTC = (email: string, password: string, rememberMe: boolean, captcha: boolean): AppThunk => async (dispatch) => {
  try {
    const res = await AuthApi.authorize(email, password, rememberMe, captcha);
    if (res.data.resultCode === 0) {
      dispatch(setMe(res.data.data))
    } else {
      alert(res.data.messages[0])
    }
  } catch (error) {
    alert(error)
  }
}

export const logoutTC = (): AppThunk => async (dispatch) => {
  try {
    const res = await AuthApi.logout();
    if (res.data.resultCode === 0) {
      dispatch(removeMe())
    } else {
      alert(res.data.messages[0])
    }
  } catch (error) {
    alert(error)
  }
}
