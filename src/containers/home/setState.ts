export const incrementClicksCount = prevState => ({
  count: prevState.count + 1,
});

export const decrementClicksCount = prevState => ({
  count: prevState.count - 1,
});
