import { PetType } from 'src/types/pet';

// can be converted to function if we need to use i18n tFunction
export const PET_OPTIONS_LABELS_MAP = {
  [PetType.CAT]: 'Kitty <3',
  [PetType.DOG]: 'Puppy ^_^',
  [PetType.DUCK]: 'Ducky >_<',
  [PetType.SPIDER]: 'Spidey 0_o'
};

// convert enum to list of keys and remove duplicates
export const PET__TYPE_OPTIONS = Array.from(new Set(Object.values(PetType))).filter(
  (petType) => !!PET_OPTIONS_LABELS_MAP[petType]
);
