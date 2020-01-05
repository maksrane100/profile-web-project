import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
	{
	  path: '/',
	  component: () => import('../views/login.vue')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},
	{
		path: '/index',
		name: 'index',
		component: () => import('../views/index.vue'),
		redirect:"../home",
		children:[
			{
				path:"/home",
				name:'home',
				component: () => import('../views/home.vue'),
			},
			{
				path:"/projectdetails",
				name:'projectdetails',
				component: () => import('../views/projectdetails.vue'),
			}
		]
	}
]

const router = new VueRouter({
  mode: 'history',
  base: '/demo',
  routes
})


router.beforeEach((to,from,next) =>{
	const isLogin = localStorage.token ? true : false;
	if(to.path == "/login"){
		next();
	}else{
		isLogin ? next() : next("/login");
	}
})

export default router
