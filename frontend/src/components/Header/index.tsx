import logo from '../../assets/logo.svg'
import { HeaderContainer, HeaderContent } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        <nav>
          <a href="">Nossa proposta</a>
          <a href="">Cadastrar/Logar</a>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
