import React from 'react';
import { Switch,Route } from 'react-router-dom'
import QuoteForm from '../QuoteForm/QuoteForm';
import StylistList from '../StylistList/StylistList';
import LandingPage from '../LandingPage/LandingPage';
import StylistQuote from '../StylistQuote/StylistQuote';
import ProfileRedirect from '../ProfileRedirect/ProfileRedirect';
import SuburbLandingPage from '../SuburbLandingPage/SuburbLandingPage';
import AccountRedirect from '../AccountRedirect/AccountRedirect';
import JoinRedirect from '../JoinRedirect/JoinRedirect';

class Main extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(<div>
            <Switch>
                <Route exact path='/' component={LandingPage}/> {/* this is where the quote form will be*/}
                <Route path='/:provider_id/get-quote/' component={StylistQuote} />{/* this route spins up custom quote page*/}
                <Route path='/quote/:id/' component={StylistList}/> {/* /quote/:id will bring up the StylistList*/}
                <Route path='/stylist-quote/:provider_id/:id/' component={StylistList}/> {/* /quote/:id will bring up the StylistList*/}
                <Route exact path='/account/' component={AccountRedirect}/>
                <Route exact path='/join/' component={JoinRedirect}/>
                <Route exact path='/au/:state/:suburb/MakeupArtist' component={SuburbLandingPage}/>
                <Route exact path='/au/:state/:suburb/MakeupArtists' component={SuburbLandingPage}/>
                <Route exact path='/:provider_id' component={ProfileRedirect}/>
            </Switch>
             </div>)
    }
}

export default Main;