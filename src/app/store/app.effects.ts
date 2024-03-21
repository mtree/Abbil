import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { IApiService } from '../lib/api/api.service';
import { fetchDataSuccess, postDataSuccess } from './app.actions';
import { API_SERVICE_TOKEN } from '../app.module';

@Injectable()
export class AppEffects {

  constructor(
    private actions$: Actions,
    @Inject(API_SERVICE_TOKEN) private apiService: IApiService) {
    this.apiService = apiService;
  }

  fetchData$ = createEffect(() =>
    this.actions$.pipe(
      ofType('Fetch Data'),
      mergeMap(() => this.apiService.get('/foo').pipe(
        map(data => fetchDataSuccess(data))
      ))
    )
  );

  postData$ = createEffect(() =>
    this.actions$.pipe(
      ofType('Post Data'),
      mergeMap(() => this.apiService.post('/bar', {}).pipe(
        map(status => postDataSuccess(status))
      ))
    )
  );
}
