import { pluck, pipe, uniq, groupBy, prop, includes } from "ramda";

export type CitizenCard = {
  name: string;
  value: number;
  resource?: Resource;
  role: Role;
  from: Box;
};

export type Resource = "gold" | "magic" | "strength";

export type Role = "worker" | "soldier" | "shadow" | "holy";

type Box =
  | "Base"
  | "Shadowvale"
  | "Flames&Frost"
  | "Crimson Seas"
  | ExtensionPack;

type ExtensionPack = "XP 1" | "XP 2" | "XP 3" | "XP 4" | "XP 5" | "XP 6";

export type MonsterCard = {
  name: string;
  image: string;
  from: Box;
};

export const citizens: Array<CitizenCard> = [
  { name: "Clerc", value: 1, role: "holy", from: "Base" },
  { name: "Moine", value: 1, role: "holy", from: "Base" },
  { name: "Invocateur", value: 1, role: "holy", from: "Flames&Frost" },
  { name: "Exorciste", value: 1, role: "holy", from: "Shadowvale" },
  { name: "Forgeron", value: 2, role: "worker", from: "Base" },
  { name: "Marchand", value: 2, role: "worker", from: "Base" },
  { name: "Barde", value: 2, role: "worker", from: "Flames&Frost" },
  { name: "Bûcheron", value: 2, role: "worker", from: "Shadowvale" },
  { name: "Mercenaire", value: 3, role: "shadow", from: "Base" },
  { name: "Alchimiste", value: 3, role: "shadow", from: "Base" },
  { name: "Ensorcelleuse", value: 3, role: "shadow", from: "Flames&Frost" },
  { name: "Bandit", value: 3, role: "shadow", from: "Shadowvale" },
  { name: "Archère", value: 4, role: "soldier", from: "Base" },
  { name: "Magicien", value: 4, role: "soldier", from: "Base" },
  { name: "Barbare", value: 4, role: "soldier", from: "Flames&Frost" },
  { name: "Chasseresse", value: 4, role: "soldier", from: "Shadowvale" },
  { name: "Paysan", value: 5, resource: "gold", role: "worker", from: "Base" },
  {
    name: "Paysan",
    value: 5,
    resource: "strength",
    role: "worker",
    from: "XP 4",
  },
  {
    name: "Paysan",
    value: 5,
    resource: "magic",
    role: "worker",
    from: "Shadowvale",
  },
  {
    name: "Chevalier",
    value: 6,
    resource: "gold",
    role: "soldier",
    from: "Shadowvale",
  },
  {
    name: "Chevalier",
    value: 6,
    resource: "strength",
    role: "soldier",
    from: "Base",
  },
  {
    name: "Chevalier",
    value: 6,
    resource: "magic",
    role: "soldier",
    from: "XP 4",
  },
  { name: "Scélérat", value: 7, role: "shadow", from: "Base" },
  { name: "Voleuse", value: 7, role: "shadow", from: "Base" },
  { name: "Condottière", value: 7, role: "shadow", from: "Flames&Frost" },
  { name: "Nécromancien", value: 7, role: "shadow", from: "Shadowvale" },
  { name: "Chef de guerre", value: 8, role: "soldier", from: "Base" },
  { name: "Champion", value: 8, role: "soldier", from: "Base" },
  { name: "Bogatyr", value: 8, role: "soldier", from: "Flames&Frost" },
  { name: "Protecteur", value: 8, role: "soldier", from: "Shadowvale" },
  { name: "Paladin", value: 9, role: "holy", from: "Base" },
  { name: "Prêtresse", value: 9, role: "holy", from: "Base" },
  { name: "Dragon", value: 9, role: "holy", from: "Flames&Frost" },
  { name: "Templier", value: 9, role: "holy", from: "Shadowvale" },
  { name: "Mineur", value: 11, role: "worker", from: "Base" },
  { name: "Boucher", value: 11, role: "worker", from: "Base" },
  { name: "Boulangère", value: 11, role: "worker", from: "Flames&Frost" },
  { name: "Inventeur", value: 11, role: "worker", from: "Shadowvale" },
];

export const monsters: Array<MonsterCard> = [
  { name: "Collines", image: "collines", from: "Base" },
  { name: "Ruines", image: "ruines", from: "Base" },
  { name: "Landes", image: "landes", from: "Base" },
  { name: "Forêts", image: "forets", from: "Base" },
  { name: "Vallées", image: "vallees", from: "Base" },
  { name: "Marais", image: "marais", from: "Base" },
  { name: "Montagnes", image: "montagnes", from: "Base" },
  { name: "Cavernes", image: "cavernes", from: "Base" },
  { name: "Volcan", image: "volcan", from: "Flames&Frost" },
  { name: "Glacier", image: "glacier", from: "Flames&Frost" },
  { name: "Steppes", image: "steppes", from: "Flames&Frost" },
  { name: "Désert", image: "desert", from: "Flames&Frost" },
  { name: "Oasis", image: "oasis", from: "Flames&Frost" },
  { name: "Égouts", image: "egouts", from: "Shadowvale" },
  { name: "Catacombes", image: "catacombes", from: "Shadowvale" },
  { name: "Bois", image: "bois", from: "Shadowvale" },
  { name: "Antres", image: "antres", from: "Shadowvale" },
  { name: "Cryptes", image: "cryptes", from: "Shadowvale" },
  { name: "Samuraï Immortels", image: "samurai-immortels", from: "XP 2" },
];

export const drawCitizenCards = (citizens: CitizenCard[]): CitizenCard[] => {
  const values = pipe(pluck("value"), uniq)(citizens);
  const deck = groupBy(prop("value"), citizens);
  return values.map((value) => {
    const cards = deck[value];
    return cards[Math.floor(Math.random() * cards.length)];
  });
};

export const drawMonsterCards = (monsters: MonsterCard[]): MonsterCard[] => {
  const heap: MonsterCard[] = [];
  while (heap.length < 5) {
    const drawCard = Math.floor(Math.random() * monsters.length);
    if (!includes(monsters[drawCard], heap)) {
      heap.push(monsters[drawCard]);
    }
  }

  return heap;
};
