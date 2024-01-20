/**
 * TraitUtilities.ts
 */

import TraitAssets from "@/config/TraitAssets";

export const determinePersonalityType = (traits: TraitType[]): string => {
  return "Neutral Neutral";
};

export const determineProfilesRelation = (a: Profile, b: Profile): number => {
  return a.traits.reduce((total, aTrait) => {
    return (
      total +
      TraitAssets[aTrait].relations.reduce((rTotal, aRelation) => {
        if (b.traits.includes(aRelation.type)) {
          return (rTotal += aRelation.opinion);
        }
        return rTotal;
      }, 0)
    );
  }, 0);
};

export const calculateHarmony = (a: Profile, b: Profile): TraitType[] => {
  return a.traits.filter((trait) =>
    TraitAssets[trait].relations.some((relation) => relation.opinion > 0 && b.traits.includes(relation.type)),
  );
};

export const calculateConflict = (a: Profile, b: Profile): TraitType[] => {
  return a.traits.filter((trait) =>
    TraitAssets[trait].relations.some((relation) => relation.opinion < 0 && b.traits.includes(relation.type)),
  );
};

export const calculateBalance = (traits: TraitType[]): number => {
  return (
    traits.reduce((total, trait) => {
      if (TraitAssets[trait].dao) {
        return total + 1;
      } else {
        return total - 1;
      }
    }, 0) / 2
  );
};
