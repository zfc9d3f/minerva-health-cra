import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faFacebook,
    faInstagram,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

library.add(faChevronRight, faFacebook, faTwitter, faInstagram);

const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:900|Roboto|Lora:i&display=swap');
  body{
    padding: 0;
    margin: 0;
    background-color: #e1e5ea;
  }

  .paddingForIcon{
      padding: 1rem;
      cursor: pointer;
      color: #21262e;
      &:hover{
          color: #606e85;
      }
  }
  @keyframes toTop {
    0%{
      opacity: 0;
      transform: translateY(5rem)
    }
    100%{
      opacity: 1;
      transform: translateY(0rem)
    }
  }

`;

const Background = styled.img`
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    @media (max-width: 1200px) {
        margin-top: 4rem;
    }
    @media (max-width: 1000px) {
        margin-top: 10rem;
    }
    @media (max-width: 700px) {
        margin-top: 14rem;
        transform: scale(1.8) translateX(-3.2rem);
    }
    @media (max-width: 400px) {
        margin-top: 15rem;
    }
`;
const Container = styled.div`
    position: relative;
`;
const Title = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 7rem;
    padding-left: 5rem;
    max-width: 40%;

    @media (max-width: 1600px) {
        padding-top: 5rem;
    }
    @media (max-width: 1400px) {
        padding-top: 1.5rem;
        padding-left: 3rem;
    }
    @media (max-width: 1000px) {
        margin: 0 auto;
        align-items: center;
        text-align: center;
        padding-left: 0rem;
        max-width: 70%;
    }
    @media (max-width: 700px) {
        max-width: none;
        min-width: none;
    }
`;

const TitleTitle = styled.div`
    display: flex;
    margin-bottom: 0.4rem;
    border-bottom: 7px solid black;
    animation-name: toTop;
    animation-duration: 700ms;
    animation-timing-function: ease-out;
    /* justify-content: center; */
    @media (max-width: 1600px) {
        margin-bottom: 0.3rem;
    }
    @media (max-width: 700px) {
        max-width: none;
        min-width: none;
    }
`;
const Left = styled.h1`
    padding: 0;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    font-size: 3.5rem;
    color: #21262e;
    @media (max-width: 1600px) {
        font-size: 3.3rem;
    }
    @media (max-width: 1400px) {
        font-size: 3rem;
    }
    @media (max-width: 1200px) {
        font-size: 2.6rem;
    }
    @media (max-width: 1000px) {
        font-size: 2.3rem;
    }
`;

const Right = styled(Left)`
    color: #606e85;
    @media (max-width: 1600px) {
        font-size: 3.3rem;
    }
    @media (max-width: 1400px) {
        font-size: 3rem;
    }
    @media (max-width: 1200px) {
        font-size: 2.6rem;
    }
    @media (max-width: 1000px) {
        font-size: 2.3rem;
    }
`;

const Text = styled.div`
    font-size: 1.3rem;
    font-family: "Roboto", sans-serif;
    line-height: 1.7rem;
    letter-spacing: 0.5px;
    animation-name: toTop;

    animation-duration: 700ms;
    animation-timing-function: ease-out;
    animation-delay: 300ms;
    animation-fill-mode: forwards;
    opacity: 0;

    @media (max-width: 1600px) {
        font-size: 1.2rem;
        line-height: 1.6rem;
    }
    @media (max-width: 1200px) {
        font-size: 1rem;
        line-height: 1.4rem;
    }
    @media (max-width: 700px) {
        padding: 0rem 1rem;
    }
`;

const Header = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-end;
    padding-top: 1rem;
    @media (max-width: 1400px) {
        padding-right: 3rem;
    }
    @media (max-width: 1000px) {
        width: 100%;
        justify-content: center;
        padding-right: 0rem;
    }
    @media (max-width: 650px) {
        display: none;
    }
