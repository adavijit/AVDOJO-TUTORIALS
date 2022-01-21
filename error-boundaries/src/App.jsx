
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import One from './components/One';
import Three from './components/Three';
import Two from './components/Two';

function App() {
  return (
    <div className="App">
      <p>Components</p>

      <ErrorBoundary>
        <One/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Two/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Three/>
      </ErrorBoundary>

    </div>
  );
}

export default App;
