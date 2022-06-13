import * as Styled from './styles';

type MobileMenuIconProps = {
  isActive: boolean;
  onToggle: () => void;
};

export const MobileMenuIcon = ({
  isActive = false,
  onToggle,
}: MobileMenuIconProps) => {
  return (
    <Styled.Menu aria-label="Menu" isActive={isActive} onClick={onToggle}>
      <div />
      <div />
      <div />
    </Styled.Menu>
  );
};
