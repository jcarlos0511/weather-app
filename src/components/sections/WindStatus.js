import React from "react";
import styled from "styled-components";
import NavigationIcon from "../../icons/navigationIcon";

import { theme } from "../../styles";
const { colors, fontSizes } = theme;

const SubTitle = styled.h6`
  font-size: ${fontSizes.md};
  line-height: 19px;
`;

const StyledStatus = styled.h2`
  font-size: ${fontSizes.h2};
  font-weight: 600;

  & span {
    color: ${colors.white};
    font-size: ${fontSizes.xxl};
    line-height: 42px;
    font-weight: 500;
  }
`;

const StyledDetails = styled.div`
  display: flex;
  align-items: center;

  & i {
    width: 24px;
    height: 24px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    text-align: center;
    padding: 3px 0;
    margin: 0 8px;

    & svg {
      width: 16px;
      height: 16px;
      transform: rotate(-150deg);
    }
  }

  & p {
    text-transform: uppercase;
    color: ${colors.white};
    font-weight: 500;
    font-size: ${fontSizes.sm};
    line-height: 16px;
  }
`;

const WindStatus = () => {
  return (
    <>
      <SubTitle>Wind status </SubTitle>

      <StyledStatus>
        7<span>mph</span>
      </StyledStatus>

      <StyledDetails>
        <i>
          <NavigationIcon />
        </i>
        <p>wsw</p>
      </StyledDetails>
    </>
  );
};

export default WindStatus;
