/**
 * @component HomePage
 * @description 首页
 * @time 2018/07/17
 * @author ChengZhenghao
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { addCount, removeCount, getList } from "../../store/home/action";
import { ButtonComponent } from "../../components";
// import shortid from "shortid";

class HomePage extends Component<any, any> {
  render() {
    const { count } = this.props.homeData;
    return (
      <>
        <ButtonComponent
          color="green"
          onClick={() => {
            console.log("s");
          }}
        >
          获取列表
        </ButtonComponent>
        <br />
        <ButtonComponent onClick={this.props.addCount}>加</ButtonComponent>
        <span style={{ margin: "0 10px" }}>{count}</span>
        <ButtonComponent onClick={this.props.removeCount}>减</ButtonComponent>
      </>
    );
  }
}

export default connect(
  state => ({
    homeData: state.homeData,
  }),
  {
    addCount,
    removeCount,
    getList,
  },
)(HomePage);
