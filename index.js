function pixels(props, propName, componentName) {
  if (!/^-?[0-9]{0,4}px$/.test(props[propName])) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. Validation failed.'
    );
  }
}

function percentage(props, propName, componentName) {
  if (!/^[0-9]{0,3}%$/.test(props[propName])) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. Validation failed.'
    );
  }
}


module.exports = {
  pixels: pixels,
  percentage: percentage
}
