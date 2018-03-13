import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {

  private goals = new BehaviorSubject<any>(['initial goal','another silly life goal','i love you amishi']);
  goal= this.goals.asObservable(); 

  constructor() { }

  changeGoal(goal){


    this.goals.next(goal);
  }

}
