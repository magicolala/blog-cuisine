export class Recipe {
  id: number;
  title: string;
  image: string;
  makeTime: number;
  cookTime: number;
  description: string;
  tags: string[];
  ingredients: string[];
  categoryId: number[];
}
