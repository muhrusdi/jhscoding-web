/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Row, Col } from "antd";
import Img from "gatsby-image";
import Container from "components/container";
import { Nav, Title, Button, Text, Coming } from "./styled";
import Layout from "../layouts";

const Home: React.FC = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(height: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      banner: file(relativePath: { eq: "banner-hero.png" }) {
        childImageSharp {
          fixed(height: 334) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Container>
        <div>
          <Nav>
            <Img fixed={data.logo.childImageSharp.fixed} alt="JhsCoding" />
          </Nav>
          <div>
            <Row gutter={40} style={{ height: "80vh" }} align="middle">
              <Col xs={12}>
                <div>
                  <Coming>Coming Soon</Coming>
                  <Title>
                    Learn Programming <br />
                    <span>from Scratch</span>
                  </Title>
                  <Text>
                    Bangun karirmu sebagai developer yang siap bekerja di
                    perusahaan teknologi
                  </Text>
                  <Button size="large">Contact</Button>
                </div>
              </Col>
              <Col xs={12}>
                <div>
                  <Img
                    fixed={data.banner.childImageSharp.fixed}
                    alt="JhsCoding"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
