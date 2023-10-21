import { Link, Stack } from "@chakra-ui/react";

export default function Sitemap() {
  return (
    <Stack mr={6} ml={6} align="flex-start">
      <Link href="/aboutus">About Vikract</Link>
      <Link href="/roadmap">About our Roadmap</Link>
      <Link href="/documentationfordevs">Documentation for developers</Link>
      <Link href="/contactus">Contact us</Link>
    </Stack>
  );
}
