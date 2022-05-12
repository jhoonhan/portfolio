const throttle = (callback, tps) => {
  var wait = false;
  return (...args) => {
    if (!wait) {
      callback(...args);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, 1000 / tps);
    }
  };
};

export default throttle;
