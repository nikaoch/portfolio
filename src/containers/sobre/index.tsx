import Paragrafo from '../../components/paragrafo'
import Titulo from '../../components/title'
import { GithubSecao } from './style'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi fugit, vero
      ad recusandae odit impedit! Recusandae rem quasi dicta! Reprehenderit
      aliquid hic cum nobis quis molestiae labore unde sapiente temporibus!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=nikaoch&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=nikaoch&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
