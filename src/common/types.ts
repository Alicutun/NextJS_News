export interface IDataArticle {
  clickCount: number;
  createDate: string;
  details: any;
  editDate: string;
  id: number;
  jobId: string;
  publishAt: string;
  shareCount?: number;
  status: string;
  user?: any;
  userId: number;
}

export interface IDataSearchAllTopic {
  articles: IDataArticle[];
  topic: string;
}

export interface IDataSearchTotalTopic {
  topic: string;
  total: number;
}

export interface IDaTaTopic {
  id: number;
  code: string;
  name: string;
}

export interface IDataSocket {
  symbol: string;
  price: number;
  percent: string;
}

export interface IItemArticle {
  id: number;
  img: string;
  title: string;
  editDate: string;
  content: string;
  valueSearch?: string;
}

export interface IListArticle {
  listArticle: IDataArticle[];
  total: number;
}

export interface IDataTopic {
  data: IDataArticle[];
  total: number;
}

export enum IPeriod {
  ONE_WEEK = 'last 1 week',
  ONE_MONTH = 'last 1 month',
  THREE_MONTH = 'last 3 months',
  SIX_MONTH = 'last 6 months',
  ONE_YEAR = 'last 12 months',
}

export enum ITarget {
  TITLE_BODY = 'Title + Body',
  TITLE = 'Title',
  MAIN_TEXT = 'Main text',
  NAME_REPORTER = "Reporter's name",
  KEY_WORD = 'Key word',
  PHOTO = 'Photo',
  EVENT_NAME = 'Event name',
}
