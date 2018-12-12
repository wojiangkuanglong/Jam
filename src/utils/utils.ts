// 获取当前操作系统
export function getNavigator(): string {
  const windowObject = (value: any) => {
    return value !== null && typeof value === "object" && "setInterval" in value;
  };
  const freeSelf = windowObject(typeof self === "object" && self) && self;
  const navigator = freeSelf && freeSelf.navigator;
  const platform = ((navigator && navigator.platform) || "").toLowerCase();
  return platform;
}

// 获取年份对应周的日期
export function getDateOfISOWeek(week: number, year: number): any {
  const simple = new Date(year, 0, 1 + (week - 1) * 7);
  const dow = simple.getDay();
  const ISOweekStart = simple;
  if (dow <= 4) {
    ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
  } else {
    ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
  }
  return ISOweekStart;
}

// 保留数字位数
export function numberTrunc(num: number, fixedNum = 2) {
  return Math.trunc(num) === num ? num : num.toFixed(fixedNum);
}
