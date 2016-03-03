'use strict';

import React         from 'react/addons';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';
import PasswordInput from '../components/Pwordinput';

var SearchPage = React.createClass({

  propTypes: {
    currentUser: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <DocumentTitle title="Search">
        <section className="search-page">

          <div>
       
            <PasswordInput/>

          </div>

          <div>
            <Link to="Home">Back to Home</Link>
          </div>

        </section>
      </DocumentTitle>
    );
  }

});

export default SearchPage;