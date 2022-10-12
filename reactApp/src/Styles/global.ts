import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
	}

	html {
		background-color: #E5E5E5;
		button:hover{
			border: 3px solid blue;
		}
		button {
			cursor: pointer;
			border: none;
		}
	}
`;

export { GlobalStyle };