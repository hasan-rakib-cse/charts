import './App.css';
import ChartLine from './components/Charts/ChartLine';
import ChartMixBar from './components/Charts/ChartMixBar';
import ChartStackedArea from './components/Charts/ChartStackedArea';

function App() {
  return (
    <div className="App">
      <ChartLine />
      <ChartMixBar />
      <ChartStackedArea />
    </div>
  );
}

export default App;
