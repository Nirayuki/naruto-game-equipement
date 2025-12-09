export enum graduation {
  genin = "genin",
  chuunin = "chuunin",
  jounin = "jounin",
  anbu = "anbu",
  sannin = "sannin",
  kage = "kage",
}

export enum fightStyle {
  taijutsu = "taijutsu",
  ninjutsu = "ninjutsu",
  genjutsu = "genjutsu",
  bukijutsu = "bukijutsu",
}

export enum atributeType {
  forca = "forca",
  inteligencia = "inteligencia",
  resistencia = "resistencia",
  agilidade = "agilidade",
  ataque = "ataque",
  vida = "vida",
  selo = "selo",
  precisao = "precisao",
}

export enum equipmentType {
  bandana = "bandana",
  colete = "colete",
  calca = "calca",
  luvas = "luvas",
  botas = "botas",
  pergaminho = "pergaminho",
}

export interface atributeSlot {
  type: atributeType | fightStyle;
  value: number;
}

export interface equipment {
  id: string;
  type: equipmentType;
  atributes: atributeSlot[];
  score: number;
  graduation: graduation;
}
