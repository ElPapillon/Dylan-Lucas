import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddAnimal } from '../actions/animal.actions';
import { withLatestFrom } from 'rxjs/operators'

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css']
})
export class ZooComponent implements OnInit {
  @Select(state => state.animals) animals$: Observable<any>;
  constructor(private store : Store) { }

  addAnimal(name: string){
    this.store.dispatch(new AddAnimal(name)).pipe(
      withLatestFrom(this.animals$)
    )
   
  }

  ngOnInit() {
  }

}
