import ambitiousIcon from "@/assets/images/traits/Trait_ambitious.png";
import arbitraryIcon from "@/assets/images/traits/Trait_arbitrary.png";
import arrogantIcon from "@/assets/images/traits/Trait_arrogant.png";
import braveIcon from "@/assets/images/traits/Trait_brave.png";
import callousIcon from "@/assets/images/traits/Trait_callous.png";
import calmIcon from "@/assets/images/traits/Trait_calm.png";
import chasteIcon from "@/assets/images/traits/Trait_chaste.png";
import compassionateIcon from "@/assets/images/traits/Trait_compassionate.png";
import contentIcon from "@/assets/images/traits/Trait_content.png";
import cravenIcon from "@/assets/images/traits/Trait_craven.png";
import cynicalIcon from "@/assets/images/traits/Trait_cynical.png";
import deceitfulIcon from "@/assets/images/traits/Trait_deceitful.png";
import diligentIcon from "@/assets/images/traits/Trait_diligent.png";
import fickleIcon from "@/assets/images/traits/Trait_fickle.png";
import forgivingIcon from "@/assets/images/traits/Trait_forgiving.png";
import generousIcon from "@/assets/images/traits/Trait_generous.png";
import gluttonousIcon from "@/assets/images/traits/Trait_gluttonous.png";
import greedyIcon from "@/assets/images/traits/Trait_greedy.png";
import gregariousIcon from "@/assets/images/traits/Trait_gregarious.png";
import honestIcon from "@/assets/images/traits/Trait_honest.png";
import humbleIcon from "@/assets/images/traits/Trait_humble.png";
import impatientIcon from "@/assets/images/traits/Trait_impatient.png";
import justIcon from "@/assets/images/traits/Trait_just.png";
import lazyIcon from "@/assets/images/traits/Trait_lazy.png";
import lustfulIcon from "@/assets/images/traits/Trait_lustful.png";
import paranoidIcon from "@/assets/images/traits/Trait_paranoid.png";
import patientIcon from "@/assets/images/traits/Trait_patient.png";
import sadisticIcon from "@/assets/images/traits/Trait_sadistic.png";
import shyIcon from "@/assets/images/traits/Trait_shy.png";
import stubbornIcon from "@/assets/images/traits/Trait_stubborn.png";
import temperateIcon from "@/assets/images/traits/Trait_temperate.png";
import trustingIcon from "@/assets/images/traits/Trait_trusting.png";
import vengefulIcon from "@/assets/images/traits/Trait_vengeful.png";
import wrathfulIcon from "@/assets/images/traits/Trait_wrathful.png";
import zealousIcon from "@/assets/images/traits/Trait_zealous.png";

export const TRAIT_ICON_PIXEL_SIZE = 80;

