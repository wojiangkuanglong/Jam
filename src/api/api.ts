import Server from "./http-client";

interface ListResult {
  list: { name: string }[];
}

class API extends Server {
  /**
   *  用途：获取列表
   *  @url /list
   *  @method get
   *  @return {promise}
   */
  async getList() {
    try {
      const result = (await this.axios("get", "/list")) as ListResult;
      return result;
    } catch (err) {
      throw {
        tip: "获取列表失败",
        response: err,
        data: {},
        url: "/list",
      };
    }
  }
}

export default new API();
