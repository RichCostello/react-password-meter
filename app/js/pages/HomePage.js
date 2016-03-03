'use strict';

import React         from 'react/addons';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';
import PasswordInput from '../components/Pwordinput';

var HomePage = React.createClass({

  propTypes: {
    currentUser: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <DocumentTitle title="Home">
        <section className="home-page">

          <div>
            Home
          </div>

          <div>
           <PasswordInput/>
          </div>

        </section>
      </DocumentTitle>
    );
  }

});

export default HomePage;