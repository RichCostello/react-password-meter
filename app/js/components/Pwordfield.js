import React         from 'react/addons';
import DocumentTitle from 'react-document-title';
import { Grid, Row, Col, Panel, ProgressBar, Input } from 'react-bootstrap';



class PasswordField extends React.Component { 
	constructor(props) {
		super(props);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
	}

	handlePasswordChange(ev) {
		let { onPasswordChange } = this.props;
		onPasswordChange(ev.target.value);
	}

	satisfiedPercent() {
		let { principles, password } = this.props;

		let satisfiedCount = principles.map(p => p.predicate(password))
										.reduce((count, satisfied) =>
											count + (satisfied ? 1 : 0)
											, 0);
		let principlesCount = principles.length;

		return (satisfied / principlesCount) * 100.0;
	}

	inputColor() {
		let percentage = this.satisfiedPercent();

		return classNames({
			error: (percentage < 33.4),
			success: (percentage >= 66.7),
			warning: (percentage >= 33.4 && percentage < 66.7)
		});
	}

   render() {
   	 let { password } = this.props;

		return (
    <Input
    	type='password'
    	label='Password'
    	value={password}
    	onChange={this.handlePasswordChange}
    	hasFeedback
    	/>

      );
		} 
}

export default PasswordField;