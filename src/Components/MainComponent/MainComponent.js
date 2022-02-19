

import AfterReview from '../AfterReview/AfterReview';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Headline from '../Headline/Headline';
import Hero from '../Hero/Hero';
import Reviews from '../Reviews/Reviews';

function MainComponent() {
  return (
    <div className="App">
      <Headline/>
      <Hero/>
      <Card/>
      <Reviews/>
      <AfterReview/>
      <Footer/>
    </div>
  );
}

export default MainComponent;
