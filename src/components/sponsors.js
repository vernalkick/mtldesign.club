import React from 'react'
import styled from 'styled-components'
import ShopifyLogo from '../assets/images/svg/shopify-logo.svg'
import FlowLogo from '../assets/images/svg/flow-logo.svg'
import PeroniLogo from '../assets/images/svg/peroni-logo.svg'
import LightspeedLogo from '../assets/images/svg/lightspeed-logo.svg'

const Container = styled.div`
  margin-top: 5rem;
`

const Title = styled.h4`
  margin-bottom: 0;
`

const Text = styled.p `
  margin: 0.5rem 0 2.5rem;
  font-size: var(--font-size-5);
`

const SponsorList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: -0.75rem -1.5rem;
`

const SponsorItem = styled.li`
  margin: 0.75rem 1.5rem;
  display: block;

  @media (min-width: 1000px) {
    /* float: left; */
    /* display: inline-block; */
  }

  /* & + & {
    margin-left: 2rem;
  } */
`

export default () => (
  <Container>
    <Title>Sponsors</Title>
    <Text>Our thanks for supporting the community.</Text>
    <SponsorList>
      <SponsorItem>
        <a href="https://www.shopify.com/careers/locations/montreal">
          <ShopifyLogo />
        </a>
      </SponsorItem>

      <SponsorItem>
        <a href="https://www.instagram.com/peroni_ca/">
          <PeroniLogo />
        </a>
      </SponsorItem>
      {/*
        <SponsorItem>
          <a href="https://createwithflow.com">
            <FlowLogo />
          </a>
        </SponsorItem>
        <SponsorItem>
          <a href="https://www.lightspeedhq.com/careers/">
            <LightspeedLogo />
          </a>
        </SponsorItem>
      */}
    </SponsorList>
  </Container>
)
