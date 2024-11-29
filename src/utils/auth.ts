export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }
  const token = localStorage.getItem("token");

  if (!token) {
    return false;
  }

  // const expiresAt = localStorage.getItem("tokenExpiresAt");
  //
  // if (!token || !expiresAt) {
  //     return false; // Token or expiration is missing
  // }
  //
  // const now = new Date();
  // const expirationDate = new Date(expiresAt);
  //
  // return expirationDate > now; // Check if token is still valid
  return true;
};
