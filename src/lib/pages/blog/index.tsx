import { Grid, Heading, List, ListItem, Text } from "@chakra-ui/react";

import { BlogCard } from "lib/components/blogcard/BlogCard";
import type { BlogCardData } from "lib/components/blogcard/BlogCardData";
import { Carousel } from "lib/components/carousel/Carousel";
import { blogdata } from "lib/demodata/blogdata";
import { carouseldata } from "lib/demodata/carouseldata";

const Blog = () => {
  return (
    <Grid gap={4}>
      <Heading as="h1">Blog</Heading>
      <Carousel heigth="450px" width="100%" data={carouseldata} />
      <Text>
        <Heading as="h2">Latest News</Heading>
        <List spacing="3" display="flex" gap="3">
          {blogdata.map((article: BlogCardData, index) => (
            <ListItem>
              <BlogCard
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                data={article}
              />
            </ListItem>
          ))}
        </List>
      </Text>
    </Grid>
  );
};

export default Blog;
