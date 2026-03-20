export interface User {
  id: string;
  name: string | null;
  username: string;
  email: string;
  role: string;
  createdAt: string;
}

export interface UserMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface UserResponse {
  data: User[];
  meta: UserMeta;
}
