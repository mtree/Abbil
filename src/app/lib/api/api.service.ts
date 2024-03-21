import { Observable } from "rxjs";

export interface IApiService {
  get(url: string): Observable<any>;
  post(url: string, data: any): Observable<any>;
}
