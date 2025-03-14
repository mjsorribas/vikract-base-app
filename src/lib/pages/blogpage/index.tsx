import { Box, Heading, Text, Image, Tag, VStack } from "@chakra-ui/react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";
import { useLocation } from "react-router-dom";

const BlogPage = () => {
  const location = useLocation();
  const { data } = location.state;

  const { title, description, pubDate, tags, image, content } = data;

  return (
    <Box>
      <Heading as="h1">{title}</Heading>
      <Text>{pubDate}</Text>
      <Image src={image} alt={title} />

      <Text>{description}</Text>
      <Box>{documentToReactComponents(content)}</Box>
      <Box>
        <VStack spacing={4} align="start">
          {tags.map(
            (
              tag:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | null
                | undefined,
              index: Key | null | undefined
            ) => (
              // eslint-disable-next-line react/no-array-index-key
              <Tag key={index}>{tag}</Tag>
            )
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default BlogPage;
