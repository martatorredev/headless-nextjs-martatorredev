export interface CategoriesAPIResponse {
  data: Data;
  extensions: Extensions;
}

export interface Data {
  categories: Categories;
}

export interface Categories {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  id: string;
  name: string;
  count: number;
}

export interface Extensions {
  debug: Debug[];
}

export interface Debug {
  type: string;
  message: string;
}
