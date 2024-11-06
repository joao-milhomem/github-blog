import headerCover from '../../assets/headerCover.svg'
import { HeaderComponent } from './styled'
export const Header = () => {
	return (
		<HeaderComponent>
			<img src={headerCover} alt="" />
		</HeaderComponent>
	)
}
