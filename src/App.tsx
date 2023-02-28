import Banner from './common/components/Banner/Banner';
import Header from './common/components/Header/Header';
import Feed from './modules/feed/components/Feed/Feed';

function App() {
  return (
    <div className='pb-8'>
      <Header />
      <Banner />
      <Feed />
    </div>
  );
}

export default App;
