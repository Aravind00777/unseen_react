import Header from './components/Header';
import Banner from './components/Banner';
import Learnmore from './components/Learnmore';
import Knowmore from './components/Knowmore';
import Action_card from './components/Action_card';
import Videosec from './components/Videosec';
import Latestnews from './components/Latestnews';
import Readmore from './components/Readmore';
import Logosec from './components/Logosec';
import Footer from './components/Footer';
import DataPorvider from './providers/DataPorvider';
import BannerProvider from './providers/BannerProvider';
function App() {


  return (
    <>
  <DataPorvider>
      <Header/>
    </DataPorvider>
        <BannerProvider>
            <Banner/>
          </BannerProvider>
      <Learnmore/>
      <Knowmore/>
      <Action_card/>
      <Videosec/>
      <Latestnews/>
      <Readmore/>
      <Logosec/>
      <Footer/>
     
    </>
    
     
  )
}

export default App
