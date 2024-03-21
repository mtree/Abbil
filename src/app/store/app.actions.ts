import { createAction } from "@ngrx/store";

export const fetchDataSuccess = createAction('Fetch Data Success', (data: any) => ({ data }));
export const postDataSuccess = createAction('Post Data Success', (status: any) => ({ status }));
