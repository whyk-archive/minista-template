import React from "react"
import { Helmet } from "react-helmet"
import { render } from "minista"
import { Header } from "@/components/organisms/Header"
import { Footer } from "@/components/organisms/Footer"
import { Container } from "@/components/organisms/Container"
import { Heading } from "@/components/atoms/Heading"

const Home = () => render(
  <>
    <Helmet>
      <title>Hello, minista</title>
    </Helmet>

    <Header />
    <Container>
      <Heading level={2}>Hello, minista</Heading>
      <p>Welcome to minista!!<br />This package is React based simply Static Site Genereter(SSG).<br />created by Qrac, managed by QRANOKO.</p>
      <p>Experience simple, JSX-protected website building.</p>
    </Container>
    <Footer />
  </>
)

export default Home