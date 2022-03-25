import { Header } from './components/layout/Header/Header';
import { HomePage } from './pages/Home/HomePage';
import { PhotoPage } from './pages/Photo';

function App() {
  return (
    <div className="bg-neutrals/8 dark:bg-neutrals/1 min-h-screen">
      <Header />
      {/* <HomePage /> */}
      <PhotoPage />
    </div>
  );
}

export default App;
