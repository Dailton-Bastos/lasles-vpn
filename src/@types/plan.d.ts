type Plan = {
  id: number;
  title: string;
  value: number;
  benefits: string[];
};

export type PlanProps = {
  selected: boolean;
  plan: Plan;
  onClick: () => void;
  recommended: boolean;
};
