type Item = {
  title: string;
  links: Array<{
    title: string;
    url: string;
  }>;
};

export type AccordionProps = {
  items: Item[];
};
