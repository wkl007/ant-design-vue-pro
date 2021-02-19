export interface FakeListReq {
  count?: number;
}

export interface Member {
  avatar: string;
  name: string;
  id: string;
}

export interface FakeListResp {
  id: string;
  owner: string;
  title: string;
  avatar: string;
  cover: string;
  status: string;
  percent: number;
  logo: string;
  href: string;
  updatedAt: any;
  createdAt: any;
  subDescription: string;
  description: string;
  activeUser: number;
  newUser: number;
  star: number;
  like: number;
  message: number;
  content: string;
  members: Member[];
}

export interface RuleReq {
  current?: number;
  pageSize?: number;
  status?: string[];
}

export interface Datum {
  key: number;
  disabled: boolean;
  href: string;
  avatar: string;
  name: string;
  owner: string;
  desc: string;
  callNo: number;
  status: string;
  updatedAt: Date;
  createdAt: Date;
  progress: number;
}

export interface Req {
  current: string;
  pageSize: string;
  status?: string[];
}

export interface RuleResp {
  total: number;
  success: boolean;
  pageSize: string;
  current: string;
  data: Datum[];
  _req: Req;
}
