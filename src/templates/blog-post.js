import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import Content, { HTMLContent } from "../components/Content";
import styled from "styled-components";

const Section = styled.section`
  padding: 3rem 1.5rem;
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  @media screen and (min-width: 1408px) {
    max-width: 1344px;
    width: 1344px;
  }
  @media screen and (min-width: 1216px) {
    max-width: 1152px;
    width: 1152px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 960px;
    width: 960px;
  }
`;

const Columns = styled.div`
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;
  @media screen and (min-width: 769px) {
    display: flex;
  }

  &:last-child {
    margin-bottom: -0.75rem;
  }
`;

const BlogTitle = styled.h1`
  font-size: 32px;
`;

const Tags = styled.ul`
  display: flex;
  flex-direction: row;
  li:not(:last-child) {
    margin-right: 5px;
  }
`;

export const BlogPostTemplate = ({
  author,
  content,
  contentComponent,
  coverimage,
  date,
  description,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Section>
      {helmet || ""}
      <ContentWrapper>
        <Columns>
          <div>
            <BlogTitle>{title}</BlogTitle>
            <h4>{date}</h4>
            {coverimage && <img src={coverimage} />}
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div>
                <h4>Tags</h4>
                <Tags>
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>
                        <span className="tag is-info">{tag}</span>
                      </Link>
                    </li>
                  ))}
                </Tags>
              </div>
            ) : null}
          </div>
        </Columns>
      </ContentWrapper>
    </Section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogPostTemplate
      author={post.frontmatter.author}
      date={post.frontmatter.date}
      coverimage={post.frontmatter.coverimage}
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        author
        coverimage
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
