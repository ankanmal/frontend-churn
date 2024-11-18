/**
 * the Output of this code is
 * 1. clg(1) -> 1
 * 2. clg(2) -> 2
 * 3. clg(3) -> 3
 * 4. clg(4) -> 4
 * 5. clg(8) -> 8
 * 6. clg(7) -> 7
 * 7. clg(6) -> 6
 * 8. clg(5) -> 5
 * Does having a timer value less in the setTimeout affect the execution of the code?
 * Which one gets executed first, a setTimeout() with 100ms timeout value or a setTimeout() with 0ms timeout value?
 * Which one gets executed first, a Promise or a Web API like setTimeout()?
 * Which has the higher priority?
 * A microtask queue or a Web API queue?
 */

// Start here
const promise = new Promise((resolve) => {
  console.log(1);
  resolve();
  console.log(2);
});

console.log(3);
console.log(4);

setTimeout(() => {
  console.log(5);
}, 100);

setTimeout(() => {
  console.log(6);
}, 0);

promise.then(() => {
  console.log(7);
});

console.log(8);



/**
 * the learnings from this question
 * Understanding how the **JavaScript Event Loop** works with concepts like **Web APIs**, **Call Stack**, **Callback Queue**, and **Microtask Queue** can help you better grasp asynchronous programming. Here’s a breakdown of each concept, how they work together, and their execution order.

---

## **1. Web APIs**
- **What Are They?**
  Web APIs are provided by the browser (or Node.js environment) and allow JavaScript to perform asynchronous tasks like making network requests (`fetch`), setting timers (`setTimeout`), or listening for events (`addEventListener`).

- **How It Works**
  When you call a function like `setTimeout`, the function itself is not handled by JavaScript. Instead:
  1. The call is passed to the Web API provided by the browser.
  2. Once the task (e.g., timer or network request) is complete, the result is sent to the **Callback Queue**.

---

## **2. Call Stack**
- **What Is It?**
  The call stack is a data structure that tracks function calls. Functions are added to the stack when they are invoked and removed when they finish execution.

- **How It Works**
  When JavaScript executes code, it does so **synchronously**, using the call stack:
  1. Functions are "pushed" onto the stack when they are called.
  2. Once a function completes, it is "popped" off the stack.

---

## **3. Callback Queue**
- **What Is It?**
  The callback queue holds tasks (callbacks) from Web APIs like `setTimeout`, `setInterval`, or DOM events that are ready to execute.

- **How It Works**
  Once the call stack is empty, the **event loop** moves tasks from the callback queue to the call stack for execution.

---

## **4. Microtask Queue**
- **What Is It?**
  The microtask queue is similar to the callback queue but has **higher priority**. Promises (`.then` or `catch`) and `MutationObserver` callbacks are placed in the microtask queue.

- **How It Works**
  Microtasks are processed **immediately after the current function finishes** and before the event loop checks the callback queue.

---

## **5. Event Loop**
- **What Is It?**
  The event loop is the mechanism that coordinates execution between the **call stack**, **microtask queue**, and **callback queue**.

- **How It Works**
  1. The event loop continuously checks the call stack.
  2. If the stack is empty:
     - It processes all tasks in the **microtask queue**.
     - Then, it processes one task from the **callback queue**.

---

## **Execution Order & Preference**
1. **Call Stack**: Executes synchronous code first.
2. **Microtask Queue**: Executed next, before the callback queue.
3. **Callback Queue**: Executed only after the call stack and microtask queue are empty.

---

### **Example Code to Illustrate**

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout Callback"); // Added to Callback Queue
}, 0);

Promise.resolve().then(() => {
    console.log("Promise Microtask"); // Added to Microtask Queue
});

console.log("End");
```

**Execution Steps:**
1. **Synchronous code runs first (Call Stack)**:
   - `"Start"` is logged.
   - `setTimeout` is passed to the Web API.
   - `Promise.resolve().then` adds a microtask to the **microtask queue**.
   - `"End"` is logged.

2. **Microtask Queue is processed**:
   - `"Promise Microtask"` is logged.

3. **Callback Queue is processed**:
   - `"Timeout Callback"` is logged.

**Output:**
```
Start
End
Promise Microtask
Timeout Callback
```

---

### **Visual Representation**
Here’s a step-by-step breakdown of the Event Loop:

1. **Call Stack**:
   - Executes synchronous code.

2. **Microtask Queue**:
   - Executes all pending microtasks (e.g., Promises).

3. **Callback Queue**:
   - Executes tasks like `setTimeout` callbacks after microtasks are completed.

---

### Key Takeaways:
- Synchronous code always runs first.
- **Microtask Queue** has higher priority than the **Callback Queue**.
- The **Event Loop** ensures a smooth execution flow by coordinating these queues.

 */