import React, { MouseEvent, SFC } from "react";
import { withDefaultProps } from "../../utils/withDefaultProps";

const defaultProps = {
  color: "red",
};

type DefaultProps = typeof defaultProps;
type Props = { onClick(e: MouseEvent<HTMLElement>): void } & DefaultProps;

const Button: SFC<Props> = ({ onClick: handleClick, color, children }) => (
  <button style={{ color }} onClick={handleClick}>
    {children}
  </button>
);

export const ButtonComponent = withDefaultProps(defaultProps, Button);
