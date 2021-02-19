export interface BaseFormDataReq {
  title: string;
  date: string[];
  goal: string;
  standard: string;
}

export interface FormDataResp {
  message: string;
  code: number;
}

export interface ReceiverAccount {
  type: string;
  number: string;
}

export interface FormDataReq {
  payAccount: string;
  receiverAccount: ReceiverAccount;
  receiverName: string;
  amount: number;
  password: string;
}
