import { Observable } from "rxjs";

const observable = new Observable(function subscribe(subscriber) {
    // Keep track of the interval resource
    const intervalId = setInterval(() => {
      subscriber.next('hi');
    }, 1000);
  
    // Provide a way of canceling and disposing the interval resource
    return function unsubscribe() {
      clearInterval(intervalId);
    };
  });

 const subscrption =  observable.subscribe(x => console.log(x));

 setTimeout(() => {
    subscrption.unsubscribe(); 
  }, 5000);
 

  