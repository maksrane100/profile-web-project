<template>
	<div>
		<el-row>
			<el-col :md="24" class="indexHeader">
				<el-col :md="2" class="logoimg"><img src="../assets/logo.png" alt=""></el-col>
				<el-col :md="8" class="hidden-sm-and-down">
					<h1>Profile Search  App</h1>
				</el-col>
				<el-col :md="3" class="user">
					<div class="name">						
						<p class="username">{{this.$store.state.username}}</p>
					</div>
					<div class="useroption">
						<el-dropdown trigger="click" @command="setDialogInfo">
							<span class="el-dropdown-link">
								<i class="el-icon-s-custom el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item command="logout">Logout</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</div>
				</el-col>
			</el-col>
		</el-row>
		<el-row>
			<el-col :md="3" class="asideNav">
				<el-col>
					<el-menu :default-active="defaultActive" class="el-menu-vertical-demo" background-color="rgb(50,50,50)" text-color="#fff"
					 active-text-color="#ffd04b" :router="true">
						<el-menu-item index="home">
							<i class="el-icon-s-home"></i>
							<span slot="title">Home</span>
						</el-menu-item>
						<el-menu-item index="projectdetails">							
							<span slot="title">Project Details</span>
						</el-menu-item>
					</el-menu>
				</el-col>
			</el-col>
			<el-col :md="21">
				<router-view></router-view>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {

		data() {
			return {
				defaultActive: "",
			}
		},
		methods: {
			setDialogInfo(cmditem) {
				console.log(cmditem);
				switch (cmditem) {
					case "logout":
						this.logout();
						break;
					default:
						break;
				}
			},
			logout() {
				
				localStorage.removeItem("token");
				
				this.$store.state.username = "";
				
				this.$router.push("/login");
			},
		},
		created() {
			this.defaultActive = window.location.pathname.split("/").pop();
		}
	}
</script>

<style scoped>
	.indexHeader {
		height: 80px;
		background: #B0E0E6;
	}

	.logoimg {
		height: 100%;
		padding-left: 20px;
	}

	.logoimg img {
		height: 100%;
	}

	h1 {
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
		line-height: 80px;
		margin: 0;
		color: #fff;
		letter-spacing: 12px;
	}

	.user {
		float: right;
	}

	.name {
		color: #FFFFFF;
		text-align: center;
		position: absolute;
		width: 50px;
		line-height: 25px;
		top: 20%;
		right: 50px;
	}

	.name p {
		margin: 0;
		font-weight: 600;
	}

	.username {
		color: rgb(65, 184, 131);
	}

	.useroption {
		cursor: pointer;
		color: #FFFFFF;
		position: absolute;
		right: 20px;
		line-height: 80px;
	}

	.el-dropdown {
		color: #fff;
	}

	.asideNav {
		background-color: #B0E0E6;
		height: 857px;
		overflow: auto
	}

	.el-menu {
		border: 0;
	}
</style>
