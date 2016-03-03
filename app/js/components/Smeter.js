import React         from 'react/addons';
import DocumentTitle from 'react-document-title';
import { Grid, Row, Col, Panel, ProgressBar } from 'react-bootstrap';

import PrinciplesList from '../components/PrinciplesList';
import PrinciplesProgress from '../components/PrinProgress';


class StrengthMeter extends React.Component { 
	
  
   render() {
   	let { principles } = this.props;
		return (
			<Panel>
				<PrinciplesProgress {...this.props} />
				<h5>A good password is:</h5>
					<PrinciplesList {...this.props} />
				</Panel>		
			);
		} 
}

export default StrengthMeter;