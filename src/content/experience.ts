export type ExperienceItem = {
  id: string;
  roleKey: string;
  companyKey: string;
  typeKey: string;
  periodKey: string;
  descriptionKey: string;
  isCurrent?: boolean;
};

/** Ordem cronológica inversa (mais recente primeiro) — chaves em `Experience` nos messages */
export const experiences: ExperienceItem[] = [
  {
    id: "exp1",
    roleKey: "item1.role",
    companyKey: "item1.company",
    typeKey: "item1.type",
    periodKey: "item1.period",
    descriptionKey: "item1.description",
  },
  {
    id: "exp2",
    roleKey: "item2.role",
    companyKey: "item2.company",
    typeKey: "item2.type",
    periodKey: "item2.period",
    descriptionKey: "item2.description",
  },
  {
    id: "exp3",
    roleKey: "item3.role",
    companyKey: "item3.company",
    typeKey: "item3.type",
    periodKey: "item3.period",
    descriptionKey: "item3.description",
  },
];
