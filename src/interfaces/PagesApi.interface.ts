export interface PagesAPIResponse {
  data: Data;
  extensions: Extensions;
}

export interface Data {
  pages: Pages;
}

export interface Pages {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  content: string;
  title: string;
}

export interface Extensions {
  debug: Debug[];
}

export interface Debug {
  type: string;
  message: string;
}
