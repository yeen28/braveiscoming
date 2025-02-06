<script lang="ts">
	import github from '$lib/images/github.svg';
</script>

<footer>
	<div id="footer">
		<div class="inner">
			<span class="xans-element- xans-layout xans-layout-logobottom">
				<a href="/">
					<div class="icon logo">braveiscoming</div>
				</a>
				<ul class="footer-list">
					<li><a href="/member/agreement.html">이용약관</a></li>
					<li><a href="/member/privacy.html">개인정보처리방침</a></li>
					<li><a href="/board/%EA%B3%B5%EC%A7%80%EC%82%AC%ED%95%AD/1/">공지사항</a></li>
					<li><a href="/board/free/faq_list.html">FAQ</a></li>
					<li><a href="/board/urgency/urgency.html">비회원문의</a></li>
				</ul>
				<div class="footer-cs">
					<ul>
						<li><b>고객센터</b>02-123-1234</li>
						<li><b>상담가능시간</b>10시~17시</li>
						<li><b>점심시간</b>12시~13시, 주말 및 공휴일 휴무</li>
					</ul>
				</div>
			</span>
			<div class="xans-element- xans-layout xans-layout-footer">
				<div class="address">
					<ul class="address-list">
						<li>
							<p>회사명</p>
							<p class="address-comment">브레이브이즈커밍</p>
						</li>
						<li>
							<p>대표자명</p>
							<p class="address-comment">브레이브</p>
						</li>
						<li>
							<p>주소</p>
							<p class="address-comment">00000 서울특별시 강남구</p>
						</li>
					</ul>
					<ul class="address-list">
						<li>
							<p>대표번호</p>
							<p class="address-comment">02-123-1234</p>
						</li>
						<li>
							<p>사업자등록번호</p>
							<p class="address-comment">
								123-12-12345
								<a href="https://www.ftc.go.kr/" target="_blank" rel="noopener noreferrer">&nbsp;[사업자정보확인]</a>
							</p>
						</li>
						<li>
							<p>통신판매업 신고번호</p>
							<p class="address-comment">
								<button type="button">2025-서울강남-00000</button>
							</p>
						</li>
					</ul>
					<ul class="address-list">
						<li>
							<p>개인정보보호책임자</p>
							<p class="address-comment">
								<span class="">브레이브 brave@braveiscoming.com</span>
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="footer-copyright">
			<p class="footer-copyright__text">Copyright 2025. braveiscoming. All rights reserved.</p>
		</div>
	</div>
</footer>

<style>
	footer {
		width: 100%;
		min-width: 89.5833vw;
		height: 24.9479vw;
		padding: 4.4271vw 5.2083vw;
		background-color: #111;
		box-sizing: border-box;
	}

	.inner {
		display: flex;
		justify-content: space-between;
		position: relative;
		width: 100%;
		padding-bottom: 2.2917vw;
		overflow: hidden;
	}

	.inner img {
		width: 8.5417vw;
		height: 1.875vw;
	}

	.address {
		display: flex;
		padding-top: 0.3646vw;
		font-size: 0.7292vw;
		color: #888;
		line-height: 1.25vw;
	}

	.address-list {
		display: flex;
		flex-direction: column;
		gap: 0.9375vw;
		white-space: nowrap;
	}

	.footer-list {
		display: flex;
		color: #fff;
		font-size: 0.7292vw;
		line-height: 1.25vw;
		gap: 0.4688vw;
		margin-top: 0.5208vw;
		letter-spacing: -0.0052vw;
	}

	.footer-list a {
		display: flex;
		gap: 0.4688vw;
		text-decoration: none;
	}

	.footer-cs {
		color: #fff;
		position: absolute;
		bottom: 2.5vw;
		font-size: 0.7292vw;
		line-height: 1.6;
	}

	.footer-cs b {
		min-width: 4.9479vw;
		display: inline-block;
		font-weight: 500;
	}

	.footer-copyright {
		font-size: 0.7292vw;
		line-height: 1.25vw;
		color: #fff;
		display: flex;
		justify-content: space-between;
	}

	.address .address-comment {
		font-size: 0.7292vw;
		line-height: 1.0938vw;
		color: #fff;
		letter-spacing: -0.0156vw;
	}

	.address .address-comment img {
		width: auto;
		height: 0.6771vw;
	}
</style>
