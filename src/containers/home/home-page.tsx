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
import shortid from "shortid";

class HomePage extends Component<any, any> {
  componentDidMount() {
    this.props.getList();
  }
  render() {
    const { count, list } = this.props.homeData;
    console.log(count, list);
    return (
      <>
        <ButtonComponent color="green" onClick={this.props.getList}>
          {`获取列表${Math.random()}`}
        </ButtonComponent>
        <br />
        {list && list.length > 0 && (
          <ol>
            {list.map(item => (
              <li key={shortid.generate()}>{item.name}</li>
            ))}
          </ol>
        )}
        <ButtonComponent onClick={this.props.addCount}>加</ButtonComponent>
        <span style={{ margin: "0 10px" }}>{count}</span>
        <ButtonComponent onClick={this.props.removeCount}>减</ButtonComponent>
      </>
    );
  }
}

const mapStateToProps = store => {
  const { homeData } = store;
  return {
    homeData,
  };
};

export default connect(
  mapStateToProps,
  {
    addCount,
    removeCount,
    getList,
  },
)(HomePage);
