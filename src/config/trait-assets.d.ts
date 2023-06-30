type TraitType = 'ambitious' | 'brave';

type TraitAssets = {
  type: TraitType;
  icon: string;
};

type TraitAssetsMap = {
  [key: TraitType]: TraitAssets;
};
