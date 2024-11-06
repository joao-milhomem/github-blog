import "styled-components"
import type { defaultTheme } from "../global/themes/default"

type ThemeTypes = typeof defaultTheme

declare module "styled-components" {
	export interface DefaultTheme extends ThemeTypes {}
}
