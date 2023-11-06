/** user's role */
export type Role = 'guest' | 'admin';

export interface RegisterParams {
  /** 用户名 */
  username: string;
  /** 用户密码 */
  password: string;
}

export interface RegisterResult {
  /** auth token */
  token: string;
  username: string;
  role: Role;
}

export interface LogoutParams {
  token: string;
}

export interface LogoutResult {}
