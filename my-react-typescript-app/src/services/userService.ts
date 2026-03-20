import { api } from "../lib/axios";
import type { UserResponse } from "../types/user";

export const userServices = {
  getAll: async (page: 1, limit: 10): Promise<UserResponse> => {
    const { data } = await api.get("/users", {
      params: { page, limit },
    });
    return data;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/users/${id}`);
  },
};
