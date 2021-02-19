export interface RolesReq {
  current?: number;
  pageSize?: number;
}

export interface Permission {
  id: number;
  name: string;
  label: string;
  actions: string[];
}

export interface Datum {
  id: number;
  name: string;
  describe: string;
  permissions: Permission[];
}

export interface RolesResp {
  data: Datum[];
  total: number;
  success: boolean;
  pageSize: number;
  current: number;
}

export interface PermissionsReq {
  current?: number;
  pageSize?: number;
}

export interface PermissionsData {
  id: number;
  name: string;
  label: string;
  actions: string[];
}

export interface PermissionsResp {
  data: PermissionsData[];
  total: number;
  success: boolean;
  pageSize: number;
  current: number;
}
