export type FactDefinition = {
  fact: string;
  length: number;
};

export type FactsDefinition = {
  current_page: number;
  data: FactDefinition[];
  per_page: number;
};
