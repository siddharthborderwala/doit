import React from 'react';

const Header = () => (
	<div className="header">
		<header className="container">
			<h1 className="header__title">
				<span>
					<svg className="header__title--check">
						<use xlinkHref="./assets/solid.svg#check-circle"></use>
					</svg>
				</span>
				Task Keeper
			</h1>
			<h2 className="header__subtitle">Manage Your Tasks Efficiently</h2>
		</header>
	</div>
);

export default Header;
