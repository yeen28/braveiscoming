<script lang="ts">
</script>

<div class="search-container hide">
	<div class="search-close__wrapper">
		<button type="button" class="search-close"></button>
	</div>
	<div>
		<form id="searchBarForm" name="" action="/product/search.html" method="get" target="_self" enctype="multipart/form-data">
			<input id="banner_action" name="banner_action" value="" type="hidden" />
			<div class="xans-element- xans-layout xans-layout-searchheader">
				<fieldset>
					<legend>검색</legend>
					<input
						id="keyword"
						name="keyword"
						fw-filter=""
						fw-label="검색어"
						fw-msg=""
						class="inputTypeText"
						placeholder="찾고 싶은 상품을 검색해 주세요."
						on:mousedown={() => console.log('mosedown')}
						value=""
						type="text"
					/>
					<button class="icon search"></button>
					<ul class="autoDrop" id=""></ul>
				</fieldset>
			</div>
		</form>
	</div>
</div>
<div class="search-dimmed"></div>

<style>
	.hide {
		display: none;
	}

	:global(#header .search-container.active) {
		display: block;
	}

	:global(#header .search-container) {
		position: absolute;
		top: 3.6458vw;
		left: 0;
		width: 100%;
		background-color: #f8e950;
		z-index: 9;
		padding: 2.8646vw 5vw 6.25vw;
		display: none;
		box-sizing: border-box;
	}

	:global(#header .search-close__wrapper) {
		display: flex;
		justify-content: right;
		margin-bottom: 3.6458vw;
	}

	:global(#header .search-close__wrapper button.search-close) {
		width: 1.875vw;
		height: 1.875vw;
		background-image: url("data:image/svg+xml,%3Csvg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M56 5.64L50.36 0L28 22.36L5.64 0L0 5.64L22.36 28L0 50.36L5.64 56L28 33.64L50.36 56L56 50.36L33.64 28L56 5.64Z' fill='black'/%3E%3C/svg%3E%0A");
		background-size: cover;
	}

	.xans-layout-searchheader fieldset {
		position: relative;
		max-width: 50vw;
		width: 100%;
		margin: 0 auto;
	}

	legend {
		visibility: hidden;
		position: absolute;
		left: -520.7813vw;
		top: -520.7813vw;
		width: 0;
		height: 0;
		line-height: 0;
	}

	.xans-layout-searchheader #keyword {
		width: 100%;
		height: 3.3854vw;
		padding-right: 2.3438vw;
		border: 0;
		border-bottom: 0.1042vw solid #000;
		font-size: 1.875vw;
		font-weight: 500;
		color: #000;
		box-sizing: border-box;
		outline: none;
	}

	.icon {
		width: 23px;
		height: 23px;
		background-size: cover;
	}
</style>
