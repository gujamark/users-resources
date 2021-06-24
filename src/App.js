import './App.css';

import Routes from './Routes';
import Navigation from './components/navigation';
import ErrorBoundary from './components/error-boundary';

function App() {
  return (
    <>
      <ErrorBoundary>
        <Navigation />
        <Routes />
      </ErrorBoundary>
    </>
  );
}

export default App;
