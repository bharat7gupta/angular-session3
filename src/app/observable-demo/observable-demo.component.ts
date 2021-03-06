import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/observable/from";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit, OnDestroy {

  @ViewChild('box') box: ElementRef;
  
  // simple observable
  simpleObservableValue: any;
  simpleObserableSubscription: Subscription;

  // map
  collection = [2, 5, 7];
  squared: Array<number> = [];
  indexed: Array<any> = [];

  // filter
  evenNums: Array<any> = [];

  // compose
  evenSquaredNums: Array<any> = [];
  
  // observables from diff sources
  mouseMoveData$: Observable<any>;
  coords: any;
  websocket: any;  

  constructor() { }

  private createBasicObservable() {
    return Observable.create(emitter => {
      emitter.next(10);

      setTimeout(() => emitter.next(20), 2000);

      setTimeout(() => emitter.next(30), 4000);

      setTimeout(() => emitter.complete('done'), 5000);      
    })
  }

  private listenToWebSocket(): Observable<any> {

    this.websocket = new WebSocket('ws://localhost:8081');

    return Observable.create(emitter => {
      this.websocket.onmessage = (evt) => {
        emitter.next(evt);
      };
    })
    .map(res => res.data)
  }

  ngOnInit() {
    // simple observable demo
    let observable: Observable<any> = this.createBasicObservable();

    let observer = {
      next: (value) => {
        this.simpleObservableValue = value;
      },
      error: () => {

      },
      complete: () => {
        this.simpleObservableValue = 'done';
      }
    };

    this.simpleObserableSubscription = observable
      .subscribe(observer.next, observer.error, observer.complete);

    // map - change data domain
    Observable.from(this.collection)
      .map(num => num * num)
      .subscribe((squaredNum) => {
        this.squared.push(squaredNum);
      });

    // map - change data structure
    Observable.from(this.collection)
      .map(num => ({ index: this.indexed.length, value: num }))
      .subscribe((indexedObj) => {
        this.indexed.push(indexedObj);
      });

    // filter values
    Observable.of(...this.collection) // spread operator will change value from [2,5,7] to 2,5,7
      .filter(num => num % 2 == 1)
      .subscribe((evenNum) => {
        this.evenNums.push(evenNum);
      });

    // compose filter and map
    Observable.of(...this.collection) // spread operator will change value from [2,5,7] to 2,5,7
      .filter(num => num % 2 == 1)
      .map(num => num * num)
      .subscribe((evenSquaredNum) => {
        this.evenSquaredNums.push(evenSquaredNum);
      });
    
    // observable from dom event
    this.mouseMoveData$ = Observable.fromEvent(this.box.nativeElement, 'mousemove');
    this.mouseMoveData$.subscribe((e) => {
      this.coords = { x: e.offsetX, y: e.offsetY };
    });

    // observable from websocket data event
    // this.listenToWebSocket()
    //   .subscribe((data) => { /* Use Data from socket */ });
  }

  ngOnDestroy() {
    this.simpleObserableSubscription.unsubscribe();
  }

}
