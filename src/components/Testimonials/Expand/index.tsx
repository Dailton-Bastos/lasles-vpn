import React from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import * as Styled from './styles';

type ExpandProps = {
  children: string;
};

export const Expand = ({ children }: ExpandProps) => {
  const DEFAULT_HEIGHT = 85;

  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isOverflow, setIsOverflow] = React.useState(false);

  const [heightCurrent, setHeightCurrent] = React.useState(DEFAULT_HEIGHT);
  const [heightMax, setHeightMax] = React.useState(DEFAULT_HEIGHT);
  const [heightMin, setHeightMin] = React.useState(DEFAULT_HEIGHT);

  const text = children;

  const refText = React.useRef<HTMLQuoteElement>(null);

  const handleExpanded = React.useCallback(() => {
    setHeightCurrent(isExpanded ? heightMin : heightMax);
    setIsExpanded((prev) => !prev);
  }, [isExpanded, heightMin, heightMax]);

  React.useEffect(() => {
    const heightClient = refText.current?.clientHeight || DEFAULT_HEIGHT;
    const scrollClient = refText.current?.scrollHeight || DEFAULT_HEIGHT;

    if (heightClient !== scrollClient) {
      setIsOverflow(true);
      setHeightMax(scrollClient);
      setHeightMin(heightClient);
      setHeightCurrent(heightClient);
    }
  }, [text]);

  return (
    <>
      <Styled.Wrapper
        ref={refText}
        isOverflow={!isExpanded && isOverflow}
        style={{ height: `${heightCurrent}px` }}
      >
        <p>&quot;{text}&quot;</p>
      </Styled.Wrapper>

      {isOverflow && (
        <Styled.Expand onClick={handleExpanded}>
          {isExpanded ? (
            <RiArrowUpSLine color="#0B132A" size={22} />
          ) : (
            <RiArrowDownSLine color="#0B132A" size={22} />
          )}
        </Styled.Expand>
      )}
    </>
  );
};
