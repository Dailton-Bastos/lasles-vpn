import {
  Accordion as Wrapper,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import './Accordion.css';

import { AccordionProps } from '~/@types/accordion';

export const Accordion = ({ items = [] }: AccordionProps) => {
  return (
    <Wrapper allowZeroExpanded>
      {items.map((item) => (
        <AccordionItem key={item.title}>
          <AccordionItemHeading>
            <AccordionItemButton>{item.title}</AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <ul>
              {item?.links.map((link) => (
                <li key={link.title}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Wrapper>
  );
};
