import * as home from "./action-type";

const defaultState = {
  count: 0, // 总数
  list: [], // 列表
};
// 首页表单数据
export const homeData = (
  state: {
    count: number;
    list: any;
  } = defaultState,
  action: any = {},
) => {
  switch (action.type) {
    case home.ADDCOUNT:
      return { ...state, ...{ count: state.count + 1 } };
    case home.REMOVECOUNT:
      return { ...state, ...{ count: state.count - 1 } };
    case home.GETLIST:
      return { ...state, ...{ list: action.data } };
    default:
      return state;
  }
};