const TraitAssets: TraitAssetsMap = {
  //  Courage
  brave: {
    type: "brave",
    icon: braveIcon,
    dao: 1,
    foil: "craven",
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
  },
  craven: {
    type: "craven",
    icon: cravenIcon,
    dao: 0,
    foil: "brave",
    relations: [
      {
        type: "craven",
        opinion: 20,
      },
    ],
  },
  //  Ambition
  ambitious: {
    type: "ambitious",
    icon: ambitiousIcon,
    dao: 1,
    foil: "content",
    relations: [
      {
        type: "content",
        opinion: -10,
      },
    ],
  },
  content: {
    type: "content",
    icon: contentIcon,
    dao: 0,
    foil: "ambitious",
    relations: [
      {
        type: "content",
        opinion: 20,
      },
    ],
  },
  //  Justice
  just: {
    type: "just",
    icon: justIcon,
    dao: 1,
    foil: "arbitrary",
    relations: [
      {
        type: "just",
        opinion: 10,
      },
      {
        type: "arbitrary",
        opinion: -10,
      },
    ],
  },
  arbitrary: {
    type: "arbitrary",
    icon: arbitraryIcon,
    dao: 0,
    foil: "just",
    relations: [],
  },
  //  Pride
  arrogant: {
    type: "arrogant",
    icon: arrogantIcon,
    dao: 1,
    foil: "humble",
    relations: [
      {
        type: "humble",
        opinion: -15,
      },
    ],
  },
  humble: {
    type: "humble",
    icon: humbleIcon,
    dao: 0,
    foil: "arrogant",
    relations: [
      {
        type: "arrogant",
        opinion: -15,
      },
    ],
  },
  //  Lust
  lustful: {
    type: "lustful",
    icon: lustfulIcon,
    dao: 1,
    foil: "chaste",
    relations: [
      {
        type: "lustful",
        opinion: 10,
      },
      {
        type: "chaste",
        opinion: -10,
      },
    ],
  },
  chaste: {
    type: "chaste",
    icon: chasteIcon,
    dao: 0,
    foil: "lustful",
    relations: [
      {
        type: "lustful",
        opinion: -10,
      },
      {
        type: "chaste",
        opinion: 10,
      },
    ],
  },
  //  Faith
  zealous: {
    type: "zealous",
    icon: zealousIcon,
    dao: 1,
    foil: "cynical",
    relations: [
      {
        type: "zealous",
        opinion: 15,
      },
      {
        type: "cynical",
        opinion: -10,
      },
    ],
  },
  cynical: {
    type: "cynical",
    icon: cynicalIcon,
    dao: 0,
    foil: "zealous",
    relations: [
      {
        type: "zealous",
        opinion: -10,
      },
      {
        type: "cynical",
        opinion: 10,
      },
    ],
  },
  //  Truth
  honest: {
    type: "honest",
    icon: honestIcon,
    dao: 1,
    foil: "deceitful",
    relations: [
      {
        type: "honest",
        opinion: 10,
      },
      {
        type: "deceitful",
        opinion: -10,
      },
    ],
  },
  deceitful: {
    type: "deceitful",
    icon: deceitfulIcon,
    dao: 0,
    foil: "honest",
    relations: [
      {
        type: "honest",
        opinion: -10,
      },
    ],
  },
  //  Effort
  diligent: {
    type: "diligent",
    icon: diligentIcon,
    dao: 1,
    foil: "lazy",
    relations: [
      {
        type: "diligent",
        opinion: 10,
      },
      {
        type: "lazy",
        opinion: -10,
      },
    ],
  },
  lazy: {
    type: "lazy",
    icon: lazyIcon,
    dao: 0,
    foil: "diligent",
    relations: [],
  },
  //  Resolve
  stubborn: {
    type: "stubborn",
    icon: stubbornIcon,
    dao: 1,
    foil: "fickle",
    relations: [],
  },
  fickle: {
    type: "fickle",
    icon: fickleIcon,
    dao: 0,
    foil: "stubborn",
    relations: [],
  },
  //  Grudges
  vengeful: {
    type: "vengeful",
    icon: vengefulIcon,
    dao: 1,
    foil: "forgiving",
    relations: [],
  },
  forgiving: {
    type: "forgiving",
    icon: forgivingIcon,
    dao: 0,
    foil: "vengeful",
    relations: [
      {
        type: "forgiving",
        opinion: 10,
      },
      {
        type: "vengeful",
        opinion: -10,
      },
    ],
  },
  //  Serenity
  wrathful: {
    type: "wrathful",
    icon: wrathfulIcon,
    dao: 1,
    foil: "calm",
    relations: [],
  },
  calm: {
    type: "calm",
    icon: calmIcon,
    dao: 0,
    foil: "wrathful",
    relations: [
      {
        type: "calm",
        opinion: 10,
      },
      {
        type: "wrathful",
        opinion: -10,
      },
    ],
  },
  //  Generosity
  generous: {
    type: "generous",
    icon: generousIcon,
    dao: 1,
    foil: "greedy",
    relations: [
      {
        type: "greedy",
        opinion: 15,
      },
    ],
  },
  greedy: {
    type: "greedy",
    icon: greedyIcon,
    dao: 0,
    foil: "generous",
    relations: [],
  },
  //  Socialization
  gregarious: {
    type: "gregarious",
    icon: gregariousIcon,
    dao: 1,
    foil: "shy",
    relations: [
      {
        type: "gregarious",
        opinion: 10,
      },
    ],
  },
  shy: {
    type: "shy",
    icon: shyIcon,
    dao: 0,
    foil: "gregarious",
    relations: [
      {
        type: "shy",
        opinion: 10,
      },
    ],
  },
  //  Trust
  paranoid: {
    type: "paranoid",
    icon: paranoidIcon,
    dao: 1,
    foil: "trusting",
    relations: [],
  },
  trusting: {
    type: "trusting",
    icon: trustingIcon,
    dao: 0,
    foil: "paranoid",
    relations: [],
  },
  //  Gluttony
  gluttonous: {
    type: "gluttonous",
    icon: gluttonousIcon,
    dao: 1,
    foil: "temperate",
    relations: [
      {
        type: "gluttonous",
        opinion: 10,
      },
      {
        type: "temperate",
        opinion: -10,
      },
    ],
  },
  temperate: {
    type: "temperate",
    icon: temperateIcon,
    dao: 0,
    foil: "gluttonous",
    relations: [
      {
        type: "gluttonous",
        opinion: -10,
      },
    ],
  },
  //  Patience
  impatient: {
    type: "impatient",
    icon: impatientIcon,
    dao: 1,
    foil: "patient",
    relations: [
      {
        type: "patient",
        opinion: -15,
      },
    ],
  },
  patient: {
    type: "patient",
    icon: patientIcon,
    dao: 0,
    foil: "impatient",
    relations: [
      {
        type: "impatient",
        opinion: -15,
      },
    ],
  },
  //  Compassion
  compassionate: {
    type: "compassionate",
    icon: compassionateIcon,
    dao: 1,
    foil: "callous",
    relations: [
      {
        type: "callous",
        opinion: -15,
      },
    ],
  },
  callous: {
    type: "callous",
    icon: callousIcon,
    dao: 0,
    foil: "compassionate",
    relations: [],
  },
  //  Sadism
  sadistic: {
    type: "sadistic",
    icon: sadisticIcon,
    dao: 1,
    foil: "masochistic",
    relations: [],
  },
  masochistic: {
    type: "masochistic",
    icon: sadisticIcon,
    dao: 0,
    foil: "sadistic",
    relations: [],
  },
};

export const YangTraits: TraitAssetsMap = Object.values(TraitAssets).reduce(
  (acc, cur) => (cur.dao ? { ...acc, [cur.type]: cur } : acc),
  {},
);

export const YinTraits: TraitAssetsMap = Object.values(TraitAssets).reduce(
  (acc, cur) => (!cur.dao ? { ...acc, [cur.type]: cur } : acc),
  {},
);

export default TraitAssets;
