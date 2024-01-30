export interface IResponse<T = any> {
  code: number;
  success: boolean;
  data: T;
}
