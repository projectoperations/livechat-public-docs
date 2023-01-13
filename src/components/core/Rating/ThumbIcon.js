import React from "react";
import styled from "@emotion/styled";
import { string, bool, func } from "prop-types";

import { ThumbFilledIcon as ThumbFilled } from "assets/icons/ThumbFilled";
import { ThumbHollowIcon } from "assets/icons/ThumbHollow";

const Container = styled.div`
  cursor: pointer;
  display: flex;
`;

const ThumbHollow = styled(ThumbHollowIcon)`
  :hover {
    > path {
      fill: #4379d6;
    }
  }
`;

const ThumbIcon = ({ id, isSelected, handleClick, ...rest }) => {
  return (
    <Container id={id} onClick={handleClick} {...rest}>
      {isSelected ? <ThumbFilled /> : <ThumbHollow />}
    </Container>
  );
};

ThumbIcon.propTypes = {
  id: string.isRequired,
  isSelected: bool.isRequired,
  handleClick: func.isRequired,
};

export default ThumbIcon;
