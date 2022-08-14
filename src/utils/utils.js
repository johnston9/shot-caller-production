import jwtDecode from "jwt-decode";

export const setTokenTimestamp = (data) => {
    const refreshShotCallerProTimestamp = jwtDecode(data?.refresh_token).exp;
    localStorage.setItem("refreshShotCallerProTimestamp", refreshShotCallerProTimestamp);
    console.log(`timestamp set ${refreshShotCallerProTimestamp} ` )
  };
  
  export const shouldRefreshToken = () => {
    return !!localStorage.getItem("refreshShotCallerProTimestamp");
  };
  
  export const getRefreshToken = () => {
    return localStorage.getItem("refreshShotCallerProTimestamp");
  };
  
  export const removeTokenTimestamp = () => {
    localStorage.removeItem("refreshShotCallerProTimestamp");
  };