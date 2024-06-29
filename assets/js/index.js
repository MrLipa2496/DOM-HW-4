// Ex1
function printNumbers(from, to, interval) {
  let current = from;

  const timer = setInterval(() => {
    document.write(current);
    if (current === to) {
      clearInterval(timer);
    }
    current++;
  }, interval);
}

printNumbers(0, 10, 1000);

// Ex1_2
function printNumbers_2(from, to, interval) {
  let current = from;

  function printNext() {
    console.log(current);
    if (current < to) {
      current++;
      setTimeout(printNext, interval);
    }
  }

  setTimeout(printNext, interval);
}

printNumbers_2(1, 5, 1000);
