import "./style.css";
import Header from "../Header/index.jsx";
import ContainerImage from "../ContainerImage/index.jsx";
import DayCounter from "../DayCounter/index.jsx";
import AudioPlayer from "../AudioPlayer/index.jsx";
import music from "../../assets/music.mp3";

function PrincipalContainer() {
  return (
    <div className="container">
      <AudioPlayer 
        src={music} 
        loop={true} 
        autoplay={true} 
        volume={0.4}
      />
      <Header></Header>
      <p className="text-principal">
        Eu sei que o nosso mundo às vezes parece cheio de mistérios e desafios,
        como se a gente estivesse vivendo entre Hawkins e o Mundo Invertido.
        Mas, mesmo quando tudo vira de cabeça-pra-baixo, você é aquela luz que
        nunca apaga — igual às luzes da casa da Joyce, sempre me guiando de
        volta pra você.
        Desde que você entrou na minha vida, tudo ganhou sentido… como se
        eu tivesse encontrado minha Eleven no meio do caos. Você é o meu porto
        seguro, minha conexão mais forte, aquela pessoa que faz qualquer
        realidade até a mais sombria, valer a pena. Com você, eu não preciso
        de poderes. Só preciso do seu sorriso pra lembrar que, no fim de tudo,
        eu realmente amo minha vida… porque ela tem você.
      </p>
      <ContainerImage />
      <p className="text-secundario">
        No dia 26/11, a gente completa 1 ano e 6 meses, e eu não consigo pensar
        em uma data mais perfeita. Parece até que o universo decidiu brincar de
        roteirista e sincronizou nosso aniversário exatamente com o lançamento
        da nova temporada de Stranger Things — justamente a série que sempre fez
        parte das nossas conversas, das nossas risadas e até dos nossos momentos
        mais especiais. Enquanto o mundo inteiro se prepara pra voltar a
        Hawkins, enfrentar novos mistérios e descobrir o que o Mundo Invertido
        esconde dessa vez, eu só consigo pensar no quanto a nossa história é a
        minha temporada favorita. Porque durante esse 1 ano e meio juntos, você
        transformou tudo ao meu redor. Fez até os dias mais estranhos virarem
        algo leve, fez o caos parecer aventura, fez a vida ganhar sentido…
        igualzinho quando a Eleven aparece e muda tudo.
        Nesses 1 ano e 6 meses, você me mostrou que a vida pode ser
        intensa, imprevisível, cheia de reviravoltas… mas com você, cada
        capítulo vale a pena. Você é a minha luz no meio do mundo invertido, meu
        porto seguro quando tudo parece sair do controle, a pessoa que me lembra
        todos os dias que eu realmente amo a minha vida, porque nela existe
        você. Então hoje, enquanto uma nova temporada estreia, a nossa também
        continua. E eu prometo: quero muitas temporadas ao seu lado. Com menos
        monstros, claro… mas com toda a emoção, conexão e amor que só a gente
        sabe ter. Feliz 1 ano e 6 meses, meu amor. Que venham mais capítulos,
        mais temporadas e mais nós dois.
      </p>
      <DayCounter />
      <p className="text-surpresa">
        E isso é só o começo... Haverá mais surpresas à frente! 🎁✨
      </p>
    </div>
  );
}

export default PrincipalContainer;
