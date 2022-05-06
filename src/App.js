import {Main} from './components/Main';
import {History} from './components/History/History';

const historyData = {
  title: 'История',
  desc: `Устойчивая стратегия роста, концентрация 
    на основных компетенциях и клиентоориентированность — ключевые факторы 
    успеха на рынке металлопродукции в течение 17 лет.`,
  sliderList: [
    {
      title: 2003,
      desc: 'Основание предприятия по торговле чёрным металлопрокатом',
    },
    {
      title: 2008,
      desc: 'Включение в ассортимент цветных металлов и нержавейки',
    },
    {
      title: 2013,
      desc: 'Открытие подразделения по металлообработке',
    },
    {
      title: 2020,
      desc: 'Открытие собственного завода по обработке металлов и производству металлоконструкций',
    },
    {
      title: 2022,
      desc: 'Основание предприятия по торговле чёрным металлопрокатом',
    },
    {
      title: 2024,
      desc: 'Включение в ассортимент цветных металлов и нержавейки',
    },
    {
      title: 2026,
      desc: 'Открытие подразделения по металлообработке',
    },
    {
      title: 2028,
      desc: 'Открытие собственного завода по обработке металлов и производству металлоконструкций',
    },
  ]
}

function App() {
  return (
    <div className="App">
      <Main>
        <History historyData={historyData}/>
      </Main>
    </div>
  );
}

export default App;