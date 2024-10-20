import { Grid, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { Carousel } from "lib/components/carousel/Carousel";
import { Card } from "lib/components/card/Card";
import { BlogCard, BlogCardData } from "lib/components/blogcard/BlogCard";

import { carouseldata } from "lib/demodata/carouseldata";
import { blogdata } from "lib/demodata/blogdata";

const Blog = () => {
  return (
    <Grid gap={4}>
      <Heading as="h1">Blog</Heading>
      <Carousel heigth="450px" width="100%" data={carouseldata} />
      <Text>
        <Heading as="h2">Latest News</Heading>
        <List spacing={3} display={"flex"} gap="3">
          {blogdata.map((article: BlogCardData, index) => (
            <ListItem>
              <BlogCard key={index} data={article}></BlogCard>
            </ListItem>
          ))}
        </List>
      </Text>
    </Grid>
  );
};

export default Blog;
