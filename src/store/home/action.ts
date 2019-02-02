import * as home from "./action-type";

// 新增总数
export const addCount = () => {
  return {
    type: home.ADDCOUNT,
  };
};

// 减少总数
export const removeCount = () => {
  return {
    type: home.REMOVECOUNT,
  };
};

// 获取列表
export const getList = data => {
  return {
    type: home.GETLIST,
    data,
  };
};
