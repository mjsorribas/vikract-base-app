import { Link, Stack } from "@chakra-ui/react";

export default function Sitemap() {
  return (
    <Stack mr={6} ml={6} align="flex-start">
      <Link href="https://vikract.com/aboutus">
        About Vikract
      </Link>
      <Link href="https://vikract.com/roadmap">
        About our Roadmap
      </Link>
      <Link href="https://vikract.com/documentationfordevs">
        Documentation for developers
      </Link>
      <Link href="https://vikract.com/contactus">
        Contact us
      </Link>
    </Stack>
  );
}
