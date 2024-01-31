export interface Options {
  id: number;
  type: string;
  tag: string;
  nameOption: string;
  description?: string;
  image: string;
  price: number;
  schedule: number;
  created_at: Date;
  updated_at: Date;
}
export type OptionChoose = Pick<
  Options,
  "type" | "nameOption" | "price" | "id"
>;
