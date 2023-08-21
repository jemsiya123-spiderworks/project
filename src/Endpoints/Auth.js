import { post, } from './../Config/config';

export const Auth = {
    login: (data) => post('/login', data),
    verifyNewPassword: (data) => post(`forgot-password-save`, data),
    sendOtp: (data) => post(`forgot-password`, data),
}

