const strictEquals = (valueA, valueB) => {
  if (Object.is(NaN, valueB) && Object.is(valueA, NaN)) {
    return false;
  }

  if (Object.is(valueA, 0) && Object.is(-0, valueB)) {
    return true;
  }

  if (Object.is(0, valueB) && Object.is(valueA, -0)) {
    return true;
  }

  return Object.is(valueA, valueB);
};

export default strictEquals;
