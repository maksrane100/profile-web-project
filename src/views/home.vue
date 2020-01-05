<template>
	<div class="home">
		<div class="housepage">
			<div class="formheader">
			<el-form  label-width="130px" ref="updroomInfoFrom">

				<el-form-item label="Country">
					<el-select v-model="selectedCountry" filterable clearable placeholder="Please select country" @change="updateCountry">
						<el-option v-for="item in countries" :key="item" :label="item" :value="item"></el-option>
					</el-select>
				</el-form-item>

				<el-form-item label="State">
					<el-select v-model="selectedState" filterable clearable placeholder="Please select state" @change="updateState">
						<el-option v-for="item in states" :key="item" :label="item" :value="item"></el-option>
					</el-select>
				</el-form-item>

				<el-form-item label="City">
					<el-select v-model="selectedCity" filterable clearable placeholder="Please select city" @change="updateCity">
						<el-option v-for="item in cities" :key="item" :label="item" :value="item"></el-option>
					</el-select>
				</el-form-item>

				<el-form-item label="Gender">
					<el-select v-model="selectedGender" filterable clearable placeholder="Please select gender" @change="updateGender">
						<el-option v-for="item in genders" :key="item" :label="item" :value="item"></el-option>
					</el-select>
				</el-form-item>

				<el-form-item label="Religion">
					<el-select v-model="selectedReligion" filterable clearable placeholder="Please select religion" @change="updateReligion">
						<el-option v-for="item in religions" :key="item" :label="item" :value="item"></el-option>
					</el-select>
				</el-form-item>

				<el-form-item label="Marital Status">
					<el-select v-model="selectedMaritalStatus" filterable clearable placeholder="Please select marital status" @change="updateMaritalStatus">
						<el-option v-for="item in maritalstatuses" :key="item" :label="item" :value="item"></el-option>
					</el-select>
				</el-form-item>
				
				<el-form-item label="Age From" prop="age_from" width="15%" class="text">	
					<el-input type="text" v-model="selectedAgeFrom" autocomplete="off" placeholder="Please enter age from"></el-input>
				</el-form-item>

				<el-form-item label="Age To" prop="age_to" width="15%" class="text">
					<el-input type="text" v-model="selectedAgeTo" autocomplete="off" placeholder="Please enter age to"></el-input>
				</el-form-item>

				
			</el-form>
			
			<el-button type="primary" @click="search()" class="search_button">Search</el-button>
			
			</div>
		</div>
		
		<div class="housebody">
			<div>
				<hr />
				<div slot="header" class="header">Search Results</div>
			</div>
		</div>
		
		<div class="housebody">
			<div>
				<div class="main_row" v-for="profile in profiles" @click="show(profile)">
					
					<el-card class="profileCard">
						<div slot="header" class="profile_header_class">
							<div class="value" v-if="profile && profile.about_details && profile.about_details.gender=='Male'"> 
								<img src="../assets/man.png" class="image"/>									
							</div>
							<div class="value" v-if="profile && profile.about_details && profile.about_details.gender=='Female'"> 
								<img src="../assets/woman.png" class="image"/>										
							</div>
							<div class="value">
								{{profile.user_id? profile.user_id.firstname:''}} {{profile.user_id? profile.user_id.lastname:''}}
							</div>
						</div>
						
						<div><hr class="hr_class"/></div>
						
						<div>
							<div class="profile_row">
								<div class="value">
									{{profile && profile.user_id? profile.user_id.age+' Years':''}}
									{{profile && profile.about_details? profile.about_details.marital_status:''}}
								</div>								
							</div>
							<div class="profile_row">
								<div class="value">
									From {{profile && profile.about_details? profile.about_details.work_location_city:''}} {{profile && profile.about_details? profile.about_details.work_location_country:''}}
								</div>		
							</div>
							<div class="profile_row">
								<div class="value">
									<el-button class="text_underline" type="text" @click="show(profile)">Details</el-button>
								</div>		
							</div>
							
						</div>
					</el-card>
				</div>
			</div>
		</div>



		<el-dialog :title="test" :visible.sync="dialogViewProfile" width="45%" :before-close="handleClose" :showClose="showClose" class="dialog">
			<div>			
				<div class="modal-header" id="modalTitle">
					<div name="profile_header" class="profile_header">
						{{selectedProfile && selectedProfile.user_id? selectedProfile.user_id.firstname:''}} {{selectedProfile && selectedProfile.user_id? selectedProfile.user_id.lastname:''}} Profile
					</div>
				</div>
			
				<hr/>
				
				<div class="modal-body" id="modalDescription">
					<div class="profile_row">
						<div class="field">Name:</div>
						<div class="value">
							{{selectedProfile && selectedProfile.user_id? selectedProfile.user_id.firstname:''}} {{selectedProfile && selectedProfile.user_id? selectedProfile.user_id.lastname:''}}
						</div>
					</div>

					<div class="profile_row">
						<div class="field">Birthdate:</div>
						<div class="value">
							{{selectedProfile && selectedProfile.user_id? selectedProfile.user_id.birthdate:''}} {{selectedProfile && selectedProfile.user_id? selectedProfile.user_id.age:''}} {{selectedProfile && selectedProfile.about_details? selectedProfile.about_details.gender:''}}
						</div>
					</div>

					<div class="profile_row">
						<div class="field">About Myself:</div>
						<div class="value">
							{{selectedProfile && selectedProfile.about_details? selectedProfile.about_details.about_myself:''}}
						</div>
					</div>

					<div class="profile_row">
						<div class="field">Looking For:</div>
						<div class="value">
							{{selectedProfile && selectedProfile.about_details? selectedProfile.about_details.looking_for_details:''}}
						</div>
					</div>

					<div class="profile_row">
						<div class="field">Education:</div>
						<div class="value">
							{{selectedProfile && selectedProfile.about_details? selectedProfile.about_details.undergraduate_degree:''}} {{selectedProfile && selectedProfile.about_details? selectedProfile.about_details.undergraduate_institute_details:''}}
							{{selectedProfile && selectedProfile.about_details && selectedProfile.about_details.undergraduate_degree && selectedProfile.about_details.graduate_degree? ',':'' }}
							{{selectedProfile && selectedProfile.about_details? selectedProfile.about_details.graduate_degree:''}} {{selectedProfile && selectedProfile.about_details? selectedProfile.about_details.graduate_institute_details:''}}
						</div>
					</div>

					<div class="profile_row">
						<div class="field">Work Location:</div>
						<div class="value">
							{{selectedProfile && selectedProfile.about_details? selectedProfile.about_details.work_location_city:''}} {{selectedProfile && selectedProfile.about_details? selectedProfile.about_details.work_location_country:''}}
						</div>
					</div>
					
					<div class="profile_row">
						<div class="field">About Family:</div>
						<div class="value">
							{{selectedProfile && selectedProfile.family_details? selectedProfile.family_details.about_family:''}}
						</div>
					</div>

					<div class="profile_row">
						<div class="field">Family Location:</div>
						<div class="value">
							{{selectedProfile && selectedProfile.family_details? selectedProfile.family_details.family_location_city:''}}
						</div>
					</div>

					<div class="profile_row">
						<div class="field">Father Occupation:</div>
						<div class="value">
							{{selectedProfile && selectedProfile.family_details? selectedProfile.family_details.father_occupation:''}}
						</div>
					</div>

					<div class="profile_row">
						<div class="field">Mother Occupation:</div>
						<div class="value">
							{{selectedProfile && selectedProfile.family_details? selectedProfile.family_details.mother_occupation:''}}
						</div>
					</div>


					<div class="profile_row">
						<div class="field">Religion:</div>
						<div class="value">
							{{selectedProfile && selectedProfile.religion_details? selectedProfile.religion_details.religion:''}}
							{{selectedProfile && selectedProfile.religion_details? selectedProfile.religion_details.caste:''}}
							{{selectedProfile && selectedProfile.religion_details? selectedProfile.religion_details.sub_caste:''}}
						</div>
					</div>

					<div class="profile_row">
						<div class="field">Marital Status:</div>
						<div class="value">
							{{selectedProfile && selectedProfile.about_details? selectedProfile.about_details.marital_status:''}}
						</div>
					</div>

					<div class="profile_row">
						<div class="field">Address:</div>
						<div class="value">
							{{selectedProfile && selectedProfile.address_details? selectedProfile.address_details.address1:''}}
							{{selectedProfile && selectedProfile.address_details? selectedProfile.address_details.address2:''}}
							{{selectedProfile && selectedProfile.address_details? selectedProfile.address_details.city:''}}
							{{selectedProfile && selectedProfile.address_details? selectedProfile.address_details.state:''}}
							{{selectedProfile && selectedProfile.address_details? selectedProfile.address_details.zip:''}}
							{{selectedProfile && selectedProfile.address_details? selectedProfile.address_details.country:''}}							
						</div>
					</div>
				</div>
				<hr/>

				<div slot="footer" class="dialog-footer">
					<el-button @click="handleClose()">Close</el-button>
				</div>
			</div>
		</el-dialog>

	</div>
