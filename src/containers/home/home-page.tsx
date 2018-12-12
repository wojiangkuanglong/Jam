/**
 * @component HomePage
 * @description 首页
 * @time 2018/07/17
 * @author ChengZhenghao
 */

import * as React from "react";
import { ButtonComponent } from "../../components";
import { HomeService } from "./home.service";
import shortid from "shortid";

export default class HomePage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      list: [],
    };
  }

  render() {
    const { list } = this.state;
    return (
      <div className="home-page-wrapper">
        <ButtonComponent />
        <button onClick={this.handleBtnClick_}>获取列表</button>
        <ol>
          {list.map(item => (
            <li key={shortid.generate()}>{item.name}</li>
          ))}
        </ol>
      </div>
    );
  }

  /**
   * 获取列表
   * @private
   * @memberof HomePage
   */
  private handleBtnClick_ = e => {
    e.preventDefault();
    HomeService.getTestList().then(result => {
      this.setState({
        list: result,
      });
    });
  };
}
