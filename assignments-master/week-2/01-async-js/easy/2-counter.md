## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let count=0
function startCounter(count) {
    console.log(count);
    if (count < 10) {
      setTimeout(() => startCounter(count+1), 1000);
    }
  }
  startCounter(0);






































































(Hint: setTimeout)