import React, { useState } from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate/';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
// import BackgroundImage from 'gatsby-background-image';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import PageTitle from 'components/Atoms/PageTitle/PageTitle';
import SectionText from 'components/Atoms/SectionText/SectionText';
import SectionTextTitle from 'components/Atoms/SectionTextTitle/SectionTextTitle';
import Icon from 'components/Atoms/Icon/Icon';
import SuccessIcon from 'assets/images/icons/success.svg';

const Section = styled.section`
  display: block;
`;

const FeaturedImgWrapper = styled(Img)`
  width: 100%;
  height: 18rem;
  margin-top: 7rem;

  ${({ theme }) => theme.mq.tablet} {
    height: 60rem;
  }
`;

const Thumbnail = styled(Img)`
  display: block;
  width: 100%;
  height: 100%;

  ${({ theme }) => theme.mq.tablet_2} {
    height: 70rem;
  }
`;

const Content = styled.div`
  position: relative;
  max-width: 100rem;
  padding: 2rem;
  margin: 1rem auto;

  ${({ theme }) => theme.mq.mobile_1} {
    width: 80%;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 70%;
  }

  ${({ theme }) => theme.mq.tablet_2} {
    width: 90%;
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 0;
    margin: 10rem auto;
  }
`;

const StyledPageTitle = styled(PageTitle)`
  text-align: left;
`;

const IndexWrapper = styled.div`
  width: 8rem;
  padding: 1rem 2rem;
  border: 1px solid ${({ theme }) => theme.color.accentColor};
  margin: 1rem 0;

  ${({ theme }) => theme.mq.tablet_2} {
    margin: 2rem 0;
  }
`;

const StyledSectionText = styled(SectionText)`
  margin-bottom: ${({ permission }) => (permission ? 0 : '4rem')};
  margin-left: ${({ permission }) => (permission ? '1rem' : 0)};
  font-size: ${({ permission }) => (permission ? '1rem' : '')};

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ permission }) => (permission ? '1rem' : '')};
  }
`;

const StyledSectionTextSuccess = styled(SectionText)`
  text-align: center;
`;

const StyledSectionTextTitleSuccess = styled(SectionTextTitle)`
  margin: 1rem 0 3rem;
`;

const InnerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;

  ${({ theme }) => theme.mq.tablet_2} {
    flex-direction: row;
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 82rem;
  }
`;

const InnerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  margin-top: 4rem;

  ${({ theme }) => theme.mq.tablet_2} {
    flex: 1;

    &:last-of-type {
      margin-left: 4rem;
    }
  }
`;

const Asterics = styled.span`
  color: red;
`;

const FormWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const FormGroup = styled.li`
  display: flex;
  flex-direction: ${({ permission }) => (permission ? 'row' : 'column')};
  margin-top: 2rem;
`;

const FormLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  line-height: 1.8;
  color: ${({ theme }) => theme.color.darkGrey};
`;

const FormInput = styled.input`
  padding: 1.5rem;
  border: 1px solid
    ${({ theme, error }) => (error ? 'red' : theme.color.midGrey)};
  border-radius: 4px;
  transition: border-color 0.3s ease-in;

  &:focus {
    outline: none;
    border: 1px solid
      ${({ theme, error }) => (error ? 'red' : theme.color.accentColor)};
  }
`;

const StyledErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 2;
  color: ${({ theme }) => theme.color.error};
`;

const FormTextArea = styled.textarea`
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.color.midGrey};
  border-radius: 4px;
  transition: border-color 0.3s ease-in;
  resize: none;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.color.accentColor};
  }
`;

const SubmitButton = styled.button`
  display: block;
  width: 14rem;
  padding: 1.5rem;
  border: none;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  background-color: ${({ theme }) => theme.color.accentColor};
  transition: background-color 0.3s ease-in;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.accentColorDark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.midGrey};
    cursor: unset;
  }
`;

const StyledIcon = styled(Icon)`
  width: 10rem;
`;

