import React from 'react';
import '../styles.css';

import Navbar from '../../Components/Navbar';

const NoPage = () => (
	<div>
		<Navbar />
		<img src='https://i.imgur.com/aDwTQV9.png' className="pageError" alt='404 Error'/>'
	</div>
)

export default NoPage;