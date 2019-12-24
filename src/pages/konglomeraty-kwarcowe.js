import React from 'react';
import PropTypes from 'prop-types';
import MainTemplate from 'templates/MainTemplate/MainTemplate/';
import ConglomerateHeroTemplate from 'templates/ConglomerateHeroTemplate/ConglomerateHeroTemplate';
import ConglomerateListTemplate from 'templates/ConglomerateListTemplate/ConglomerateListTemplate';
import { graphql } from 'gatsby';

const Conglomerates = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
  } = data;

  return (
    <div>
      <MainTemplate>
        <ConglomerateHeroTemplate />
        <ConglomerateListTemplate data={edges} />
      </MainTemplate>
    </div>
  );
};

Conglomerates.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export const query = graphql`
  query productsQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            thumbnail {
              id
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Conglomerates;
