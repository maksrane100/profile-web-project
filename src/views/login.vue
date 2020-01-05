<template>

	<div>
		<div class="background_img" @keyup.enter="login">
			<el-row class="loginContainer">
				<el-col :md="8" :offset="8" class="login_div">
					<el-row class="login_rows">
						<img src="../assets/logo.png" />
					</el-row>
					<el-row class="login_rows">
						<el-col :md="10" :offset="7">
							<el-input type="text" v-model="username"></el-input>
						</el-col>
					</el-row>
					<el-row class="login_rows">
						<el-col :md="10" :offset="7">
							<el-input type="password" v-model="password" show-password></el-input>
						</el-col>
					</el-row>
					<el-row class="login_rows">
						<el-col :md="10" :offset="7">
							<el-button type="primary" class="loginbtn" @click="login">Login</el-button>
						</el-col>
					</el-row>
				</el-col>
			</el-row>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				username: "",
				password: ""
			}
		},
		methods: {
			login() {
				if (this.username == "" || this.password == "") {
					this.$message({
						message: "Username or passwordcan not be empty.",
						type: 'warning',
						duration: 3000
					});
				} else {
					let token = '4524523452345234';
					localStorage.setItem("token", token);
					
					this.$store.state.username = 'admin';
					
					this.$router.push("/home");
				}
			}
		}

	}
</script>

<style scoped>
	.background_img {
		background-position: center 0;
		background-size: cover;
		min-height: 100vh;
	}

	.loginbtn {
		width: 100%;
	}

	.loginContainer {
		position: relative;
		top: 200px;
	}

	.login_div {
		background-color: #ffffff;
		border-radius: 50px;
	}

	.login_rows {
		padding: 10px;
		text-align: center;
	}
</style>