`;

const LearnButton = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem 0rem;
    border: 3px solid #21262e;
    border-radius: 4px;
    background-color: #e1e5ea;
    color: #21262e;
    margin-top: 1rem;
    font-family: "Roboto", sans-serif;
    font-size: 1.3rem;
    width: 11rem;
    transition-duration: 150ms;
    animation-name: toTop;
    transition-timing-function: ease-in;
    animation-duration: 700ms;
    animation-timing-function: ease-out;
    animation-delay: 300ms;
    animation-fill-mode: forwards;
    opacity: 0;
    outline: none;
    cursor: pointer;
    &:hover {
        color: #e1e5ea;
        background-color: #21262e;
    }

    @media (max-width: 1600px) {
        font-size: 1.1rem;
        width: 10rem;
    }
`;

const ContactButton = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem 0rem;
    border: 3px solid #21262e;
    border-radius: 4px;
    background-color: #c4cad4;
    color: #21262e;
    font-family: "Roboto", sans-serif;
    font-size: 1.3rem;
    width: 11rem;
    outline: none;
    cursor: pointer;
    &:hover {
        color: #e1e5ea;
        background-color: #21262e;
    }

    @media (max-width: 1600px) {
        font-size: 1.1rem;
        width: 10rem;
    }
`;

const HeaderLink = styled.a`
    font-family: "Lora", sans-serif;
    font-size: 1.2rem;
    padding: 0.3rem 0rem 0.3rem 2rem;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
    &:visited,
    &:active,
    &:link {
        color: #21262e;
    }
    @media (max-width: 1400px) {
        font-size: 1rem;
        padding-left: 1.5rem;
    }
    @media (max-width: 1000px) {
        padding-top: 0rem;
    }
`;

const Links = styled.div`
    margin-bottom: 4rem;
`;

const Card = styled.div`
    height: 30rem;
    width: 30%;
    background-color: #21262e;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    @media (max-width: 1600px) {
        height: 28rem;
    }
    @media (max-width: 1200px) {
        height: 23rem;
        width: 32%;
    }
    @media (max-width: 900px) {
        width: 50%;
        margin-bottom: 1rem;
    }
    @media (max-width: 700px) {
        width: 70%;
        margin-bottom: 1rem;
    }
    @media (max-width: 550px) {
        width: 95%;
    }
`;

const CardText = styled.div`
    color: #e1e5ea;
    font-family: "Roboto", sans-serif;
    font-size: 1.1rem;
    padding: 1rem 3rem;
    line-height: 1.6rem;
    @media (max-width: 1200px) {
        font-size: 1rem;
    }
    @media (max-width: 1100px) {
        padding: 1rem;
    }
    @media (max-width: 900px) {
        text-align: center;
    }
`;

const CardButton = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 12rem;
    outline: none;
    border: 3px solid #e1e5ea;
    border-radius: 4px;
    background-color: #e1e5ea;
    color: #21262e;
    font-family: "Roboto", sans-serif;
    padding: 0.3rem 0.5rem;
    font-size: 1.2rem;
    transition-duration: 150ms;
    transition-timing-function: ease-in;
    cursor: pointer;
    &:hover {
        background-color: #21262e;
        color: #e1e5ea;
    }
    @media (max-width: 1300px) {
        width: 11rem;
        padding: 0.2rem 0.4rem;
        font-size: 1.1rem;
    }
`;

const CardImg = styled.img`
    width: 100%;
    margin-bottom: 0rem;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`;
const BottomCardContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-bottom: 1rem;
    align-items: center;
`;

const CardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    margin-top: 46rem;

    @media (max-width: 1700px) {
        margin-top: 35rem;
    }
    @media (max-width: 1500px) {
        margin-top: 30rem;
    }
    @media (max-width: 1300px) {
        width: 100%;
        margin-top: 30rem;
    }
    @media (max-width: 1000px) {
        margin-top: 30rem;
    }
    @media (max-width: 900px) {
        flex-direction: column;
        margin-top: 25rem;
    }
    @media (max-width: 700px) {
        margin-top: 30rem;
    }
    @media (max-width: 600px) {
        margin-top: 25rem;
    }
`;

