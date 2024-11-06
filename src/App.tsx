import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './global/themes/default'
import GlobalStyles from './global/styles'

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<h1>Hello word</h1>
		</ThemeProvider>
	)
}
