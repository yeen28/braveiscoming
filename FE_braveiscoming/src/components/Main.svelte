<script lang="ts">
	import MainContent from './common/mainComponent/MainContent.svelte';
	import MainTop from './common/mainComponent/MainTop.svelte';
</script>

<div id="wrap">
	<div id="container">
		<div id="contents">
			<MainTop />
			<div class="deco-container">
				<div
					class="swiper band-banner swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
				>
					<div
						class="swiper-wrapper"
						id="swiper-wrapper-bef482ca5d1f415b"
						aria-live="off"
						style="transform: translate3d(-1632px, 0px, 0px); transition-duration: 30000ms;"
					>
						<div
							class="swiper-slide swiper-slide-duplicate"
							data-swiper-slide-index="0"
							role="group"
							aria-label="1 / 2"
							style="margin-right: 20px;"
						>
							<figure>
								<img
									src="https://eggiscoming.com/SkinImg/main/pc_img_main_band_banner.png"
									alt=""
								/>
							</figure>
						</div>
						<div
							class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
							data-swiper-slide-index="1"
							role="group"
							aria-label="2 / 2"
							style="margin-right: 20px;"
						>
							<figure>
								<img
									src="https://eggiscoming.com/SkinImg/main/pc_img_main_band_banner.png"
									alt=""
								/>
							</figure>
						</div>
						<!-- Slides -->
						<div
							class="swiper-slide swiper-slide-duplicate-active"
							data-swiper-slide-index="0"
							role="group"
							aria-label="1 / 2"
							style="margin-right: 20px;"
						>
							<figure>
								<img
									src="https://eggiscoming.com/SkinImg/main/pc_img_main_band_banner.png"
									alt=""
								/>
							</figure>
						</div>
						<div
							class="swiper-slide swiper-slide-prev swiper-slide-duplicate-next"
							data-swiper-slide-index="1"
							role="group"
							aria-label="2 / 2"
							style="margin-right: 20px;"
						>
							<figure>
								<img
									src="https://eggiscoming.com/SkinImg/main/pc_img_main_band_banner.png"
									alt=""
								/>
							</figure>
						</div>
						<div
							class="swiper-slide swiper-slide-duplicate swiper-slide-active"
							data-swiper-slide-index="0"
							role="group"
							aria-label="1 / 2"
							style="margin-right: 20px;"
						>
							<figure>
								<img
									src="https://eggiscoming.com/SkinImg/main/pc_img_main_band_banner.png"
									alt=""
								/>
							</figure>
						</div>
						<div
							class="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"
							data-swiper-slide-index="1"
							role="group"
							aria-label="2 / 2"
							style="margin-right: 20px;"
						>
							<figure>
								<img
									src="https://eggiscoming.com/SkinImg/main/pc_img_main_band_banner.png"
									alt=""
								/>
							</figure>
						</div>
					</div>
					<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
				</div>

				<MainContent />
			</div>

			<!-- 베너메니져 팝업 -->
			<div df-banner-code="popup--root" class="df-bannermanager df-bannermanager-popup--root"></div>

			<script src="https://code.jquery.com/jquery-latest.min.js"></script>
		</div>
		<hr class="layout" />
	</div>
	<hr class="layout" />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	#wrap {
		position: relative;
		width: 100%;
		margin: 0 auto;
	}

	#container {
		width: 100%;
		margin: 0 auto;
	}

	#contents {
		min-width: 89.5833vw;
		margin: 0 auto 6.25vw;
	}

	.deco-container {
		overflow: hidden;
	}

	.swiper.band-banner {
		height: 3.2292vw;
		box-sizing: border-box;
	}

	.band-banner {
		padding: 0.9375vw 0 0.9896vw;
		border-top: 0.0521vw solid #eee;
		border-bottom: 0.0521vw solid #eee;
	}

	.easter_egg__popup .easter_egg__popup__content img {
		max-width: 100%;
		width: auto;
	}
	.easter_egg__popup .easter_egg__popup__content {
		margin: 0;
		padding: 0;
		height: 100vh;
		width: 100vw;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		overflow: hidden;
	}
	/* 좌측 상단 텍스트 */
	.top-left-text {
		position: fixed;
		top: 2.625vw;
		left: 4.625vw;
		font-size: 1.3542vw;
		font-weight: bold;
		color: #000;
		padding: 5px 10px;
		border-radius: 5px;
		z-index: 1000; /* 항상 위에 표시 */
	}

	.swiper-wrapper {
		position: relative;
		width: 100%;
		height: 100%;
		z-index: 1;
		display: flex;
		transition-property: transform;
		box-sizing: content-box;
	}

	.deco-flex {
		display: flex;
		position: relative;
		margin-bottom: 6.25vw;
	}

	.deco-img__wrapper {
		position: relative;
		width: 100%;
		max-width: 51.875vw;
		background-color: #f5f5ef;
		overflow: hidden;
		z-index: 1;
	}

	.deco-img__container {
		position: relative;
	}

	.band-banner {
		padding: 0.9375vw 0 0.9896vw;
		border-top: 0.0521vw solid #eee;
		border-bottom: 0.0521vw solid #eee;
	}

	.swiper-slide {
		flex-shrink: 0;
		width: 100%;
		height: 100%;
		position: relative;
		transition-property: transform;
	}
</style>
