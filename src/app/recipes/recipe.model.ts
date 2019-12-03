export interface Recipe {
  // we have created our own custom data type in this way and we are ensuring that data of this type would have same structure
  id: string;
  title: string;
  imageUrl: string;
  ingredients: string[];
}
