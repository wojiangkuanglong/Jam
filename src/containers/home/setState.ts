export const incrementClicksCount = (prevState: any) => ({
  count: +prevState.count + 1,
});

export const decrementClicksCount = (prevState: any) => ({
  count: +prevState.count - 1,
});
