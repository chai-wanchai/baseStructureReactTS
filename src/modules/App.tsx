import React from 'react';
import logo from '../asset/logo.svg';
import '../style/App.css';

const App: React.FC = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
					วันชัย หนูพินิช
        </p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
				</a>
			</header>
		</div>
	);
}

export default App;
