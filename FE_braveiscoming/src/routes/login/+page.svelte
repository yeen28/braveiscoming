<script lang="ts">
	import { onMount } from 'svelte';
	import SocialLogin from '../../components/SocialLogin.svelte';

	onMount(() => {
		if (0) {
		// if (Math.floor(Math.random() * 2) > 0) { // 0 or 1
			location.href = "/myshop";
		}
	})

	const login = () => {
		console.log('login');

		fetch('/api') // proxy를 통해 BE API 호출
		.then(response => response.json())
		.then(response => console.log(response));
	};
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="Login Page" />
</svelte:head>

<div id="wrap">
	<div id="container">
		<div id="contents">
			<form
				id="member_form_2171334792"
				name=""
				action="/exec/front/Member/login/"
				method="post"
				target="_self"
				enctype="multipart/form-data"
			>
				<input id="returnUrl" name="returnUrl" value="/myshop/index.html" type="hidden" />
				<input id="forbidIpUrl" name="forbidIpUrl" value="/index.html" type="hidden" />
				<input
					id="certificationUrl"
					name="certificationUrl"
					value="/intro/adult_certification.html?returnUrl=%2Fmyshop%2Findex.html"
					type="hidden"
				/>
				<input id="sIsSnsCheckid" name="sIsSnsCheckid" value="" type="hidden" />
				<input id="sProvider" name="sProvider" value="" type="hidden" />
				<div class="xans-element- xans-member xans-member-login">
					<div class="member-container">
						<div class="login member-layout">
							<h3 class="boxTitle member-heading member-heading--border">로그인</h3>

							<fieldset>
								<div class="member-content">
									<div class="member-list--rows">
										<label class="id ePlaceholder member-input" title="아이디"
											><input
												id="member_id"
												name="member_id"
												fw-filter="isFill"
												fw-label="아이디"
												fw-msg=""
												class="inputTypeText"
												placeholder="아이디"
												value=""
												type="text"
											/></label
										>
										<label class="password ePlaceholder member-input" title="비밀번호"
											><input
												id="member_passwd"
												name="member_passwd"
												fw-filter="isFill&amp;isMin[4]&amp;isMax[16]"
												fw-label="패스워드"
												fw-msg=""
												autocomplete="off"
												value=""
												type="password"
												placeholder="비밀번호"
											/></label
										>
									</div>

									<p class="security member-remember">
										<input
											id="member_check_save_id0"
											name="check_save_id"
											fw-filter=""
											fw-label="아이디저장"
											fw-msg=""
											value="T"
											type="checkbox"
										/><label for="member_check_save_id0">아이디 저장</label>
									</p>
								</div>

								<div class="member-list--rows">
									<a href="#none" class="button-lg button--yellow" on:click={login}>로그인 하기</a>
									<a href="/member/join.html" class="button-lg">회원가입 하기</a>

									<ul class="member-links">
										<li class="member-links__item">
											<a href="/member/id/find_id.html">아이디찾기</a>
										</li>
										<li class="member-links__item">
											<a href="/member/passwd/find_passwd_info.html">비밀번호찾기</a>
										</li>
									</ul>
								</div>

								<SocialLogin />
							</fieldset>
						</div>
					</div>
				</div>
			</form>
		</div>
		<hr class="layout" />
	</div>
</div>

<style>
	.member-heading {
		color: #000;
		font-size: 1.5625vw;
		font-weight: 600;
		line-height: 1.6;
		padding-bottom: 1.3708vw;
	}

	.member-heading--border {
		border-bottom: 0.1042vw solid #000;
	}

	.member-layout {
		margin: 8.125vw auto 0;
		max-width: 23.9583vw;
		text-align: center;
		color: #111;
	}

	.member-layout input[type='text'],
	.member-layout input[type='password'],
	.member-layout select,
	.member-layout textarea {
		padding-top: 0.5208vw;
		padding-bottom: 0.625vw;
	}

	.member-list--rows {
		display: grid;
		gap: 0.9375vw 0.4167vw;
	}

	.member-content {
		padding-bottom: 2.0833vw;
		margin-top: 1.25vw;
	}

	.member-remember {
		margin-top: 0.6771vw;
		text-align: start;
	}

	input[type='checkbox'] {
		z-index: -1;
		position: absolute;
		width: 0.8333vw;
		height: 0.8333vw;
		opacity: 0;
	}

	input[type='checkbox'] + label {
		position: relative;
		padding-left: 1.25vw;
		color: #000;
		font-size: 0.8333vw;
		font-weight: 400;
		line-height: 1.5;
	}

	input[type='checkbox'] + label::before {
		content: '';
		display: block;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		width: 0.8333vw;
		height: 0.8333vw;
		border: 0.0521vw solid #000;
		box-sizing: border-box;
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.member-list--rows {
		display: grid;
		gap: 0.9375vw 0.4167vw;
	}

	.button--yellow {
		background-color: #f7e94f !important;
		border-color: #f7e94f !important;
	}

	.button-lg {
		padding: 0.5729vw 1.1458vw 0.6771vw;
		font-size: 0.9375vw;
		line-height: 1.444444444;
	}

	.button,
	.button-sm,
	.button-lg {
		display: inline-block;
		padding: 0.5208vw 1.1458vw 0.4167vw;
		text-align: center;
		color: #000;
		font-family: Outfit, 'Noto Sans KR', Verdana, Dotum, AppleGothic, sans-serif;
		font-size: 0.8333vw;
		font-weight: 600;
		line-height: 1.5;
		border: 0.0521vw solid #000;
		background-color: #fff;
		box-sizing: border-box;
	}

	.member-links {
		display: flex;
		justify-content: center;
		font-size: 0.8333vw;
		line-height: 1.5;
		color: #777;
		gap: 0.8333vw;
	}
</style>
