import Logo from '../../assets/logo.svg'

import * as Styled from './styles'

export function Header() {
  return (
    <Styled.Conatainer>
      <Styled.Content>
        <Styled.ImageLogo src={Logo} alt="dt money" />
        <Styled.Button type="button">Nova transação</Styled.Button>
      </Styled.Content>
    </Styled.Conatainer>
  )
}