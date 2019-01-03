import React from 'react'; 
import {withRouter} from 'react-router-dom';

class  JoinRedirect extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
        window.location.href = `https://au.flayr.io/pages/jobs-for-makeup-artists`;
    }
    render(){
        return(<div></div>)
    }

}

export default withRouter(JoinRedirect);