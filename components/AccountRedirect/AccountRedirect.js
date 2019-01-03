import React from 'react'; 
import {withRouter} from 'react-router-dom';

class  AccountRedirect extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
        window.location.href = `https://me.flayr.io/`;
    }
    render(){
        return(<div></div>)
    }

}

export default withRouter(AccountRedirect);