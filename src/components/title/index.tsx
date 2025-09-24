import { Titulo as TitleStyle } from './style'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => (
  <TitleStyle fontSize={props.fontSize}>{props.children}</TitleStyle>
)

export default Titulo
