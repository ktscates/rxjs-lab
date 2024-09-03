// Import RxJS functions and operators
const { of, from, interval, concat, Observable } = require("rxjs");
const { take } = require("rxjs/operators");

// Creating and Subscribing to an Observable with of
const firstNumbers$ = of(1, 2, 3, 4, 5);
firstNumbers$.subscribe({
  next: (value) => console.log(`Task 1 - Value: ${value}`),
  compete: () => console.log("Task 1 - Observable completed"),
});

// Working with `from`
const colors = ["Red", "Blue", "Green", "Yellow", "Purple", "Black"];
const colors$ = from(colors);
colors$.subscribe({
  next: (color) => console.log(`Task 2 - Color: ${color}`),
  complete: () => console.log("Task 2 - Observable of colors completed"),
});

// Using `interval`
const interval$ = interval(1000).pipe(take(5));
interval$.subscribe({
  next: (value) =>
    console.log(`Task 3 - Value: ${value}, ${new Date().toLocaleTimeString()}`),
  complete: () => console.log("Task 3 - Interval observable completed"),
});

// Combining Observables
const secondNumbers$ = from([4, 5, 6]);
const combined$ = concat(firstNumbers$, secondNumbers$);
combined$.subscribe({
  next: (value) => console.log(`Task 4 - Combined value: ${value}`),
  complete: () => console.log("Task 4 - Combined observable completed"),
});

// Error Handling
const error$ = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.error("An Error Occured");
});
error$.subscribe({
  next: (value) => console.log(`Task 5 - Value: ${value}`),
  error: (error) => console.error(`Task 5 - Error: ${error}`),
  complete: () => console.log("Task 5 - No log, an error occured"),
});
