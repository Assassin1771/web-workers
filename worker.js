// whenever we create a new worker, a new execution context is created for that worker, thus self here refers to worker itself. in case of main script, self refers to window object. as window object not required to use methods like alert etc, similarly self. is not required.

// self.onmessage = () => {};

onmessage = (message) => {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }

  console.log(sum);

  postMessage(sum);
};
