/*

componentDidMount(){
        if(this.props.match.path.toString().includes("stylist-quote")){
          this.setState({
            isStylistQuote: true,
            stylistProviderId: this.props.match.params.provider_id

          }, ()=>{
            axios.get('http://localhost:3000/dev/stylist/'+this.props.match.params.provider_id)
            .then((response) => {
              this.setState({
                requestedSylistName: response.data.body.first_name
              })
            })
            .catch((error) => {
              console.log(error);

              this.setState({
                badRequest: true
              })
            })
            
          
          })
        }
        let _id = this.props.match.params.id;



        axios.get('http://localhost:3000/quote/'+_id)
        .then(quote=>{

          let _idToGetStylists;
          if(!this.props.location.fromQuotePage){
            let newQuote = quote.data;
            
            //deleting unecessary keys for a new quote.
            delete newQuote['_id'];
            delete newQuote['__v'];
            delete newQuote['shopify_id'];
            delete newQuote['bridal'];

              this.postNewQuote(newQuote,(err,res)=>{
                _idToGetStylists = res.data.body.shopify_id
                this.props.history.push({
                  pathname: `/quote/`+res.data.body.shopify_id,
                  
                })
                this.setState({
                  quote: res.data.body
                })

          axios.get('http://localhost:3000/stylists/'+_idToGetStylists)
          .then(response=>{
                  //if the page is not coming from the quotepage or refreshes submit new quote.
                  if(response && quote){
                    let arrayOfStylists = []
                    
                    if(response.data === 'no stylists available'){
                      this.setState({
                        notFound: true,
                        badRequest: false
                      })
                    }else{
                      
                    for(let d of response.data){
      
                      arrayOfStylists.push({
                          link: d.shopifyLink,
                          cost: d.stylistData.cost,
                          firstName: d.stylistData.stylist.first_name,
                          lastName: d.stylistData.stylist.last_name,
                          bigImage: d.stylistData.stylist.cover_image,
                          smallImage: d.stylistData.stylist.profile_image,
                          reviewScore: d.stylistData.stylist.review_score,
                          numOfReviews: d.stylistData.stylist.num_of_reviews,
                          provider_id: d.stylistData.stylist.provider_id
      
                      })
                  }

                  arrayOfStylists.sort(this.compare);
                  
                  if(this.state.isStylistQuote){
                    let uniqueStylistArray = []
                    arrayOfStylists.map((val,index)=>{
                      if(val.provider_id === this.state.stylistProviderId){
                       // 
                        uniqueStylistArray = [arrayOfStylists[index]];
                      }
                    })
                    
                    if(uniqueStylistArray.length < 1){
                      this.setState({
                        notFound: true
                      })
                    }else{
                      window.location.href = uniqueStylistArray[0].link;

                    }
                  }
                  else{
                    this.setState({
                      stylists: arrayOfStylists,
                      isLoaded: true,
                      quote: quote.data
                    })
      
                  }
      
                    }
      
                    
      
                  }
                  
          })
          .catch((error) => {
            console.log(error);
          
         if(error.response.status === 400){
                this.setState({
                    badRequest: true
                })
            }
            else if(error.response.status === 404){
                this.setState({
                    notFound: true
                })
            }
            else if(error.response.status === 502){
                this.setState({
                    badRequest: true
                })
            }
            else if(error){
              this.setState({
                badRequest: true
            })
            }
          })
              })
            }else{

          axios.get('http://localhost:3000/stylists/'+_id)
          .then(response=>{
                  //if the page is not coming from the quotepage or refreshes submit new quote.
                  if(response && quote){
                    let arrayOfStylists = []
                    
                    if(response.data === 'no stylists available'){
                      this.setState({
                        notFound: true,
                        badRequest: false
                      })
                    }else{
                      
                    for(let d of response.data){
      
                      arrayOfStylists.push({
                          link: d.shopifyLink,
                          cost: d.stylistData.cost,
                          firstName: d.stylistData.stylist.first_name,
                          lastName: d.stylistData.stylist.last_name,
                          bigImage: d.stylistData.stylist.cover_image,
                          smallImage: d.stylistData.stylist.profile_image,
                          reviewScore: d.stylistData.stylist.review_score,
                          numOfReviews: d.stylistData.stylist.num_of_reviews,
                          provider_id: d.stylistData.stylist.provider_id
      
                      })
                  }

                  arrayOfStylists.sort(this.compare);
                  
                  if(this.state.isStylistQuote){
                    let uniqueStylistArray = []
                    arrayOfStylists.map((val,index)=>{
                      if(val.provider_id === this.state.stylistProviderId){
                       // 
                        uniqueStylistArray = [arrayOfStylists[index]];
                      }
                    })
                    
                    if(uniqueStylistArray.length < 1){
                      this.setState({
                        notFound: true
                      })
                    }else{
                      window.location.href = uniqueStylistArray[0].link;

      
                    }
                  }
                  else{
                    this.setState({
                      stylists: arrayOfStylists,
                      isLoaded: true,
                      quote: quote.data
                    })
      
                  }
      
                    }
      
                    
      
                  } 
          })
          .catch((error) => {
            console.log(error);
          
          if(error.response.status === 400){
                this.setState({
                    badRequest: true
                })
            }
            else if(error.response.status === 404){
                this.setState({
                    notFound: true
                })
            }
            else if(error.response.status === 502){
                this.setState({
                    badRequest: true
                })
            } else if(error){
              this.setState({
                badRequest: true
            })
            }
          })
            }

        })
          .catch((error) => {
            console.log(error);
            if(error){
              this.setState({
                badRequest: true
            })
            }
          else if(error.response.status === 400){
                this.setState({
                    badRequest: true
                })
            }
            else if(error.response.status === 404){
                this.setState({
                    notFound: true
                })
            }
            else if(error.response.status === 502){
                this.setState({
                    badRequest: true
                })
            }
          })
*/