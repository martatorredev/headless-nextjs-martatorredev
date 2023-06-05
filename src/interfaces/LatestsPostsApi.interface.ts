export interface LatestsPostsAPIResponse {
  data: Data;
  extensions: Extensions;
}

export interface Data {
  posts: LatestPosts;
}

export interface LatestPosts {
  edges: LatestPostEdge[];
}

export interface LatestPostEdge {
  node: LatestPost;
}

export interface LatestPost {
  id: string;
  date: Date;
  title: string;
  categories: Categories;
  featuredImage: FeaturedImage;
}

export interface Categories {
  nodes: NodeElement[];
}

export interface NodeElement {
  name: string;
}

export interface FeaturedImage {
  node: FeaturedImageNode;
}

export interface FeaturedImageNode {
  sourceUrl: string;
}

export interface Extensions {
  debug: Debug[];
}

export interface Debug {
  type: string;
  message: string;
}
