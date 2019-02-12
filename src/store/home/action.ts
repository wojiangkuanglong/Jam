import * as home from "./action-type";
import API from "../../api/api";

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
  // 返回函数，异步dispatch
  return async dispatch => {
    try {
      const result = await API.getList();
      dispatch({
        type: home.GETLIST,
        data: result.list,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
