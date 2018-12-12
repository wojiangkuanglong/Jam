// https://joshblog.net/2018/react-loadable-and-typescript-error-property-render-is-missing-in-type-loader-promise/

import React from "react";
import Loadable from "react-loadable";
import { Spin } from "antd";

export default class LoadingPage extends React.Component<Loadable.LoadingComponentProps> {
  render() {
    return <Spin />;
  }
}
