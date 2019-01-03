import React from 'react'; 
import {withRouter} from 'react-router-dom';

class  ProfileRedirect extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
        window.location.href = `http://au.flayr.io/products/`+this.props.match.params.provider_id
    }
    render(){
        return(<div></div>)
    }

}

export default withRouter(ProfileRedirect);