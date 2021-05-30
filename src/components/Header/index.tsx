import Logo from '../../assets/logo.svg';

import * as Styled from './styles';

interface HeaderProps {
  onOpenTransactionModal(): void;
}

export function Header(props: HeaderProps) {
  const { onOpenTransactionModal } = props;

  return (
    <Styled.Conatainer>
      <Styled.Content>
        <Styled.ImageLogo src={Logo} alt="dt money" />
        <Styled.Button 
          onClick={onOpenTransactionModal} 
          type="button"
        >
          Nova transação
        </Styled.Button>
      </Styled.Content>
    </Styled.Conatainer>
  )
}