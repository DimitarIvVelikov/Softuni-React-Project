import { api } from "./api";
const URI = "auth";
const apiEndpoints = {
  loginUrl: URI + "/login",
  registerUrl: URI + "/register",
  logoutUrl: URI + "/logout",
};

export async function login(body) {
  const data = await api.post(apiEndpoints.loginUrl, body);

  return data;
}
export async function register(body) {
  const data = await api.post(apiEndpoints.registerUrl, body);
  return data;
}
export async function logout() {
  await api.get(apiEndpoints.logoutUrl);
}

export const userService = {
  login,
  register,
  logout,
};
