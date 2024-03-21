import { Observable, of } from "rxjs";
import { IApiService } from "./api.service";

export class MockApiService implements IApiService {
  get(url: string): Observable<any> {
      return of({ data: 'Mocked data' });
  }

  post(url: string, data: any): Observable<any> {
      return of({ status: 'success' });
  }
}
