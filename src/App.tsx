import Heading from '../Estudo/Body/Heading';
import './styles/global.css';
import './styles/theme.css';
import Body from '../Estudo/Body/Body';

function App() {
  return (
    <>
      <Heading
        title="Olá, Mundo!"
        description="Bem-vindo ao Chronos Pomodoro"
      />
      <Body>Olá Mundo</Body>
      <Body>Olá Mundo 2</Body>
    </>
  );
}

export default App;
