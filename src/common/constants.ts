// export const NetworkRequest.BASE_URL = "http://develop.decenter-be.minimaltek.com/";

export class NetworkRequest {
  static readonly BASE_URL = 'http://158.247.223.164:3000';
  static readonly HOME = '/';
  static readonly ARTICLE = '/article';
  static readonly NEWS = '/news';

  // static readonly DEVELOPMENT = {
  //   BASE_URL: this.BASE_URL,
  //   HOME: this.HOME,
  //   ARTICLE: this.ARTICLE,
  //   NEWS: this.NEWS,
  // };
}

// export enum RestPaths {
//   HOME = '/',
//   ARTICLE = '/article',
//   NEWS = '/news',
// }

export const LIMIT_PAGE = 5;

export const LIMIT_COMMENT = 500;
