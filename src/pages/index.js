import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  grid-auto-rows: 1fr;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
          </div>
          <Grid>
            {posts
              .filter(post => post.node.frontmatter.templateKey === "blog-post")
              .map(({ node: post }) => (
                <div className="card" key={post.id}>
                  <header className="card-header">
                    <p className="card-header-title">
                      {post.frontmatter.title}
                    </p>
                  </header>
                  {post.frontmatter.coverimage && (
                    <div className="card-image">
                      <img src={post.frontmatter.coverimage} />
                    </div>
                  )}
                  <div className="card-content">
                    <div className="content">
                      <p>{post.excerpt}</p>
                      <time datetime="2016-1-1">{post.frontmatter.date}</time>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <Link className="card-footer-item" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </footer>
                </div>
              ))}
          </Grid>
        </div>
      </section>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            coverimage
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
