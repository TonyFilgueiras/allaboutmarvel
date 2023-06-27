import { Card } from "../typescript/types";

export default function getCardDisplayName(card : Card): string {
    if ('name' in card) {
      return card.name;
    } else if ('title' in card) {
      return card.title;
    } else {
      return 'Unknown';
    }
  }