const FooterContainer = styled.div`
    background-color: #c4cad4;
`;

const TopFooter = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 2rem 1rem;
    align-items: center;
    margin-bottom: 3rem;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

const SocialLinks = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    padding: 0.3rem 0.3rem;
`;

const IndexPage = () => (
    <>
        <Global />
        <Container>
            <Header>
                <HeaderLink>Why Minerva</HeaderLink>
                <HeaderLink>Doctors & Locations</HeaderLink>
                <HeaderLink>Health & Wellness</HeaderLink>
                <HeaderLink>Careers</HeaderLink>
            </Header>
            <Title>
                <TitleTitle>
                    <Left>MINERVA</Left>
                    <Right>HEALTH</Right>
                </TitleTitle>
                <Text>
                    We operate the backbone of the healthcare supply chain. We
                    drive the future of local care delivery. We guide medical
                    innovations to market. This is what it means to create
                    healthier futures.
                </Text>
                <LearnButton>
                    Learn More
                    <FontAwesomeIcon icon="chevron-right" />
                </LearnButton>
            </Title>
            <Background src="https://res.cloudinary.com/dg8szh4ec/image/upload/v1562061170/test2.svg" />
        </Container>
        <Links>
            <CardContainer>
                <Card>
                    <CardImg src="https://res.cloudinary.com/dg8szh4ec/image/upload/w_400/c_crop,w_400,h_200/q_auto/v1562101917/pexels-photo-668298.jpg" />
                    <BottomCardContainer>
                        <CardText>
                            In addition to our comprehensive distribution
                            services, our solutions such as unit dose packaging
                            and 340B consoluting improve safety while growing
                            health systems
                        </CardText>
                        <CardButton>
                            Learn More <FontAwesomeIcon icon="chevron-right" />
                        </CardButton>
                    </BottomCardContainer>
                </Card>

                <Card>
                    <CardImg src="https://res.cloudinary.com/dg8szh4ec/image/upload/w_400/c_crop,w_400,h_200/q_auto/v1562101917/doctor-medical-medicine-health-42273.jpg" />
                    <BottomCardContainer>
                        <CardText>
                            From independent pharmacies to large retail chains,
                            our tailored solutions help pharmacies optimize
                            their business operations and strengthen their
                            position
                        </CardText>
                        <CardButton>
                            Learn More <FontAwesomeIcon icon="chevron-right" />
                        </CardButton>
                    </BottomCardContainer>
                </Card>
                <Card>
                    <CardImg src="https://res.cloudinary.com/dg8szh4ec/image/upload/w_400/c_crop,w_400,h_200/v1562101917/pexels-photo-1170979.jpg" />
                    <BottomCardContainer>
                        <CardText>
                            Manufacturers turn to Minerva for customized
                            strategies that leverage our decades of industry
                            experience, ensuring products reach the patients who
                            need them reliably
                        </CardText>
                        <CardButton>
                            Learn More <FontAwesomeIcon icon="chevron-right" />
                        </CardButton>
                    </BottomCardContainer>
                </Card>
            </CardContainer>
        </Links>
        <FooterContainer>
            <TopFooter>
                <SocialLinks>
                    <FontAwesomeIcon
                        className="paddingForIcon"
                        icon={["fab", "twitter"]}
                    />
                    <FontAwesomeIcon
                        className="paddingForIcon"
                        icon={["fab", "facebook"]}
                    />
                    <FontAwesomeIcon
                        className="paddingForIcon"
                        icon={["fab", "instagram"]}
                    />
                </SocialLinks>
                <ContactButton>
                    Contact Us
                    <FontAwesomeIcon icon="chevron-right" />
                </ContactButton>
            </TopFooter>
        </FooterContainer>
    </>
);

export default IndexPage;
