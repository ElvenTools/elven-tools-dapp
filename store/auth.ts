import { proxy } from 'valtio';
import { LoginMethodsEnum } from '../types/enums';
import cloneDeep from 'lodash.clonedeep';
import { LoginResponse } from '../pages/api/auth/issueJsonWebToken';

// Account info state + persistance

interface AccountState extends Record<string, any> {
  address: string;
  nonce: number;
  balance: string;
}

const accountInitialState: AccountState = {
  address: '',
  nonce: 0,
  balance: '',
};

export const accountState = proxy(accountInitialState);

export const setAccountState = (key: keyof AccountState, value: any) => {
  accountState[key] = value;
};

export const clearAccountState = () => {
  const resetObj = cloneDeep(accountInitialState);
  Object.keys(resetObj).forEach((key) => {
    accountState[key] = resetObj[key];
  });
};

// Login info state + persistance

interface LoginInfoState extends Record<string, any> {
  loginMethod: LoginMethodsEnum;
  expires: number;
  loginToken: string;
  signature: string;
  jwt: LoginResponse;
}

const loginInfoInitialState: LoginInfoState = {
  loginMethod: LoginMethodsEnum.none,
  expires: 0,
  loginToken: '',
  signature: '',
  jwt: null,
};

export const loginInfoState = proxy(loginInfoInitialState);

export const setLoginInfoState = (key: keyof LoginInfoState, value: any) => {
  loginInfoState[key] = value;
};

export const clearLoginInfoState = () => {
  const resetObj = cloneDeep(loginInfoInitialState);
  Object.keys(resetObj).forEach((key) => {
    loginInfoState[key] = resetObj[key];
  });
};

// Login info state

interface LoggingInState extends Record<string, any> {
  pending: boolean;
  error: string;
  loggedIn: boolean;
}

const loggingInInitialState: LoggingInState = {
  pending: true,
  error: '',
  loggedIn: false,
};

export const loggingInState = proxy(loggingInInitialState);

export const setLoggingInState = (key: keyof LoggingInState, value: any) => {
  loggingInState[key] = value;
};

export const clearLoggingInState = () => {
  const resetObj = cloneDeep(loginInfoInitialState);
  Object.keys(resetObj).forEach((key) => {
    loggingInState[key] = resetObj[key];
  });
};

export const clearAuthStates = () => {
  clearAccountState();
  clearLoginInfoState();
  clearLoggingInState();
};
