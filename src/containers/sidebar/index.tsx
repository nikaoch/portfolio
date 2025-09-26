import Avatar from '../../components/avatar'
import Paragrafo from '../../components/paragrafo'
import Titulo from '../../components/title'
import { BotaoTema, Descricao, SidebarContainer } from './style'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Nícolas Souza</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        nikaoch
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
