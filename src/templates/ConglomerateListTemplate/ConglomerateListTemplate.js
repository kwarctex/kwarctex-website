import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Img from 'gatsby-image';
import SearchInput from 'components/Atoms/SearchInput/SearchInput';

const StyledWrapper = styled.div`
  max-width: 130rem;
  padding: 5rem 6rem;
  margin: auto;
`;

const StyledListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  list-style: none;

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

const StyledImg = styled(Img)`
  width: 100%;
  height: 35rem;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  ${({ theme }) => theme.mq.desktop} {
    height: 50rem;
  }
  :hover {
    transform: scale(1.05);
  }
`;

const StyledListItem = styled.li`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.midGrey};
  margin-bottom: 5rem;

  ${({ theme }) => theme.mq.desktop} {
    max-width: calc(33% - 8rem);
    margin: 0 4rem 5rem;
  }
`;

const StyledTitle = styled.h3`
  margin: 3rem 0 2rem;
  color: ${({ theme }) => theme.color.black};
  text-transform: capitalize;
`;

const StyledSearchProductsWrapper = styled.div`
  width: 100%;
  margin-bottom: 5rem;
`;

const StyledLink = styled(AniLink)`
  text-decoration: none;
`;

const ConglomerateListTemplate = ({ data }) => {
  console.log(data);
  const [inputVal, setInputValue] = useState('');
  const handleInputChange = e => setInputValue(e.target.value.toLowerCase());
  const filterItems = (inputValue, item) => {
    return item.includes(inputValue);
  };

  return (
    <StyledWrapper>
      <StyledSearchProductsWrapper>
        <SearchInput onChange={handleInputChange} value={inputVal} />
      </StyledSearchProductsWrapper>
      <StyledListWrapper>
        {data
          .filter(item =>
            filterItems(inputVal, item.node.frontmatter.title.toLowerCase())
          )
          .map(image => (
            <StyledListItem key={image.node.frontmatter.thumbnail.id}>
              <StyledLink
                to={image.node.fields.slug}
                cover
                direction="right"
                bg="hsla(0, 0%, 92%, 1)"
              >
                <StyledImg
                  fluid={image.node.frontmatter.thumbnail.childImageSharp.fluid}
                />
                <StyledTitle>{image.node.frontmatter.title}</StyledTitle>
              </StyledLink>
            </StyledListItem>
          ))}
      </StyledListWrapper>
    </StyledWrapper>
  );
};

ConglomerateListTemplate.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ConglomerateListTemplate;
