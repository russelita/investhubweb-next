export type Color = {
  id: number;
  name: string;
  color: string;
  year: number;
}

export type Colors = {
  page: number;
  per_page: number;
  total: number;
  total_page: number;
  data: Color[];
}