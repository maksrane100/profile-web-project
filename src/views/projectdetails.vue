<template>
	<div class="home">
		
		<div>
			<div>
				<div slot="header" class="header">Project Details</div>
			</div>
		</div>
		
		<div>
			<div>
				<div class="profile_row">
					<div class="value">
						This project demonstrates how to read API data of user profiles and display it using Vue. It uses element-ui library to create the front end and axios to fetch data from REST API.
						Before you run this project, please download and run project from another repository named as "profile-rest-api".
						This will start the API of user profiles that we will be consuming in this project.
					</div>
				</div>
				
				<div class="profile_row">
					<div class="value">
						Download the project in C: and then run  the following command
					</div>
				</div>
				
				<div class="profile_row">
					<div class="value">
						Install the dependencies in the local node_modules folder. 

						c:\profile-web-project>npm install

						To run the project, run following command

						c:\profile-web-project>npm run serve
					</div>
				</div>

				<div class="profile_row">
					<div class="value">
						The project will be running at http://localhost:8080/
					</div>
				</div>						

					</div>								
				</div>
			</div>
		</div>		

	</div>
</template>


<script>
	import axios from "axios";
	
	export default {
		name: 'projectdetails',
		
		data() {
			return {

			}
		},
		
		methods: {

		},
		
		components: {},
		
		created() {
			
		}
	}
</script>

<style scoped>
	.home {
		height: 860px;
	}

	.header {
		text-align: center;
		margin: 0 20px;
		font-size: 24px;
		font-weight: 600;
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
		height: 50px;
		line-height: 50px;
		letter-spacing: 1.2px;		
		color: blue;
	}
	


	.text {
		width: 200px;
		text-align: left;
	}
	
	.text_underline {		
		text-decoration: underline;
		color: #0091CD;
		float: right;
	}
	

	.profile_row {
		overflow:auto;
		width: 840px;
		margin: 4px;
		font-family: 'Source Sans Pro', sans-serif; 
		font-size: 18px;
	}

	.profile_header {
		margin: 4px;
		font-family: 'Source Sans Pro', sans-serif; 
		font-weight:bold;
		font-size: 18px;
	}

	.profile_header_class {
		margin: 4px;
		font-family: 'Source Sans Pro', sans-serif; 
		font-weight:bold;
		font-size: 18px;
		width: 200px;
	}
	
	.hr_class {
		border-bottom: 1px solid #0091CD;
	}
	.field {
		width: 200px;
		float: left;
		margin: 4px;
		font-weight:bold;
		font-size: 14px;
		font-family: 'Source Sans Pro', sans-serif; 
	}

	.value {
		float: left;
		margin: 4px;
		overflow: auto;
	}
</style>