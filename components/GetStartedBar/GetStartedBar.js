import React from 'react'; 


const GetStartedBar = () => {
    return (
        <div className="getaquote">
  <section className="SectionHeader SectionHeader--center"><center>
      <div className="Container">
        <h3 className="Section__SubHeading Heading u-h6">&nbsp;</h3>
        <h2 className="Section__Heading Heading u-h1">Let's Get Started</h2>
        <div>
          <p>With over 600 verified stylists, we've got you covered.
          </p>
          <p><button  className="Button Button--primary" onClick={() => {window.scrollTo({
  top: 0,
  left: 100,
  behavior: 'smooth'
})}}>Check For Artists</button>
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