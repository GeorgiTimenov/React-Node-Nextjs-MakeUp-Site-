import React from 'react'; 


const GetStartedBar = () => {
    return (
        <div className="getaquote">
  <section className="SectionHeader SectionHeader--center"><center>
      <div className="Container">
        <h3 className="Section__SubHeading Heading u-h6">&nbsp;</h3>
        <h2 className="Section__Heading Heading u-h1">Free Leads For Makeup Artists & Hair Stylists</h2>
        <div>
          
          <p><button  className="Button Button--primary" onClick={
            () => {window.location.href = "https://au.flayr.io/pages/jobs-for-makeup-artists"}}>Learn More</button>
          </p>
          <p>&nbsp;</p>
        </div>
      </div>
    </center>
  </section>
</div>

    )
}

export default GetStartedBar;