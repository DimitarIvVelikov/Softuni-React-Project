const baseURL = "http://127.0.0.1:5000/api/";
async function requester(method, url, body) {
  const options = {
    method,
    headers: {},
  };

  const accessToken = JSON.parse(localStorage.getItem("auth"))?.accessToken;

  if (accessToken) {
    options.headers["x-authorization"] = accessToken;
  }

  if (body) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }
  try {
    const response = await fetch(baseURL + url, options);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
    if (response.status === 204) {
      return response;
    }
    return response.json();
  } catch (error) {
    console.log(error);

    if (error.message === "Invalid token!") {
      localStorage.removeItem("auth");
    }
  }
}

function get(url) {
  return requester("GET", url);
}

function post(url, body) {
  return requester("POST", url, body);
}

function put(url, body) {
  return requester("PUT", url, body);
}

function del(url) {
  return requester("DELETE", url);
}

export const api = {
  get,
  post,
  put,
  del,
};
