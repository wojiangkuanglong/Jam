import { HttpClient } from "../core/http-client";
import * as Interface from "../../model/homepage";
export class HomeService {
  // 获取测试列表
  static async getTestList() {
    return HttpClient.get<Interface.TestResult>(`${process.env.BASEURL}/test`).then(result => {
      const { data } = result;
      return data;
    });
  }
}
