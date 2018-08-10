import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const FancyButton = styled.div`
	background-color: blue;
	border-radius: 5px;
	padding: 10px;
	width: 100px;
	color: white;
	text-align: center;
`

const App = () => <div>
	<FancyButton>Hello World</FancyButton>
</div>

ReactDOM.render(<App />, document.getElementById('app'));
