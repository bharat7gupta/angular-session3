import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class GlobalMessageService {

  private onNewMessageSource = new Subject<string>();

  onNewMessage$ = this.onNewMessageSource.asObservable();

  constructor() { }

  sendMessage(message: string) {
    this.onNewMessageSource.next(message);
  }
}
