import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ContentWrapper = styled.div`
  p:not(:first-child) {
    margin-top: 20px;
  }

  ul,
  ol {
    margin: 10px;
    margin-left: 30px;
  }

  ul {
    list-style-type: circle;
  }
`;

export const HTMLContent = ({ content, className }) => (
  <ContentWrapper
    className={className}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

const Content = ({ content, className }) => (
  <ContentWrapper className={className}>{content}</ContentWrapper>
);

Content.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
