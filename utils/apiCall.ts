// Usefull for the api calls on the backend side, but not only. It is also used as fetcher in hooks
import { getActiveNetworkConfiguration } from '../config/network';

const baseEndpoint = getActiveNetworkConfiguration().apiAddress;

export const apiCall = {
  async get(endpoint: string, options?: Record<string, unknown>) {
    if (typeof fetch !== 'undefined') {
      const defaultOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      };

      const response = await fetch(
        (options?.baseEndpoint || baseEndpoint) + endpoint,
        Object.assign(defaultOptions, options || {})
      );

      const result = await response.json();

      if (!response.ok) {
        const error = result?.error || response.status;
        return Promise.reject(error);
      }

      return result;
    }
  },

  async post(
    endpoint: string,
    payload: Record<string, unknown>,
    options?: Record<string, unknown>
  ) {
    if (typeof fetch !== 'undefined') {
      const defaultOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload || {}),
      };

      const response = await fetch(
        (options?.baseEndpoint || baseEndpoint) + endpoint,
        Object.assign(defaultOptions, options || {})
      );

      const result = await response.json();

      if (!response.ok) {
        const error = result?.error || response.status;
        return Promise.reject(error);
      }

      return result;
    }
  },
  async put(
    endpoint: string,
    payload: Record<string, unknown>,
    options?: Record<string, unknown>
  ) {
    if (typeof fetch !== 'undefined') {
      const defaultOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload || {}),
      };

      const response = await fetch(
        (options?.baseEndpoint || baseEndpoint) + endpoint,
        Object.assign(defaultOptions, options || {})
      );

      const result = await response.json();

      if (!response.ok) {
        const error = result?.error || response.status;
        return Promise.reject(error);
      }

      return result;
    }
  },
  async delete(endpoint: string, options?: Record<string, unknown>) {
    if (typeof fetch !== 'undefined') {
      const defaultOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      };

      const response = await fetch(
        (options?.baseEndpoint || baseEndpoint) + endpoint,
        Object.assign(defaultOptions, options || {})
      );

      const result = await response.json();

      if (!response.ok) {
        const error = result?.error || response.status;
        return Promise.reject(error);
      }

      return result;
    }
  },
};
