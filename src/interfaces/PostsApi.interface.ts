export interface PostsAPIResponse {
  data: Data;
  extensions: Extensions;
}

export interface Data {
  posts: Posts;
}

export interface Posts {
  edges: Edge[];
}

export interface Edge {
  node: EdgeNode;
}

export interface EdgeNode {
  id: string;
  date: Date;
  title: string;
  modified: Date;
  categories: Categories;
  featuredImage: FeaturedImage;
  content: string;
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
