import React, { Component } from 'react';

class Preface extends Component {
  render() {
    return (
      <section>
        <p className="Preface">
          This is the future site of <a href="https://www.cancompute.tech/">https://www.cancompute.tech/</a>! Currently my website was built on a proprietary engine. I want to migrate it to ReactJS.</p>
        <p>
          To view the code for this site, see <a href="https://github.com/bean5/react-portfolio">github.com/bean5/react-portfolio</a>.
          <br />
          <br />
          Live version is at <a href="https://portfolio-bean5.web.app/">portfolio-bean5.web.app/</a>
        </p>
      </section >
    );
  }
}

export default Preface;