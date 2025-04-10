import React from 'react';
import { Heading } from '../../components/Heading/Heading';
import { Link } from 'react-router-dom';
import styles from './About.module.css';
export const About: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Heading>
          <h1>A técnica de Pomodoro 🍅</h1>
        </Heading>
        <div className={styles['content-line']}>
          <p>
            A Técnica Pomodoro é uma metodologia de produtividade criada por
            <span>Francesco Cirillo</span>, que consiste em dividir o trabalho
            em blocos de tempo (os famosos "Pomodoros") intercalados com pausas.
            O objetivo é manter o foco total por um período curto e garantir
            descansos para evitar o cansaço mental.
          </p>
        </div>
        <div className={styles['content-line']}>
          <img
            src="https://i.pinimg.com/736x/f5/7c/c8/f57cc89afa892ebe9e0ee3d6097714b2.jpg"
            alt="francesco cirilo"
          />
        </div>
        <div className={styles['content-line']}>
          <Heading>
            <h1>Como funciona o Pomodoro tradicional?</h1>
          </Heading>
          <ol>
            <li>Defina uma tarefa que você deseja realizar.</li>
            <li>Trabalhe nela por 25 minutos sem interrupções.</li>
            <li>Faça uma pausa curta de 5 minutos.</li>
            <li>
              A cada 4 ciclos, faça uma pausa longa (geralmente 15 a 30
              minutos).
            </li>
          </ol>
        </div>
        <div className={styles['content-line']}>
          <Heading>
            <h1>Mas no Chronos Pomodoro tem um diferencial</h1>
          </Heading>
          <p>
            Nosso app segue o conceito original, mas com algumas melhorias e
            personalizações pra deixar o processo ainda mais eficiente:
          </p>
          <div className={styles['content-line']}>
            <Heading>
              <h2>⚙️ Personalização do tempo</h2>
            </Heading>
            <p>
              Você pode configurar o tempo de foco, descanso curto e descanso
              longo do jeito que quiser! Basta acessar a&nbsp;
              <Link to={'/settings'} className={styles.link}>
                página de configurações
              </Link>
              &nbsp; e ajustar os minutos como preferir.
            </p>
            <div className={styles['content-line']}>
              <Heading>
                <h2>🔁 Ciclos organizados em sequência</h2>
              </Heading>
              <p>
                A cada ciclo completado, uma nova task é adicionada
                automaticamente ao seu histórico, e o app já sugere o próximo
                ciclo (foco ou descanso).
              </p>
              <div className={styles['content-line']}>
                <Heading>
                  <h3>Nosso padrão:</h3>
                </Heading>
                <ul>
                  <li>Ciclos ímpares: Trabalho (foco).</li>
                  <li>Ciclos pares: Descanso curto.</li>
                  <li>
                    Ciclo 8: Descanso longo especial, pra resetar o ciclo
                    completo.
                  </li>
                </ul>
              </div>
              <div className={styles['content-line']}>
                <Heading>
                  <h2>🍅 Visualização dos ciclos</h2>
                </Heading>
                <p>
                  Logo abaixo do cronômetro, você verá bolinhas coloridas
                  representando os ciclos:
                </p>
                <ul>
                  <li>🟡 Amarelo: Ciclo de trabalho (foco).</li>
                  <li>🟢 Verde: Descanso curto</li>
                  <li>🔵 Azul: Descanso longo (aparece a cada 8 ciclos).</li>
                </ul>
                <p>
                  Assim, você sempre sabe em que parte do processo está e o que
                  vem a seguir. Não precisa mais anotar no papel ou ficar
                  calculando de cabeça!
                </p>
              </div>
              <div className={styles['content-line']}>
                <Heading>
                  <h2>📊 Histórico automático</h2>
                </Heading>
                <p>
                  Todas as suas tarefas e ciclos concluídos ficam salvos no
                  &nbsp;
                  <Link to={'/history'} className={styles.link}>
                    histórico
                  </Link>
                  &nbsp; , com status de completas ou interrompidas. Assim, você
                  consegue acompanhar sua evolução ao longo do tempo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['content-line']}>
          <Heading>
            <h1>Por que usar o Chronos Pomodoro? 🚀</h1>
          </Heading>
          <ul>
            <li>✅ Organize seu foco com clareza.</li>
            <li>✅ Trabalhe e descanse na medida certa.</li>
            <li>✅ Personalize seus próprios ciclos e tempos.</li>
            <li>✅ Acompanhe seu histórico automaticamente.</li>
          </ul>
          <p>
            <span>Pronto pra focar?</span> Bora lá voltar para a &nbsp;
            <Link to={'/'} className={styles.link}>
              página inicial
            </Link>
            &nbsp; e iniciar seus Pomodoros! 🍅🚀
          </p>
          <p>"Foco total, sem pressa, sem pausa, só vai!" 💪🧘‍♂️</p>
        </div>
      </div>
    </section>
  );
};
