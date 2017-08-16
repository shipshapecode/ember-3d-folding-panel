/**
 * Util function for easeInOut
 * @param t current time
 * @param b start value
 * @param c change in value
 * @param d duration
 * @returns {*}
 */
Math.easeInOutQuad = function(t, b, c, d) {
  t /= d / 2;

  if (t < 1) {
    return c / 2 * t * t + b;
  }

  t--;

  return -c / 2 * (t * (t - 2) - 1) + b;
};

function whichTransitionEvent() {
  let t;
  const el = document.createElement('fakeelement');

  const transitions = {
    'transition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'MozTransition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd'
  };

  for (t in transitions) {
    if (el.style[t] !== undefined) {
      return transitions[t];
    }
  }
}

const getScrollTop = function getScrollTop() {
  return (window.pageYOffset !== undefined)
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body).scrollTop;
};

const oneTimeTransitionEvent = function oneTimeTransitionEvent(element, callback) {
  const transitionEvent = whichTransitionEvent();
  const customFunction = (e) => {
    e.target.removeEventListener(transitionEvent, customFunction);
    return callback(e);
  };

  element.addEventListener(transitionEvent, customFunction);
};

const scrollTo = function scrollTo(element, to, duration, callback) {
  const start = element.scrollTop;
  const change = to - start;
  let currentTime = 0;
  const increment = 20;

  const animateScroll = function() {
    currentTime += increment;
    element.scrollTop = Math.easeInOutQuad(currentTime, start, change, duration);
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    } else {
      callback();
    }
  };
  animateScroll();
};

export {
  getScrollTop,
  oneTimeTransitionEvent,
  scrollTo
};
