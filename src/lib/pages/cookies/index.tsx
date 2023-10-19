import {
  Grid,
  Heading,
  Text,
  Container,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const Cookies = () => {
  return (
    <Grid gap={4}>
      <Container maxW="90%">
        <Heading as="h1" size="xl">
          We use cookies
        </Heading>
        <Text>
          <Heading as="h2" size="lg" mt="2">
            Cookies and How We Use Them
          </Heading>
          <br />
          Cookies are small text files that are placed on your computer or
          device by websites that you visit or HTML-formatted emails you open,
          to make our websites work, or to make them work more efficiently, to
          understand the effectiveness of our emails, and confirm that you
          received the necessary communications. We use the word “cookie” in
          this notice as a synonym for all similar tracking technologies which
          we use, such as pixel tags and web beacons (collectively “cookies”).
          <br />
          For instance, cookies are used to:
          <br />
          <Container maxW="90%" mt="2">
            <UnorderedList spacing={6}>
              <ListItem>
                1. Enable the proper functioning of our websites and the proper
                delivery of legitimate electronic communications;
              </ListItem>
              <ListItem>
                2. Tailor information presented to you based on your browsing
                preferences, such as language and geographical region;
              </ListItem>
              <ListItem>
                3. Collect statistics regarding your website usage;
              </ListItem>
              <ListItem>
                4.Provide us with business and marketing information; and In
                some cases, to enable a third party to deliver future
                advertising for our Services to you when you visit certain
                websites owned by third parties.
              </ListItem>
            </UnorderedList>
          </Container>
        </Text>
        <br />
        <Text mt="2">
          The cookies we use include &quot;session&quot; cookies that are erased
          when you leave our websites, or they may be &quot;persistent&quot;
          cookies that remain on your computer or device after you leave the
          site, in preparation for your next visit to our websites.
        </Text>
        <Heading as="h2" size="lg" mt="2">
          How We Use Third-Party Cookies
        </Heading>
        <Text mt="2">
          Cookies may also be placed on our websites by third parties to deliver
          tailored information and content that may be of interest to you, such
          as promotions or offerings, when you visit third-party websites after
          you have left ours. We do not permit these third parties to collect
          personal data about you (e.g., email address) other than that
          collected using such cookies unless such data is provided to the third
          party in their role as a service provider acting solely on our behalf.
        </Text>
        <Text mt="2">
          You can find a list of the third-party cookies that we use on our
          sites along with other relevant information in the cookie table below.
          While we do our best to keep this table updated, please note that the
          number and names of cookies, pixels and other technologies may change
          from time to time.
        </Text>
      </Container>
    </Grid>
  );
};

export default Cookies;
