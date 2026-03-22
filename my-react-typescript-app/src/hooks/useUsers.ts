import { useState, useEffect, useCallback } from "react";
import { userServices } from "../services/userService";
import type { User, UserMeta } from "../types/user";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState<UserMeta | null>(null);
  const [page, setPage] = useState(1);

  const fetchUser = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await userServices.getAll(page);
      setUsers(result.data);
      setMeta(result.meta);
    } catch {
      setError("Gagal memuat data user");
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const deleteUser = async (id: string) => {
    try {
      await userServices.delete(id);

      fetchUser();
    } catch {
      setError("Gagal menghapus user");
    }
  };

  const getUsersMany = { users, meta, loading, error, page, setPage, deleteUser, refetch: fetchUser };

  return getUsersMany;
};
