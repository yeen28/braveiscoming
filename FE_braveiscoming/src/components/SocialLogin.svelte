<script lang="ts">
</script>

<div>
	<div class="member-sns-content">
		<p class="member-sns-content-title">SNS 간편 계정으로 로그인하기</p>
	</div>
	<ul class="snsArea">
		<li class="">
			<a href="#none" on:click={() => console.log('kakao 로그인')}>
				<img src="https://eggiscoming.com/SkinImg/icon/pc_ic_kakao.png" alt="카카오계정 로그인" />
			</a>
		</li>
		<li class="">
			<a href="#none" on:click={() => console.log('naver 로그인')}>
				<img src="https://eggiscoming.com/SkinImg/icon/pc_ic_naver.png" alt="네이버 로그인" />
			</a>
		</li>
		<li class="">
			<a href="#none" on:click={() => console.log('구글 로그인')}>
				<img src="https://eggiscoming.com/SkinImg/icon/pc_ic_google.png" alt="구글 로그인" />
			</a>
		</li>
	</ul>
</div>

<style>
	.member-sns-content {
		margin: 2.6042vw 0 1.3542vw;
	}

	.snsArea {
		display: flex;
		gap: 1.0417vw;
		justify-content: center;
	}

	.member-sns-content-title {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 0.8333vw;
		line-height: 1.2;
		text-align: center;
		color: #777;
	}

	.member-sns-content-title::before {
		content: '';
		display: block;
		width: 5.7292vw;
		height: 0.0521vw;
		margin-right: 0.9375vw;
		background-color: #ccc;
	}

	.member-sns-content-title::after {
		content: '';
		display: block;
		width: 5.7292vw;
		height: 0.0521vw;
		margin-left: 0.9375vw;
		background-color: #ccc;
	}

	.snsArea li {
		width: 2.2917vw;
	}
</style>
