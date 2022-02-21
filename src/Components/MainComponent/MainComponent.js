

import AfterReview from '../AfterReview/AfterReview';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Headline from '../Headline/Headline';
import Hero from '../Hero/Hero';
import Reviews from '../Reviews/Reviews';

function MainComponent({setSignUp}) {
  return (
    <div className="App">
      <Headline/>
      <Hero/>
      <Card setSignUp={setSignUp} />
      <Reviews/>
      <AfterReview/>
      <Footer/>
    </div>
  );
}

export default MainComponent;
