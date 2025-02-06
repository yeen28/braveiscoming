<script lang="ts">
	import Search from "./Search.svelte";

	const drawerOpen = () => {
		const elDrawer = document.querySelector('.multishop__drawer');
		elDrawer?.classList.add('open');
	};

	const toggleActive = () => {
		const elSearch = document.querySelector('.search-container');
		const elSearchDimmed = document.querySelector('.search-dimmed');

		elSearch?.classList.toggle('active');
		elSearch?.classList.toggle('hide');
		elSearchDimmed?.classList.toggle('active');
	};
</script>

<header>
	<div id="header">
		<div class="inner braveiscoming-header">
			<!-- TODO 아래로 스크롤 할 때 scroll class 추가 -->
			<button class="braveiscoming-header__left">
				<div class="braveiscoming-header__menu closing">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<p class="scroll">MENU</p>
			</button>
			<div class="braveiscoming-header__topArea">
				<a href="/">
					<figure class="braveiscoming-header__logo">
						<div>brave is coming</div>
					</figure>
				</a>

				<div class="braveiscoming-header__right">
					<!-- 해외몰 -->
					<div class="xans-element- xans-layout xans-layout-multishoplist multishop" on:click={drawerOpen}>
						<button type="button" class="multishop__btn icon globe">
							<div class="icon globe"></div>
						</button>
						<span class="multishop__drawer">
							<ul class="xans-element- xans-layout xans-layout-multishoplistitem multishop__list">
								<li class="selected multishop__item xans-record-">
									<a href="//braveiscoming.com/">kr</a>
								</li>
								<li class="multishop__item xans-record-">
									<a href="//global.braveiscoming.com/">en</a>
								</li>
							</ul>
						</span>
					</div>
					<a href="#" class="search-bar" on:click={toggleActive}>
						<figure>
							<button class="icon search"></button>
						</figure>
					</a>
					<a href="/myshop">
						<figure>
							<button class="icon profile"></button>
						</figure>
					</a>
				</div>
			</div>
		</div>
		<Search />
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	#header .braveiscoming-header.scroll {
		top: -4.1146vw;
		transition: top 0.2s ease-in-out;
	}

	#header .braveiscoming-header {
		align-content: center;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		background-color: #fff;
		width: 100%;
		height: 3.6458vw;
		transition:
			top 0.2s ease-in-out,
			background-color 0.15s linear;
		border-bottom: 0.0521vw solid #ccc;
	}

	#header .braveiscoming-header .braveiscoming-header__left {
		position: fixed;
		z-index: 2;
		height: 1.25vw;
		top: 1.1979vw;
		left: 5.2604vw;
		display: flex;
		align-items: center;
		gap: 0.7031vw;
		background-color: unset;
		font-size: 0.7292vw;
		font-weight: 500;
	}

	#header .braveiscoming-header .braveiscoming-header__menu {
		display: flex;
		height: 100%;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		transition-property: all;
	}

	#header .braveiscoming-header .braveiscoming-header__menu.closing span:nth-child(1) {
		animation: firstmenulista;
		animation-duration: 0.5s;
		animation-timing-function: ease-in-out;
		animation-fill-mode: forwards;
	}

	#header .braveiscoming-header .braveiscoming-header__menu.closing span:nth-child(2) {
		animation: middlemenulista;
		animation-duration: 0.2s;
		animation-timing-function: ease-in-out;
		animation-fill-mode: forwards;
	}

	#header .braveiscoming-header .braveiscoming-header__menu.closing span:nth-child(3) {
		animation: lastmenulista;
		animation-duration: 0.5s;
		animation-timing-function: ease-in-out;
		animation-fill-mode: forwards;
	}

	#header .braveiscoming-header .braveiscoming-header__menu span {
		height: 0.1vw;
	}

	#header .braveiscoming-header .braveiscoming-header__menu span {
		position: relative;
		width: 1.25vw;
		height: 0.1042vw;
		top: 0;
		transition-duration: 0.15s;
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		background-color: #000;
		border-radius: 0.1042vw;
	}

	#header .multishop__list {
		display: flex;
		flex-flow: column nowrap;
		gap: 1.0417vw;
	}

	#header .multishop__drawer:not(.open) {
		display: none;
	}

	#header .multishop__drawer::after {
		content: '';
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: calc(100% - 0.5vw);
		background: white;
		border: 0.1463vw solid #ccc;
		border-top: none;
		box-sizing: border-box;
		z-index: -1;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}

	#header .braveiscoming-header .braveiscoming-header__toparea {
		position: relative;
		display: flex;
		justify-content: center;
	}

	#header .braveiscoming-header .braveiscoming-header__toparea .braveiscoming-header__logo img {
		width: 100%;
		height: 3.6458vw;
		object-fit: contain;
	}

	#header .braveiscoming-header {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		background-color: #fff;
		width: 100%;
		height: 3.6458vw;
		transition:
			top 0.2s ease-in-out,
			background-color 0.15s linear;
		border-bottom: 0.0521vw solid #ccc;
	}

	#header .braveiscoming-header .braveiscoming-header__topArea {
		position: relative;
		display: flex;
		justify-content: center;
	}

	#header .braveiscoming-header .braveiscoming-header__topArea .braveiscoming-header__logo img {
		width: 100%;
		height: 3.6458vw;
		object-fit: contain;
	}

	#header .braveiscoming-header {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		background-color: #fff;
		width: 100%;
		height: 3.6458vw;
		transition:
			top 0.2s ease-in-out,
			background-color 0.15s linear;
		border-bottom: 0.0521vw solid #ccc;
	}

	#header .braveiscoming-header .braveiscoming-header__right {
		display: flex;
		position: absolute;
		top: 50%;
		right: 5.0521vw;
		gap: 1.3021vw;
		transform: translateY(-50%);
	}

	#header .multishop__btn {
		display: block;
		width: 1.5625vw;
		height: 1.5625vw;
		background: transparent;
	}

	#header .multishop__drawer {
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 1.7188vw;
		padding: 1.1979vw;
		padding-top: 1.9188vw;
	}

	#header .braveiscoming-header figure img {
		height: 1.5625vw;
	}

	.icon {
		width: 20px;
		height: 20px;
		background-size: cover;
		background-position: center;
	}
</style>
