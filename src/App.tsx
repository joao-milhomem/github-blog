import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './global/themes/default'
import GlobalStyles from './global/styles'

import { Home } from './screens/Home'
import { Post } from './screens/Post'

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<Home />
		</ThemeProvider>
	)
}
