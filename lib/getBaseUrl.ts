export const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
};
export const getFrontEndUrl = () => {
  return process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
};
