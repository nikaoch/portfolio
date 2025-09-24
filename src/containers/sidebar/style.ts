import styled from 'styled-components'
import { P } from '../../components/paragrafo/style'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  font-size: 10px;
  font-weight: bold;
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  background-color: #282a35;
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  left: 0;
  top: 80px;
`
