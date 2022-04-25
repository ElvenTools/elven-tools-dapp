// Usefull for the api calls on the backend side, but not only. It is also used as fetcher in hooks

export const apiCall = {
  baseEndpoint: `${process.env.NEXT_PUBLIC_ELROND_API}`,

  getEndpoint(url: string) {
    if (url.includes('/vm-values')) {
      return this.baseEndpoint + url;
    } else return url;
  },

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
        this.getEndpoint(endpoint),
        // here, no deep merge happens, meaning that when I set the "headers" in options they OVERWRITE the default headers instead of merging with them
        // if desired, you can try with lodash merge
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
        this.getEndpoint(endpoint),
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
        this.getEndpoint(endpoint),
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
        this.getEndpoint(endpoint),
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
