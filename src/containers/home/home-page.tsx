/**
 * @component HomePage
 * @description 首页
 * @time 2018/07/17
 * @author ChengZhenghao
 */

import React, { Component } from "react";
import { ButtonComponent } from "../../components";
import { HomeService } from "./home.service";
import { incrementClicksCount, decrementClicksCount } from "./setState";
import shortid from "shortid";
import { ThemeContext } from "../context/context";

const initialState = {
  count: 0,
  list: [],
  globalColor: "blue",
};

type State = Readonly<typeof initialState>;

export default class HomePage extends Component<{}, State> {
  readonly state: State = initialState;

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        globalColor: "red",
      });
    }, 5000);
    console.log(this.props);
  }

  render() {
    const { count, list, globalColor } = this.state;
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
        <ThemeContext.Provider
          value={{
            globalColor,
          }}
        >
          <ButtonComponent onClick={this.handleIncrement_}>加</ButtonComponent>
        </ThemeContext.Provider>
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