</template>

<script>
	import axios from "axios";
	
	export default {
		name: 'home',
		
		data() {
			return {

				profiles:[],
				countries:[],
				states:[],
				cities:[],
				genders:['Male','Female'],
				religions:['Hindu','Christian','Buddhist','Muslim','Sikh'],
				maritalstatuses:['Never Married', 'Divorced','Awaiting Divorce','Annulled','Widow'],
				selectedProfile:null,
				selectedCountry: null,
				selectedState:null,
				selectedCity:null,
				selectedGender:null,
				selectedReligion:null,
				selectedMaritalStatus:'Never Married',
				selectedAgeFrom:20,
				selectedAgeTo:30,
				dialogViewProfile: false
			}
		},
		
		methods: {
			
			show(profile) {
				this.dialogViewProfile =true;
				this.selectedProfile=profile;
				this.test=selectedProfile.user_id.firstname+" "+selectedProfile.user_id.lastname;
			},
			
			handleClose() {
				this.dialogViewProfile =false;
			},	
			
			getCountries() {
				this.$axios.get("http://localhost:3001/countries").then(response => {
					this.countries = response.data;
				})
			},
			
			getStates() {
				this.$axios.get("http://localhost:3001/countries/findstates/"+this.selectedCountry).then(response => {
					this.states = response.data;
				})
			},
			
			getCities() {
				this.$axios.get("http://localhost:3001/countries/findcities/"+this.selectedCountry+"/"+this.selectedState).then(response => {
					this.cities = response.data;
				})
			},
			
			updateCountry(selected) {
				this.selectedCountry=selected;
				this.getStates();
			},
			
			updateState(selected) {			
				this.selectedState=selected;
				this.getCities();
			},
			
			updateCity(selected) {			
				this.selectedCity=selected;
			},
			
			updateGender(selected) {			
				this.selectedGender=selected;
			},
			
			updateMaritalStatus(selected) {
				this.selectedMaritalStatus=selected;
			},
			
			updateReligion(selected) {
				this.selectedReligion=selected;
			},

			search() {
				this.getProfileData1();
			},
			
			getProfileData1() {
				
				var query='';
				if(this.selectedCountry!='' && this.selectedCountry!=null && this.selectedCountry!=undefined){
					query=query+'country='+this.selectedCountry;
				}
				if(this.selectedCity!=''  && this.selectedCity!=null && this.selectedCity!=undefined){
					query=query+'&workcity='+this.selectedCity;
				}
				if(this.selectedAgeFrom!=''  && this.selectedAgeFrom!=null && this.selectedAgeFrom!=undefined){
					query=query+'&agefrom='+this.selectedAgeFrom;
				}
				if(this.selectedAgeTo!='' && this.selectedAgeTo!=null && this.selectedAgeTo!=undefined){
					query=query+'&ageto='+this.selectedAgeTo;
				}
				if(this.selectedReligion!='' && this.selectedReligion!=null && this.selectedReligion!=undefined){
					query=query+'&religion='+this.selectedReligion;
				}
				if(this.selectedMaritalStatus!='' && this.selectedMaritalStatus!=null && this.selectedMaritalStatus!=undefined){
					query=query+'&maritalstatus='+this.selectedMaritalStatus;
				}
				var url="http://localhost:3001/profiles/common/search?"+query;
				
				axios.get(url).then(response => {
					
					this.profiles = response.data;
					this.$message.success(response.data.length+" Profiles Found.");
				}).catch((error) => {
				   alert('Error :'+error);
				})
			},
		},
		
		components: {},
		
		created() {
			this.getProfileData1();
			this.getCountries();
			this.getStates();
			this.getCities();
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
		font-size: 20px;
		font-weight: 600;
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
		height: 50px;
		line-height: 50px;
		letter-spacing: 1.2px;		
		color: blue;
	}
	
	.box-card {
		width: 200px;
		margin:10px;
		padding: 10px;
		float: left;
	}
	
	.profileCard {
		margin: 4px;
		cursor: pointer;
		width: 200px;
		padding: 4px;
		float: left;
		background-color: #EEFAFF;
		font-size: 12px;
		font-family: 'Source Sans Pro', sans-serif; 
	}
	.formheader {
		margin-bottom: 20px;
		padding:10px;
	}
	
	.image {
		width: 20px;
		height: 20px;
	}

	.search_button {
		margin-left: 130px;
		padding: 10px;
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
	
	.dialog {
		overflow: scroll;
	}
	
	.profile_row {
		overflow:auto;
		width: 8400px;
		margin: 4px;
		font-family: 'Source Sans Pro', sans-serif; 
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