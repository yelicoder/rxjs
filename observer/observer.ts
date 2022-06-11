import { Observable } from "rxjs";

const observer = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };

  const observable = new Observable(function subscribe(subscriber) {
    try {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.complete();
    } catch (err) {
      subscriber.error(err); // delivers an error if it caught one
    }
  });

  observable.subscribe(observer)

