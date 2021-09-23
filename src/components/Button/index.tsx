import { ButtonHTMLAttributes } from "react";
import cx from "classnames";

import "./styles.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
  isCancel?: boolean;
  isTerminate?: boolean;
};

export function Button({
  isOutlined = false,
  isTerminate = false,
  isCancel = false,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cx(
        "button",
        { outlined: isOutlined },
        { cancel: isCancel },
        { terminate: isTerminate }
      )}
      {...rest}
    />
  );
}
