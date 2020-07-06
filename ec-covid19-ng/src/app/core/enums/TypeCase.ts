import { Type } from '@angular/core';

export enum TypeCase {
  Confirmed = 'confirmed',
  Healed = 'healed',
  Dead = 'dead'
}

export function getTitle(typeCase: TypeCase): string {
  switch (typeCase) {
    case TypeCase.Confirmed: return 'Confirmados';
    case TypeCase.Dead: return 'Muertos';
    case TypeCase.Healed: return 'Recuperados';
  }
}
