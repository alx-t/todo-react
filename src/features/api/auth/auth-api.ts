import { IResponseData } from "src/shared/types/types";
import { axiosInstance } from "../../../shared/api/axios";
import { IUser } from "../../../entities/types/types";

export const AuthApi = {

  /**
   * Is current user authorized
   */
  getMe: () => axiosInstance.get<IResponseData<IUser>>('/auth/me'),

  /**
   * Authorize on the service
   * @param email 
   * @param password 
   * @param rememberMe 
   * @param captcha 
   */
  authorize: (email: string, password: string, rememberMe: boolean = false, captcha: boolean = false) => 
    axiosInstance.post<IResponseData<IUser>>('/auth/login', {email, password, rememberMe, captcha}),

  /**
   * Unfollow requested user
   */
  logout: () => axiosInstance.delete<IResponseData>('/auth/login')  
}
