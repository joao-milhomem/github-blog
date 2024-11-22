import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './global/themes/default'
import GlobalStyles from './global/styles'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</ThemeProvider>
	)
}
