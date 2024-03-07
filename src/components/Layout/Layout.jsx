import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import {
	Container,
	HeaderStyled,
	NavStyled,
	StyledNavLink,
} from "./Layout.styled";
import { Loader } from "../../components";
import { Logo } from "../icons/Logo";

const Layout = () => {
	return (
		<div>
			<HeaderStyled>
				<Logo />
				<NavStyled>
					<StyledNavLink to="/">Home</StyledNavLink>
					<StyledNavLink to="/catalog">Catalog</StyledNavLink>
					<StyledNavLink to="/favorites">Favorites</StyledNavLink>
				</NavStyled>
			</HeaderStyled>

			<main>
				<Suspense fallback={<Loader />}>
					<Container>
						<Outlet />
					</Container>
				</Suspense>
			</main>
		</div>
	);
};

export default Layout;
