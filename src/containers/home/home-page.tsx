/**
 * @component HomePage
 * @description 首页
 * @time 2018/07/17
 * @author ChengZhenghao
 */

import React, { Component } from "react";
import { ButtonComponent } from "../../components";
import { HomeService } from "./home.service";
import shortid from "shortid";

const initialState = {
  count: 0,
  list: [],
};

const incrementClicksCount = (prevState: State) => ({
  count: prevState.count + 1,
});
const decrementClicksCount = (prevState: State) => ({
  count: prevState.count - 1,
});

type State = Readonly<typeof initialState>;

export default class HomePage extends Component<any, State> {
  readonly state: State = initialState;

  render() {
    const { count, list } = this.state;
    return (
      <>
        <ButtonComponent color="green" onClick={this.handleBtnClick_}>
          获取列表
        </ButtonComponent>
        <ol>
          {list.map(item => (
            <li key={shortid.generate()}>{item.name}</li>
          ))}
        </ol>
        <ButtonComponent onClick={this.handleIncrement_}>加</ButtonComponent>
        <span style={{ margin: "0 10px" }}>{count}</span>
        <ButtonComponent onClick={this.handleDecrement_}>减</ButtonComponent>
      </>
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

  /**
   * 增加计数
   * @private
   * @memberof HomePage
   */
  private handleIncrement_ = () => this.setState(incrementClicksCount);

  /**
   * 减少计数
   * @private
   * @memberof HomePage
   */
  private handleDecrement_ = () => this.setState(decrementClicksCount);
}
