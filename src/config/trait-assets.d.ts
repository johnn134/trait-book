type TraitType =
  | "ambitious"
  | "content"
  | "brave"
  | "craven"
  | "just"
  | "arbitrary"
  | "arrogant"
  | "humble"
  | "lustful"
  | "chaste"
  | "zealous"
  | "cynical"
  | "honest"
  | "deceitful"
  | "diligent"
  | "lazy"
  | "stubborn"
  | "fickle"
  | "vengeful"
  | "forgiving"
  | "wrathful"
  | "calm"
  | "generous"
  | "greedy"
  | "gregarious"
  | "shy"
  | "paranoid"
  | "trusting"
  | "gluttonous"
  | "temperate"
  | "impatient"
  | "patient"
  | "compassionate"
  | "callous"
  | "sadistic"
  | "masochistic";

type TraitRelation = {
  type: TraitType;
  opinion: number;
};

type TraitRelationMap = {
  [key: string]: TraitRelation;
};

type TraitAssetData = {
  type: TraitType;
  icon: string;
  dao: number;
  foil: TraitType;
  relations: TraitRelation[];
};

type TraitAssetsMap = {
  [key: string]: TraitAssetData;
};
