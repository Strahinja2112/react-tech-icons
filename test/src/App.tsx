import './App.css';
import { allIcons } from '../../src/constants';

function App() {
  return (
    <div
      style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        columnGap: '30px',
        rowGap: '5px',
      }}
    >
      {allIcons.reverse().map(El => (
        <div
          key={(Math.random() * Math.random() ** 2) / 18.45}
          style={{
            border: '1px solid rgb(255,255,255,0.2)',
          }}
        >
          <El width={120} height={120} color="#fff" />
        </div>
      ))}
    </div>
  );
}

export default App;
