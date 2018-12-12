import React, { SFC } from "react";
import { hot } from "react-hot-loader";
import { NavLink, Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";
import { LocaleProvider } from "antd";
import Loadable from "react-loadable";
import LoadingPage from "../loading";
import { Nav } from "../../model/nav";
import "./default-page.scss";

const zhCN = require("antd/lib/locale-provider/zh_CN");

const navs: Nav[] = [
  {
    name: "首页",
    link: "/home",
  },
  {
    name: "测试",
    link: "/test",
  },
];

const HomePage = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ "../home/home-page"),
  loading: LoadingPage,
});

const TestPage = Loadable({
  loader: () => import(/* webpackChunkName: "test" */ "../test/test-page"),
  loading: LoadingPage,
});

const DefaultPage: SFC<RouteComponentProps<void>> = () => {
  return (
    <div className="default-page-wrapper">
      <header className="header-wrapper">
        <h1 className="logo">Logo</h1>
        <div className="triangle" />
        <div className="deep-color">
          {navs.map((value, index) => {
            return (
              <NavLink to={value.link} activeClassName="active" key={`href${index}`}>
                {value.name}
              </NavLink>
            );
          })}
        </div>
      </header>
      <section>
        <LocaleProvider locale={zhCN}>
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/test" component={TestPage} />
            <Redirect from="/" to="/home" />
          </Switch>
        </LocaleProvider>
      </section>
    </div>
  );
};

export default hot(module)(DefaultPage);
