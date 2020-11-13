import React from "react";
import PropTypes from "prop-types";
import StyledBadge, { Count } from "./style";
function Badge({
  children,
  show = false,
  count = 0,
  showZero = false,
  ...rest
}) {
  return (
    <StyledBadge
      show={show}
      count={count}
      showZero={showZero}
      variant={children ? "dot" : "default"}
      {...rest}
    >
      {children || <Count>{count}</Count>}
    </StyledBadge>
  );
}

Badge.propTypes = {
  show: PropTypes.bool,
  count: PropTypes.number,
  showZero: PropTypes.bool,
  children: PropTypes.any,
};

export default Badge;
