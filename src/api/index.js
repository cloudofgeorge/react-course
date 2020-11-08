export class Api {
  _baseUrl = "https://fakestoreapi.com/";

  _doFetch(url, init) {
    const resultUrl = `${this._baseUrl}${url}`;
    return fetch(resultUrl, init)
      .then((response) => response.json())
      .catch((error) => error.response);
  }

  get = (url, data, config) => {
    const params = new URLSearchParams(data).toString();
    const resultUrl = `${url}?${params}`;

    return this._doFetch(resultUrl, { method: "GET", ...config });
  };

  post = (url, data, config) =>
    this._doFetch(url, {
      method: "POST",
      data,
      headers: config.headers,
      ...config,
    });
}

export const api = new Api();
