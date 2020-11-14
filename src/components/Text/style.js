import styled, { css } from "styled-components";
const typeVariants = {
  primary: css`
    color: ${({ theme }) => theme.grayDark};
  `,
  secondary: css`
    color: ${({ theme }) => theme.grayDark};
    opacity: 0.3;
  `,
  danger: css`
    color: ${({ theme }) => theme.red};
  `,
};

const sizeVariants = {
  normal: css`
    ${({ theme }) => theme.normal}
  `,
  small: css`
    ${({ theme }) => theme.small}
  `,
  medium: css`
    ${({ theme }) => theme.medium}
  `,
  xsmall: css`
    ${({ theme }) => theme.xsmall}
  `,
  xxsmall: css`
    ${({ theme }) => theme.xxsmall}
  `,
  large: css`
    ${({ theme }) => theme.large}
  `,
  xlarge: css`
    ${({ theme }) => theme.xlarge}
  `,
  xxlarge: css`
    ${({ theme }) => theme.xxlarge}
  `,
};

const StyledText = styled.span`
  font-size: ${({ size }) => sizeVariants[size] || sizeVariants.normal};
  ${({ type }) => typeVariants[type]};
  ${({ bold }) => bold && `font-weight: 500`};
`;

export default StyledText;
