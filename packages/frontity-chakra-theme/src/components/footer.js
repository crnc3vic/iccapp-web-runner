import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { SocialMenu } from "./header/social-menu";
import { connect } from "frontity";

const FooterSection = props => (
  <Box
    as="footer"
    pos="relative"
    bg="primary.900"
    py={{ base: "32px", lg: "40px" }}
    {...props}
  />
);

const FooterSectionGroup = props => (
  <SimpleGrid
    columns={{ base: 1, md: 3 }}
    maxWidth="1150px"
    mx="auto"
    width="90%"
    {...props}
  />
);

const FooterSectionItem = props => (
  <Box padding="24px" color="white" textAlign="center" {...props} />
);

const Footer = ({ state }) => (
  <FooterSection alignSelf="flex-end">
    <FooterSectionGroup>
      <FooterSectionItem
        fontWeight="bold"
        fontFamily="heading"
        textTransform="uppercase"
      >
        © {new Date().getFullYear()} Frontity!
      </FooterSectionItem>

      <FooterSectionItem borderColor="accent.400">
        
      </FooterSectionItem>

      <FooterSectionItem
        fontWeight="bold"
        fontFamily="heading"
        textTransform="uppercase"
      >
        FRA ICCAPP
      </FooterSectionItem>
    </FooterSectionGroup>
  </FooterSection>
);

export default connect(Footer);
