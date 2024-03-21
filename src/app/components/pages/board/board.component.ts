import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../molecules/card/card.component";
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { fetchDataSuccess, postDataSuccess } from '../../../store/app.actions';

@Component({
    selector: 'app-board',
    standalone: true,
    templateUrl: './board.component.html',
    styleUrl: './board.component.scss',
    imports: [CardComponent]
})
export class BoardComponent implements OnInit {

  constructor(private store: Store<{ app: AppState }>) { }

  ngOnInit(): void {
    this.store.dispatch(fetchDataSuccess({ data: 'Mocked data.' }));
    this.store.dispatch(postDataSuccess({ status: 'success' }));
  }

}
