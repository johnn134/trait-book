import braveIcon from "@/assets/images/traits/Trait_brave.png";

export const TRAIT_ICON_PIXEL_SIZE = 120;

const TraitAssets: TraitAssetsMap = {
  brave: {
    type: "brave",
    icon: braveIcon,
    relations: [
      {
        type: "brave",
        opinion: 10,
      },
      {
        type: "craven",
        opinion: -10,
      },
    ],
  } as TraitAssets,
  craven: {
    type: "craven",
    icon: braveIcon,
    relations: [
      {
        type: "craven",
        opinion: 20,
      },
    ],
  } as TraitAssets,
  ambitious: {
    type: "ambitious",
    icon: braveIcon,
    relations: [
      {
        type: "content",
        opinion: -10,
      },
    ],
  } as TraitAssets,
  content: {
    type: "content",
    icon: braveIcon,
    relations: [
      {
        type: "content",
        opinion: 20,
      },
    ],
  } as TraitAssets,
};

export default TraitAssets;
