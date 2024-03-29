import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;

	z-index: 1000;
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 5px 30px;
	margin-bottom: 16px;
	border-bottom: 1px solid black;
	margin: 0 auto;

	background: -webkit-linear-gradient(to bottom, #434343, #000000);
	background: linear-gradient(to bottom, #434343, #000000);
	box-shadow: 10px 10px 31px -3px rgba(0, 0, 0, 0.75);
	-webkit-box-shadow: 10px 10px 31px -3px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 10px 10px 31px -3px rgba(0, 0, 0, 0.75);

	@media screen and (max-width: 320px) {
		padding: 15px;
	}
`;

export const NavStyled = styled.nav`
	display: flex;
	margin-right: 80px;
	width: 100%;
	justify-content: center;
	gap: 30px;
	font-weight: 500;
	@media screen and (max-width: 480px) {
		gap: 0px;
	}
`;

export const StyledNavLink = styled(NavLink)`
	padding: 8px 16px;
	font-size: 26px;
	border-radius: 4px;
	text-decoration: none;
	color: #b6aaaa;
	font-weight: 500;

	&.active {
		color: white;
	}
	@media screen and (max-width: 480px) {
		max-width: 488px;
		font-size: 20px;
	}
`;
