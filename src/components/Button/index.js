import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);
function Button({
  to,
  href,
  text = false,
  primary = false,
  rounded = false,
  disabled = false,
  small = false,
  large = false,
  outline = false,
  className,
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = { onClick, ...passProps };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    [className]: className,
    primary,
    text,
    outline,
    disabled,
    rounded,
    small,
    large,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
