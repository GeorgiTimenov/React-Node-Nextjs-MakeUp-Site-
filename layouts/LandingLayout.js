import NavBar from '../components/NavBar/NavBar';
import ShopifyBar from '../components/ShopifyBar/ShopifyBar';
import InstaFeed from '../components/InstaFeed/InstaFeed';
import ReviewsBox from '../components/ReviewsBox/ReviewsBox';
import JoinBar from '../components/JoinBar/JoinBar';
import NeedHelpBar from '../components/NeedHelpBar/NeedHelpBar';
import GetStartedBar from '../components/GetStartedBar/GetStartedBar';
import Footer from '../components/Footer/Footer';

const LandingLayout = (props) =>{
  return(<div>
        <ShopifyBar />
        <NavBar />
        {props.children}
        <InstaFeed />
        <ReviewsBox />
        <JoinBar />
        <NeedHelpBar />
        <GetStartedBar />
        <Footer />

  </div>)
}

export default LandingLayout;