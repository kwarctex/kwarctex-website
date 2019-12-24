import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchIcon from 'assets/images/icons/search.svg';

const StyledInput = styled.input`
  width: 100%;
  padding-left: 5rem;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.midGrey};
  line-height: 3;
  text-align: left;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-size: 3rem;
  background-position: 3% 50%;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.color.black};
  }
  ${({ theme }) => theme.mq.tablet} {
    background-position: 1% 50%;
  }
  ${({ theme }) => theme.mq.desktop} {
    background-position: 0 50%;
  }
`;

const SearchInput = ({ value, ...rest }) => (
  <StyledInput
    {...rest}
    type="search"
    value={value}
    aria-label="Search through catalogue items"
    placeholder="Wyszukaj konglomerat"
  />
);

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
};

export default SearchInput;
