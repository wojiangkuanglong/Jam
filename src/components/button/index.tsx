import React, { MouseEvent, SFC } from "react";
import { withDefaultProps } from "../../utils/withDefaultProps";
import { ThemeContext } from "../../containers/context/context";

const defaultProps = {
  color: "red",
};

type DefaultProps = typeof defaultProps;
type Props = { onClick(e: MouseEvent<HTMLElement>): void } & DefaultProps;

const Button: SFC<Props> = ({ onClick: handleClick, children }) => (
  <ThemeContext.Consumer>
    {theme => (
      <button style={{ color: theme.globalColor }} onClick={handleClick}>
        {children}
      </button>
    )}
  </ThemeContext.Consumer>
);

export const ButtonComponent = withDefaultProps(defaultProps, Button);
