import axios from "axios";

export default class Server {
  axios(method, url, params?) {
    return new Promise((resolve, reject) => {
      let _params = params;
      if (typeof params !== "object") {
        _params = {};
      }
      let _option = _params;
      _option = {
        method,
        url,
        baseURL: process.env.BASEURL,
        timeout: 30000,
        params: null,
        data: null,
        headers: null,
        withCredentials: false, // 是否携带cookies发起请求
        validateStatus: status => {
          return status >= 200 && status < 300;
        },
        ..._params,
      };
      axios.request(_option).then(
        res => {
          const result = typeof res.data === "object" ? res.data : JSON.parse(res.data);
          resolve(result);
        },
        error => {
          if (error.response) {
            reject(error.response.data);
          } else {
            reject(error);
          }
        },
      );
    });
  }
}
