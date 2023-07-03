type TraitType = "ambitious" | "content" | "brave" | "craven";

type TraitRelation = {
  type: TraitType;
  opinion: number;
};

type TraitRelationMap = {
  [key: string]: TraitRelation;
};

type TraitAssets = {
  type: TraitType;
  icon: string;
  relations: TraitRelation[];
};

type TraitAssetsMap = {
  [key: TraitType]: TraitAssets;
};
