import React from 'react';
import axios from 'axios';



class Faqs extends React.Component{
    constructor(){
        super();
        this.state = {
            faqs: []
        }
    }


    componentDidMount() {
      axios.get('https://express-server-ap-southeast-2.flayr.io/faqs/quote')
      .then((response) => {


        if (response){
          this.setState({
            faqs: response.data
          })
          var i;
          for (i = 0; i < response.data.length; i++) {
              var faq = response.data[i];
              var faq_question = faq.question;
              var faq_answer = faq.answer;
        } 




        }})
        .catch((error) => {
          if(error.response.status === 404){
              this.setState({
                  notFound: true
              })
          }
        })
        .then( ()  =>{
        });
  }

    render(){
      var faq_question = 'this is my question';
      var faq_answer = 'goddamn answer is brilliant';


  





        return(
          <div>
          {this.state.faqs.map(faq =>{
            return <div><div className="Faq__Item Faq__Item--lastOfSection" aria-expanded="false">
            <span className="Faq__Icon"><svg className="Icon Icon--select-arrow-right" role="presentation" viewBox="0 0 11 18">
                <path d="M1.5 1.5l8 7.5-8 7.5" strokeWidth={2} stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square" />
              </svg></span>
            <div className="Faq__ItemWrapper"><button className="Faq__Question">{faq.question}</button>
            <div className="faq-item">
              {faq.answer} 
            </div></div>
            </div></div>
          })}
          </div>
          
            
          

        )
    }
}





export default Faqs;







