export interface DataItem {
  id: number;
  title: string;
}

export interface DataType {
  status: string;
  date: string;
  client: string;
  id?: string;
  currency: string;
  total?: number;
  invoice: string;
}

export interface SearchDataType {
  status: string;
  from: string;
  to: string;
  client: string;
  id?: string;
  invoice: string;
}

export interface Data {
  id: number;
  date: Date;
  client: string;
  currency: string;
  status: string;
  invoice: number;
}
