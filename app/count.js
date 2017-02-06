exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  // count: function (start, end) {
  //   var i = start;
  //   setInterval(function () {
  //     console.log(i);
  //     if (i === end) { clearInterval(); }
  //     i++;
  //   }, 100);
  // }

  count: function (start, end) {
    var timeout;
    function printIt () {
      console.log(start++);

      if (start <= end) {
        timeout = setTimeout(printIt, 100);
      }
    }

    printIt();

    return {
      cancel: function() {
        timeout && clearTimeout(timeout);
      }
    };
  }
};
