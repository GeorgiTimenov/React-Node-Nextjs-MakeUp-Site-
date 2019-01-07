import React from 'react'; 
import axios from 'axios';
import Script from 'react-load-script';
import Geocode from "react-geocode";
import styled from 'styled-components';
import {SingleDatePicker} from 'react-dates';
import Router from 'next/router'
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import MomentLocaleUtils, {
    formatDate,
    parseDate,
  } from 'react-day-picker/moment';

Geocode.setApiKey("AIzaSyBvDA0hOnuN-KijkcT9IFYapOH9042QSso");

const Wrapper = styled.div`
  .SingleDatePickerInput {
    background-color: #EFEFEF

  }
  .DateInput_input{
    font-size: 13px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #EFEFEF
  }
  .DateInput_input_1{
    font-size: 13px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #EFEFEF;
    
  }
`;


class QuoteForm extends React.Component{
    constructor(){
        super();
        this.eventAddress = React.createRef();
        this.state = {
            isSuburbQuote: false,
            page1fields: ['autofill','state','postcode','suburb','eventDate','time','event_desc'],
            page2fields: ['numOfPeople'],
            page3fields: ['firstName','email','mobile'],
            width: 0,
            height: 0,
            autofill: '',
            serviceMap: new Map(),
            isLoaded: false,
            page: 1,
            state: '',
            suburb: '',
            firstName: '',
            email: '',
            mobile: '',
            eventDate: '',
            time: '',
            postcode: '',
            formattedTime: '',
            event_desc: '',
            lookDesc: '',
            numOfPeople: 0,
            person1serviceField: '',
            person2serviceField: '',
            person3serviceField: '',
            person4serviceField: '',
            person5serviceField: '',
            person6serviceField: '',
            person7serviceField: '',
            person8serviceField: '',
            person1: '',
            person1service: '',  
            person2: '',
            person2service: '',
            person3: '',
            person3service: '',
            person4: '',
            person4service: '',
            person5: '',
            person5service: '',
            person6: '',
            person6service: '',
            person7: '',
            person7service: '',      
            person8: '',
            person8service: '',
            hasErrors: false, 
            errors: {
                autofill: false,
                autofillMsg: 'please enter the event location',
                state: false,
                stateMsg: 'select your state',
                firstName: false,
                firstNameMsg: 'enter a valid first name',
                email: false,
                emailMsg: 'enter a valid email',
                mobile: false,
                mobileMsg: 'enter a valid mobile (04xxxxxxxx)',
                name: false, 
                nameMsg: 'enter a valid first name',
                postcode: false,
                postcodeMsg: 'enter a valid postcode',
                suburb: false, 
                suburbMsg: 'enter the suburb',
                eventDate: false,
                eventDateMsg: 'select event date',
                time: false,
                timeMsg: 'select time',
                event_desc: false, 
                event_descMsg: 'enter an event description',
                numOfPeople: 0,
                numOfPeopleMsg: 'select number of people',
                person1: false,
                personMsg: 'select person',
                person1service: false,  
                personServiceMsg: 'choose the service',
                person2: false,
                person2service: false,
                person3: false,
                person3service: false,
                person4: false,
                person4service: false,
                person5: false,
                person5service: false,
                person6: false,
                person6service: false,
                person7: false,
                person7service: false,      
                person8: false,
                person8service: false,    
            }
            
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        if(this.props.isSuburbQuote){
            this.setState({
                isSuburbQuote: true
            })
        }

      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

    
    handleEnterSubmit = (e)=> {
        if(e.key === 'Enter'){
            this.submitClickHandler(e);
       }

    }

    inputIsValid = (e) => {
       return true;
    }

    
    onFieldChange = (e) => {

        this.setState({
            [e.target.name] : e.target.value
        })
        this.validateInput(e);
    }

    onSelectChange = (e) => {
        e.target.querySelector('#placeholder-select').disabled = true;
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onServiceChange = (e) => {
        e.target.querySelector('#placeholder-select').disabled = true;
        this.setState({
            [e.target.name] : e.target.value
        })

    }

    onTextAreaChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onPersonChange = (e,serviceMap) => {
        e.target.querySelector('#placeholder-select').disabled = true;
        this.setState({
            [e.target.name] : e.target.value
        })

        let serviceOptions = serviceMap.get(e.target.value);

       // let selector = e.target.parentNode.parentNode.querySelector("#"+e.target.id+"service");        

        let serviceInput =`<option id="placeholder-select" >--select--</option>`;
        for(let service of serviceOptions){
            let val = service.value;
            let display = service.display;
            serviceInput += `<option value=${val}>${display}</option>`
        }

        this.setState({
            [e.target.name] : e.target.value,
            [`${e.target.name}serviceField`]: serviceInput
        })

    }

    handleScriptLoad = () =>{ 
        // Declare Options For Autocomplete 
        var options = {componentRestrictions: {country: "au"} }; 
        
        // Initialize Google Autocomplete 
        /*global google*/
        this.autocomplete = new google.maps.places.Autocomplete(
                              document.getElementById('quoteAutofill'),
                              options ); 
        // Fire Event when a suggested name is selected
        this.autocomplete.addListener('place_changed',
                                      this.handlePlaceSelect); 
      }

    handlePlaceSelect = () => {

    // Extract City From Address Object

      let addressObject = this.autocomplete.getPlace();
      
      const address = addressObject.address_components;
      let postCode = ''; 
      let state = '';
      let suburb = '';
      
      for(let x of address){
          if(x.types.includes("locality")){
              suburb =  x.short_name
          }
          if(x.types.includes("administrative_area_level_1")){
              state = x.short_name
          }
          if(x.types.includes("postal_code")){
              postCode =  x.short_name
          }
      }
      this.setState({
          autofill: addressObject.formatted_address,
          suburb: suburb,
          state: state,
          postcode: postCode
      }, () => {
          this.fieldsAreValid(['state','suburb','postcode']);
      })

    
    }



    onDateChange = (date) =>{
        let s = date;
        let formattedDate = date.format("YYYY-MM-DD");
       
        this.setState({
            eventDate: formattedDate,
            date:date
        })

    }

    
    onTimeChange = (e) => {
        let time = e.target.value+""
        this.setState({
            time: e.target.value,
            formattedTime: time
        })
    }


    onNumPeopleChange = (e) => {

        let num = e.target.value;

        let page2fields = ['numOfPeople'];
        for(let i = 1; i <= num; i++){
            page2fields.push(`person${i}`);
            page2fields.push(`person${i}service`);
        }
        this.setState({
            page2fields: page2fields,
            numOfPeople: num
        },()=>{
            this.clearPage2Errors();

        })

    }
    clearPage2Errors = () => {
        Object.keys(this.state.errors).map((key, index) => {
            if(!this.state.page2fields.includes(key.toString()) && !key.toString().includes('Msg')){
                this.state.errors[key] = false;
            }
           
         });
    }

    nextClickHandler = (e) => {
        this.clearAllErrors();
        e.preventDefault();
        window.scrollTo(0, 0);
        let fields;
        if(this.state.page === 1){
            fields = this.state.page1fields;
        }else if(this.state.page === 2){
            fields = this.state.page2fields;

        }
        
        if(!this.fieldsAreValid(fields)){
            let currPage = this.state.page + 1;
            if(currPage < 4){
                this.setState({
                    page: currPage
                })
            }
        }
       
        
    }

    handleKeyPress = (e) => {
       if(e.key === 'Enter'){
            this.nextClickHandler(e);
       }
    }
    
    clearAllErrors = () => {
        Object.keys(this.state.errors).map((key, index) => {
                if(!key.toString().includes('Msg')){
                    this.state.errors[key] = false;
                }
            });
    }


    prevClickHandler = (e) => {
    
            e.preventDefault();
            let currPage = this.state.page - 1;
            if(currPage > 0){
                this.setState({
                    page: currPage
                })
            }
        
    }

    submitClickHandler = (e) => {
        e.preventDefault();
        let fields = this.state.page3fields;
        if(!this.fieldsAreValid(fields)){

            this.props.hideForm();
        let array = [];
        for(let i = 0; i < this.state.numOfPeople; i++){
            
            array.push([
                this.state["person"+(i+1)], this.state["person"+(i+1)+"service"]
            ])

        }

        let quoteInfo = {
            name: this.state.firstName,
            email: this.state.email,
            mobile: this.state.mobile,
            state: this.state.state,
            suburb: this.state.suburb,
            postcode: this.state.postcode,
            event_date: this.state.eventDate,
            event_time: this.state.time,
            event_desc: this.state.event_desc,
            num_of_people: parseInt(this.state.numOfPeople),
            person_service_list: array,
            look_desc: this.state.lookDesc
        }
        
        axios.post(`https://express-server-ap-southeast-2.flayr.io/quotes`, quoteInfo)
          .then(res => {


          this.setState({
              isLoaded: true
          })
          //this.props.loadedQuote();
          Router.push(`${this.props.submitRoute}`+ res.data.body.shopify_id);
        })
        .catch(err => {
            console.log(err)
        })

        }
        
    }

    //pass in the state key and stringToTest
    passedRegex = (fieldKey,stringToTest) => {
        let passed = false;
        let regexMap = new Map(); 
        //key, regex
        regexMap.set('autofill', /(?!^ +$)^.+$/);
        regexMap.set('postcode', /^\d{4}$/);
        regexMap.set('state', /NSW|VIC|QLD|TAS|ACT|NT|WA|SA/);
        regexMap.set('suburb', /^[a-zA-Z ]+$/);
        regexMap.set('eventDate', /^\d{4}-\d{2}-\d{2}$/);
        regexMap.set('time', /^([01][0-9]|2[0-3]):([0-5][0-9])$/);
        regexMap.set('event_desc', /(?!^ +$)^.+$/);
        regexMap.set('numOfPeople',/^[1-9]$/);

        for(let i = 1; i <= this.state.numOfPeople; i++){
            regexMap.set(`person${i}`,/(?!^ +$)^.+$/);
            regexMap.set(`person${i}service`,/(?!^ +$)^.+$/);

        }

        regexMap.set('firstName',/^[a-zA-Z ]+$/);
        regexMap.set('email', 	
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        regexMap.set('mobile', /^04[0-9]{8}/);



        let regexToTest;
        if(regexMap.get(fieldKey)){
           regexToTest = regexMap.get(fieldKey);
        }else{
            passed = false
        }
        
        if(regexToTest){
            passed = regexToTest.test(stringToTest);
        }

        

        return passed;

    }

    validateDate = ({focused}) => {
        this.setState({
            focused
        })


        let errorsObj = this.state.errors;
        let val = this.state.eventDate;

        if(!focused){
            if(!this.passedRegex("eventDate",val)){
                errorsObj["evetDate"] = true;
                this.setState({errors: errorsObj})
            }else{
                errorsObj["eventDate"] = false;
                this.setState({errors: errorsObj})
            }
        }
    }
    validateInput = (e) => {
        let errorsObj = this.state.errors;
        let val = this.state[e.target.name]; 

        if(e.target.name !== undefined){
            if(!this.passedRegex(e.target.name,val)){
                errorsObj[e.target.name] = true;
                this.setState({errors: errorsObj});
            
           
          
        }else{
                errorsObj[e.target.name] = false;
                this.setState({errors: errorsObj});
        }
        }
    }




   
    //pass in fields
    fieldsAreValid = (fields) => {
        let errorsObj = this.state.errors

        
        for(let f of fields){
            if(!this.passedRegex(f,this.state[f])){
                errorsObj[f] = true;
                this.setState({errors: errorsObj})
            }else{
                errorsObj[f] = false; 
                this.setState({errors: errorsObj})
                this.setState({errors: errorsObj})
            }
        }

        let hasErrors = false;
        Object.keys(this.state.errors).map((key, index) => {
            if(this.state.errors[key] === true && key){
                hasErrors = true;
            }
           
         });
         return hasErrors

    }

    

    render() {

        

        let datePlaceholder= this.state.errors.eventDate ? this.state.errors.eventDateMsg : "event date"

        if(this.state.eventDate){
            datePlaceholder = formatDate(this.state.eventDate, 'LL', 'en') 
        }
       

        const today = moment().format('YYYY-MM-DD')
        this.state.serviceMap.set("nonbridal", [{value: "_makeup_and_hair_up",display: "makeup & hair up"},{value: "_makeup_and_hair_down",display: "makeup & hair down"} ,{value: "_makeup_only",display: "makeup only"}, {value: "_hair_down",display: "hair down"} ,{value: "_hair_up",display: "hair up"}]);
    this.state.serviceMap.set("bride", [{value: "_makeup_and_hair",display: "makeup & hair"},{value: "_makeup_only" ,display: "makeup only"},{value: "_hair_only" ,display: "hair only"}]);
    this.state.serviceMap.set("bridesmaid", [{value: "_makeup_and_hair",display: "makeup & hair"},{value: "_makeup_only" ,display: "makeup only"},{value: "_hair_only" ,display: "hair only"}]);
    this.state.serviceMap.set("mother", [{value: "_makeup_and_hair",display: "makeup & hair"},{value: "_makeup_only" ,display: "makeup only"},{value: "_hair_only" ,display: "hair only"}]);
    this.state.serviceMap.set("flowergirl", [{value: "_makeup_and_hair", display: "makeup & hair"}]);

        let formOptions = [];

        for(let i = 1; i <= this.state.numOfPeople; i++){
            let for_ = "quotePerson"+i;
            let name = "person"+i;
            let id = "quotePerson"+i;
            let serviceId = "service"+id;



            
            
            let infoBoxvisible = "info-box Form__Item"; 
            let infoBoxhidden = "info-box info-box-hidden Form__Item";
            let subOptionvisible = "sub-option Form__Item info-box-hidden"
            let subOptionhidden = "sub-option Form__Item"
            formOptions.push(
                
                <div>

                <div className="Form__Item" >
                        <select className={!this.state.errors[`${name}`] ? "Form__Input" : "Form__Input form-field-error"}  
                        onChange={(e) => this.onPersonChange(e,this.state.serviceMap)}
                        onBlur={(e) => this.validateInput(e)}
                        
                            value={this.state["person"+i]} 
                            type="select" 
                            name={name} 
                            id={id}
                            
                            >
                            <option id="placeholder-select" >--select--</option>
                            <option>nonbridal</option>
                            <option>bride</option>
                            <option>bridesmaid</option>
                            <option>mother</option>
                            <option>flowergirl</option>
                        </select>
                       
                        <div id="infoBox" className={this.state[`person${i}`] === 'nonbridal' ? infoBoxvisible : infoBoxhidden}>
                            <p>
                                <strong>Hair down style</strong> is hair straightening, blow wave, or curls with no pinning required.
                                <br />
                                <strong>Hair up style </strong> is any other hairstyle.
                            </p>
                        </div>
                        <span className="error-span">{this.state.errors[`${name}`] ? this.state.errors.personMsg: ""}</span>
                        <label className="Form__FloatingLabel" for={for_}>person {i}</label>
                    </div>
             

                <div className={this.state[`person${i}`] ? subOptionhidden: subOptionvisible } >
                   
                   <select dangerouslySetInnerHTML={{__html: this.state[`person${i}serviceField`]}} 
                   className={!this.state.errors[`${name}service`] ? "Form__Input" : "Form__Input form-field-error"} 
                   onChange={(e) => this.onServiceChange(e)} 
                   onBlur={(e) => this.validateInput(e)}
                       value={this.state["person"+i+"service"]} 
                       type="select" 
                       name={name+"service"}
                       ref={name+"service"}
                       id={id+"service"}
                       >

                   </select> 
                   <span className="error-span">{this.state.errors[`${name}service`] ? this.state.errors.personServiceMsg: ""}</span>

                   
                   <label className="Form__FloatingLabel" for={id+"service"}>person {i} service</label>   
               </div>

                </div>



            )
        }

        let pageMap = new Map();


        let dateClassString = "Form__Input date-input";
        if(this.state.errors.eventDate){
            dateClassString = "Form__Input form-field-error date-input";
        }
        let page1 = (
            <div>
                <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBvDA0hOnuN-KijkcT9IFYapOH9042QSso&libraries=places"          
                onLoad={this.handleScriptLoad}
                />   
                <span class="ProductItem__Title Heading" style={{marginBottom: '10px'}}>Event Date</span>
                        <div className="Form__Item" >
                            
                            <Wrapper className="form-field-error Form__Item">
                                    <SingleDatePicker
                                    hideKeyboardShortcutsPanel={true}
                                    date={this.state.date} // momentPropTypes.momentObj or null
                                    onDateChange={date => this.onDateChange(date)} // PropTypes.func.isRequired
                                    focused={this.state.focused} // PropTypes.bool
                                    onFocusChange={(focused) => this.validateDate(focused)} // PropTypes.func.isRequired
                                    id="your_unique_id" // PropTypes.string.isRequired,
                                    numberOfMonths={1}
                                    withPortal={this.state.width < 600 ? true: false}
                                    displayFormat="ddd MMM D YYYY"
                                    showClearDate block
                                    showClearDate={false}
                                    placeholder="date"
                                    readOnly
                                    />

                            </Wrapper>
                            <span className="error-span">{this.state.errors.eventDate ? this.state.errors.eventDateMsg: ""}</span>

                             

                             </div>  
                           
                <span class="ProductItem__Title Heading" style={{marginBottom: '10px'}}>Time To Be Ready By</span>

                    <div className="Form__Item">
                    <select name="time" 
                    id="quoteTime" 
                    aria-label="start time" 
                    className={!this.state.errors.time ? "Form__Input" : "Form__Input form-field-error"}
                     value={this.state.time} 
                     type="select" 
                     onBlur={(e) => this.validateInput(e)}
                     onChange={(e) => this.onSelectChange(e)} required
                     style={{  height: '50px'
                     }}
                    >
                        <option id="placeholder-select" >--select--</option>
                        <option value="05:00">5 AM</option>
                        <option value="05:30">5:30 AM</option>
                        <option value="06:00">6 AM</option>
                        <option value="06:30">6:30 AM</option>
                        <option value="07:00">7 AM</option>
                        <option value="07:30">7:30 AM</option>
                        <option value="08:00">8 AM</option>
                        <option value="08:30">8:30 AM</option>
                        <option value="09:00">9 AM</option>
                        <option value="09:30">9:30 AM</option>
                        <option value="10:00">10 AM</option>
                        <option value="10:30">10:30 AM</option>
                        <option value="11:00">11 AM</option>
                        <option value="11:30">11:30 AM</option>
                        <option value="12:00">Midday</option>
                        <option value="12:30">12:30 PM</option>
                        <option value="13:00">1 PM</option>
                        <option value="13:30">1:30 PM</option>
                        <option value="14:00">2 PM</option>
                        <option value="14:30">2:30 PM</option>
                        <option value="15:00">3 PM</option>
                        <option value="15:30">3:30 PM</option>
                        <option value="16:00">4 PM</option>
                        <option value="16:30">4:30 PM</option>
                        <option value="17:00">5 PM</option>
                        <option value="17:30">5:30 PM</option>
                        <option value="18:00">6 PM</option>
                        <option value="18:30">6:30 PM</option>
                        <option value="19:00">7 PM</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8 PM</option>
                        <option value="20:30">8:30 PM</option>
                        <option value="21:00">9 PM</option>
                        <option value="21:30">9:30 PM</option>
                        <option value="22:00">10 PM</option>
                        <option value="22:30">10:30 PM</option>
                        <option value="23:00">11 PM</option>
                        <option value="23:30">11:30 PM</option>
                        <option value="00:00">Midnight</option>
                        <option value="01:00">1 AM</option>
                        <option value="01:30">1:30 AM</option>
                        <option value="02:00">2 AM</option>
                        <option value="02:30">2:30 AM</option>
                        <option value="03:00">3 AM</option>
                        <option value="03:30">3:30 AM</option>
                        <option value="04:00">4 AM</option>
                        <option value="04:30">4:30 AM</option>
                    </select>
                    <span className="error-span">{this.state.errors.time ? this.state.errors.timeMsg: ""}</span>

                </div>

                    {/* <button className="button-form Button Button--primary"  style={{zIndex: '0'}} 
                    onClick={this.nextClickHandler}>Next</button> */}
                    <button className="button-form Button Button--primary"  style={{zIndex: '0'}} 
                    onClick={this.extFormHandler}>Next</button>
            </div>
        )
        pageMap.set(1, page1);

        let page2 = (
            <div>
           
                <div className="Form__Item" >

                    <select className={!this.state.errors.numOfPeople ? "Form__Input" : "Form__Input form-field-error"} placeholder="Select State" 
                    onChange={(e) => this.onNumPeopleChange(e)} 
                    onBlur={(e) => this.validateInput(e)}
                        value={this.state.numOfPeople} 
                        type="select" 
                        name="numOfPeople" 
                        id="quoteNumOfPeople"
                        required
                        >
                        <option id="placeholder-select" >--select--</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>

                    </select>    
                    <span className="error-span">{this.state.errors.numOfPeople ? this.state.errors.numOfPeopleMsg: ""}</span>
                
                    <label className="Form__FloatingLabel" for="quoteNumOfPeople">number of people</label>
                           
                    </div>
                    {formOptions.map((option) =>
                        <div>{option}</div>
                        )}


                        <div className="button-form Button Button--secondary prev-div" onClick={this.prevClickHandler}>Prev</div>
                        <button className="button-form Button Button--primary"  onClick={this.nextClickHandler}>Next</button>

            </div>

        )
        pageMap.set(2, page2);

            
        let page3 = (
            <div>
                <div className="Form__Group">
                     <div className="Form__Item" >
                        <input className={!this.state.errors.firstName ? "Form__Input" : "Form__Input form-field-error"}  
                                onChange={(e) => this.onFieldChange(e)} 
                                onBlur={(e) => this.validateInput(e)}
                               value={this.state.firstName}
                               type="text" 
                               name="firstName" 
                               id="quoteFirstName"
                               placeholder="first name" />
                        <span className="error-span">{this.state.errors.firstName ? this.state.errors.firstNameMsg: ""}</span>

                        <label className="Form__FloatingLabel" >first name</label>

                            
                    </div>
                </div>

                <div className="Form__Group">
                    <div className="Form__Item" >

                        <input className={!this.state.errors.email ? "Form__Input" : "Form__Input form-field-error"}
                                onChange={(e) => this.onFieldChange(e)} 
                                onBlur={(e) => this.validateInput(e)}
                               value={this.state.email}
                               type="email" 
                               name="email" 
                               id="quoteEmail"
                               placeholder="email"
                               required/>
                        <span className="error-span">{this.state.errors.email? this.state.errors.emailMsg: ""}</span>

                        <label className="Form__FloatingLabel" for="quoteEmail">email</label>

                    </div>
                </div>
    
                <div className="Form__Group" onKeyPress={(e) => this.handleEnterSubmit(e)}>
                     <div className="Form__Item" >
                        <input className={!this.state.errors.mobile ? "Form__Input" : "Form__Input form-field-error"}
                               onChange={(e) => this.onFieldChange(e)}
                               onBlur={(e) => this.validateInput(e)}
                               value={this.state.mobile}
                               type="text" 
                               name="mobile" 
                               id="quoteMobile"
                               placeholder="mobile number" />
                        <span className="error-span">{this.state.errors.mobile ? this.state.errors.mobileMsg: ""}</span>

                        <label className="Form__FloatingLabel" for="quoteMobile">mobile number</label>

                    </div>       
                </div>
                    <div className="button-form Button Button--secondary prev-div" onClick={(e) => this.prevClickHandler(e)}>Prev</div>
                    <button type="submit" className="button-form Button Button--primary" onClick={(e) => this.submitClickHandler(e)} >Submit</button>

            </div>
        )
        pageMap.set(3, page3);
        
        return(
            <div>
                  <div className="form-container" >
                     {pageMap.get(this.state.page)}

                 </div>
                
            </div>
          
        )
    }

}

export default QuoteForm