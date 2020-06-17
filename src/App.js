import React from 'react';

//Css
import './css/styles.css'

//Components
import Header from './components/Header'
import Main from './components/Main'

function App() {
	return (
		<hgroup>
			<Header nameDev="GitHub" />
			<Main />
		</hgroup>
	);
}

export default App;
