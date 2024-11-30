export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }
  const token = localStorage.getItem("token");
  const expiresAt = localStorage.getItem('tokenExpiresAt');

  if (!token  || !expiresAt) {
    return false;
  }

  const now = Math.floor(Date.now() / 1000);
  const expirationTime = parseInt(expiresAt, 10);

  if (now >= expirationTime) {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiresAt');
    localStorage.removeItem('user');
    return false;
  }

  return true;
};