const ConglomerateTemplate = ({ data }) => {
  const { title, index, size, description } = data.markdownRemark.frontmatter;
  const featuredImg =
    data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;
  const thumbnail =
    data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid;
  const [success, setSuccessMessage] = useState(false);

  // Validation
  // RegEx for phone number validation
  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  // Schema for yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('*Podaj poprawny adres e-mail')
      // .max(100, "*Email must be less than 100 characters")
      .required('*To pole jest wymagane'),
    tel: Yup.string().matches(phoneRegExp, '*Podaj poprawny numer telefonu'),
    // .required("*To pole jest wymagane"),
    amount: Yup.number()
      .min(1, '*Podaj ilość. Min. 1')
      .required('*To pole jest wymagane'),
    permission: Yup.boolean().required('*To pole jest wymagane'),
  });

  return (
    <MainTemplate>
      <Section>
        <FeaturedImgWrapper fluid={featuredImg} alt={title} />
        <Content>
          <StyledPageTitle>{title}</StyledPageTitle>
          <IndexWrapper>{index}</IndexWrapper>
          <StyledSectionText>Wymiary: {size}</StyledSectionText>
          <SectionText>{description}</SectionText>
          <InnerContentWrapper>
            <InnerContent>
              <Thumbnail fluid={thumbnail} alt={title} />
            </InnerContent>
            {!success ? (
              <InnerContent>
                <SectionTextTitle>Otrzymaj wycenę</SectionTextTitle>
                <Formik
                  initialValues={{
                    email: '',
                    tel: '',
                    index,
                    amount: '',
                    comment: `Dzień dobry, proszę o przesłanie wyceny konglomeratu ${title}.`,
                    permission: false,
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values, { resetForm }) => {
                    axios.post(
                      'https://i6k6tuzwq2.execute-api.eu-west-1.amazonaws.com/production/contact-us',
                      {
                        email: values.email,
                        tel: values.tel,
                        index: values.index,
                        amount: values.amount,
                        comment: values.comment,
                        permission: values.permission
                          ? 'Wyrażam zgodę na  przetwarzanie przez firmę Kwarctex Sp. z o.o. moich danych osobowych w postaci adresu e-mail, numeru telefonu w celu przesyłania mi wyceny dotyczącej produktów i usług oferowanych przez Kwarctex Sp. z o.o.'
                          : 'Brak zgody',
                      }
                    );
                    resetForm();
                    setSuccessMessage(true);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    setFieldValue,
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <FormWrapper>
                        <FormGroup>
                          <FormLabel htmlFor="email">
                            E-mail:<Asterics>*</Asterics>
                          </FormLabel>
                          <FormInput
                            type="email"
                            name="email"
                            id="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            error={!!(touched.email && errors.email)}
                          />
                          {touched.email && errors.email ? (
                            <StyledErrorMessage>
                              {errors.email}
                            </StyledErrorMessage>
                          ) : null}
                        </FormGroup>
                        <FormGroup>
                          <FormLabel htmlFor="tel">Telefon:</FormLabel>
                          <FormInput
                            type="tel"
                            name="tel"
                            id="tel"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.tel}
                            error={!!(touched.tel && errors.tel)}
                          />
                          {touched.tel && errors.tel ? (
                            <StyledErrorMessage>
                              {errors.tel}
                            </StyledErrorMessage>
                          ) : null}
                        </FormGroup>
                        <FormGroup>
                          <FormLabel htmlFor="index">
                            Numer konglomeratu:
                          </FormLabel>
                          <FormInput
                            type="text"
                            name="index"
                            id="index"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.index}
                            disabled
                          />
                        </FormGroup>
                        <FormGroup>
                          <FormLabel htmlFor="amount" required>
                            Ilość:<Asterics>*</Asterics>
                          </FormLabel>
                          <FormInput
                            type="number"
                            name="amount"
                            id="amount"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.amount}
                            error={!!(touched.amount && errors.amount)}
                          />
                          {touched.amount && errors.amount ? (
                            <StyledErrorMessage>
                              {errors.amount}
                            </StyledErrorMessage>
                          ) : null}
                        </FormGroup>
                        <FormGroup>
                          <FormLabel htmlFor="comment">Komentarz:</FormLabel>
                          <FormTextArea
                            id="comment"
                            rows="6"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.comment}
                          />
                        </FormGroup>
                        <FormGroup>
                          <SubmitButton
                            type="submit"
                            disabled={!values.permission}
                          >
                            Wyślij zapytanie
                          </SubmitButton>
                        </FormGroup>
                        <FormGroup permission>
                          <FormInput
                            type="checkbox"
                            id="permission"
                            error={!!(touched.permission && errors.permission)}
                            onChange={() =>
                              setFieldValue('permission', !values.permission)
                            }
                            onBlur={handleBlur}
                            checked={values.permission}
                            required
                          />
                          <FormLabel htmlFor="permission">
                            <StyledSectionText permission>
                              <Asterics>*</Asterics> Wyrażam zgodę na
                              przetwarzanie przez firmę Kwarctex Sp. z o.o.
                              moich danych osobowych w postaci adresu e-mail,
                              numeru telefonu w celu przesyłania mi wyceny
                              dotyczącej produktów i usług oferowanych przez
                              Kwarctex Sp. z o.o.
                            </StyledSectionText>
                          </FormLabel>
                          {touched.permission && errors.permission ? (
                            <StyledErrorMessage>
                              {errors.permission}
                            </StyledErrorMessage>
                          ) : null}
                        </FormGroup>
                      </FormWrapper>
                    </form>
                  )}
                </Formik>
              </InnerContent>
            ) : (
              <InnerContent>
                <StyledIcon src={SuccessIcon} />
                <StyledSectionTextTitleSuccess>
                  Wiadomość została wysłana!
                </StyledSectionTextTitleSuccess>
                <StyledSectionTextSuccess>
                  Skontaktujemy się z Tobą w celu przedstawienia szczegółów.
                </StyledSectionTextSuccess>
              </InnerContent>
            )}
          </InnerContentWrapper>
        </Content>
      </Section>
    </MainTemplate>
  );
};

export const query = graphql`
  query productQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        index
        size
        description
        thumbnail {
          childImageSharp {
            id
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        featuredImage {
          childImageSharp {
            id
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;

ConglomerateTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default ConglomerateTemplate;
