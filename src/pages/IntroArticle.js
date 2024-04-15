import React, { Component } from 'react';
import './IntroArticle.css';

class IntroArticle extends Component {
  render() {
    return (
      <article className='IntroArticle'>
        <p>About this page</p>
        <ul>
          <li>HTML</li>
          <li>ReactJS</li>
          <li>Firebase hosting</li>
          <li>Firebase realtime database (coming soon)</li>
        </ul>
      </article>
    );
  }
}

export default IntroArticle;
