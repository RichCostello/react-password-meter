import React         from 'react/addons';
import DocumentTitle from 'react-document-title';
import { Grid, Row, Col } from 'react-bootstrap';
import PasswordField from '../components/Pwordfield';
import StrengthMeter from '../components/Smeter';



class PasswordInput extends React.Component { 

    constructor(props) {
      super(props);
      this.state = { password: '' };

      this.changePassword = this.changePassword.bind(this);
    }

    changePassword(password) {
      this.setState({ password });
    }

   render() {
      let { goodPasswordPrinciples } = this.props;
      let { password } = this.state;

		return (
			<Grid>
        		<Row>
         		 <Col md={8}>
                 <PasswordField password={password} 
                                onPasswordChange={this.changePassword}
                                principles={goodPasswordPrinciples} />
         		 </Col>
          		 <Col md={4}>
                <StrengthMeter  password={password}
                                principles={goodPasswordPrinciples} />
                </Col>
        </Row>
</Grid>
			);
		} 
}

const SPECIAL_CHARS_REGEX = /[^A-Za-z0-9]/;
const DIGIT_REGEX = /[0-9]/;

 PasswordInput.defaultProps = {
  goodPasswordPrinciples: [
    {
      label: "6+ characters",
      predicate: password => password.length >= 6
    },
    {
      label: "with at least one digit",
      predicate: password => password.match(DIGIT_REGEX) !== null
    },
    {
      label: "with at least one special character",
      predicate: password => password.match(SPECIAL_CHARS_REGEX) !== null 
    }
  ]
};


export default PasswordInput;