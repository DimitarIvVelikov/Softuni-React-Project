const baseURL = "http://127.0.0.1:5000/api/";

async function requester(method, url, body) {
  const options = {
    method,
    headers: {},
  };
  const accessToken = "";
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
    alert("Error requester");
  }
}

async function get(url) {
  return await requester("GET", url);
}

async function post(url, body) {
  return await requester("POST", url, body);
}

async function put(url, body) {
  return await requester("PUT", url, body);
}

async function del(url) {
  return await requester("DELETE", url);
}

export const api = {
  get,
  post,
  put,
  del,
};
