import api from "./api";

export const registerUser = async (userData) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await api.post("/auth/login", userData);
  return response.data;
};


export const forgotPassword = async (emailData) => {
  const response = await api.post(
    "/auth/forgot-password",
    emailData
  );

  return response.data;
};

export const resetPassword = async (token, passwordData) => {
  const response = await api.post(
    `/auth/reset-password/${token}`,
    passwordData
  );

  return response.data;
};


export const getProfile = async () => {
  const response = await api.get("/auth/profile");
  return response.data;
};

export const updateProfile = async (userData) => {
  const response = await api.put("/auth/profile", userData);
  return response.data;
};