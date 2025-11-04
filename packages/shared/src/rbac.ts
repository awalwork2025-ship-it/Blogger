import type { UserRole } from "./schemas";

type Permission =
  | "tasks:create"
  | "tasks:assign"
  | "tasks:approve"
  | "tokens:transfer"
  | "users:manage"
  | "analytics:view"
  | "wallets:manage";

export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  user: ["tasks:create", "analytics:view"],
  creator: ["tasks:create", "analytics:view"],
  admin: [
    "tasks:create",
    "tasks:assign",
    "tasks:approve",
    "tokens:transfer",
    "users:manage",
    "analytics:view"
  ],
  superadmin: [
    "tasks:create",
    "tasks:assign",
    "tasks:approve",
    "tokens:transfer",
    "users:manage",
    "analytics:view",
    "wallets:manage"
  ]
};

export const hasPermission = (role: UserRole, permission: Permission) =>
  ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
