import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {
	Message
} from 'element-ui';
Vue.prototype.$message = Message;

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
		path: '/',
		name: 'Home',
		component: () => import('@/views/Home.vue')
	},
	{
		path: '/Home',
		name: 'Home',
		component: () => import('@/views/Home.vue')
	},
	{
		path: '/Login',
		name: 'Login',
		component: () => import('@/views/loginAndregister/login.vue')
	},
	{
		path: '/register',
		name: 'register',
		component: () => import('@/views/loginAndregister/register.vue')
	},
	{
		path: '/liuyan',
		name: 'liuyan',
		component: () => import('@/views/liuyan.vue')
	},
	{
		path: '/personal',
		name: 'personal',
		component: () => import('@/views/personal.vue')
	},
	{
		path: '/manage',
		name: 'manage',
		component: () => import('@/views/Manage.vue')
	},
	{
		path: '/qianggou',
		name: 'Qianggou',
		component: () => import('@/views/home/qianggou.vue')
	},
	{
		path: '/lingshi',
		name: 'Lingshi',
		component: () => import('@/views/home/lingshi.vue')
	},
	{
		path: '/dailyUse',
		name: 'DailyUse',
		component: () => import('@/views/home/dailyUse.vue')
	},
	{
		path: '/Details',
		name: 'Details',
		component: () => import('../views/Details.vue')
	},
	{
		path: '/Success',
		name: 'Success',
		component: () => import('../views/Success.vue')
	},
	{
		path: '/car',
		name: 'Car',
		component: () => import('../views/car.vue')
	},
	{
		path: '/Settlement',
		name: 'Settlement',
		component: () => import('../views/Settlement.vue'),
	}

	]


})
//全局守卫
router.beforeEach((to, from, next) => {
	//用户未登录只能访问首页、登录注册页面
	if (to.path == "/" || to.path == "/Login" || to.path == "/register") {
		next();
	} else {
		//去其他页面判断是否登录
		let flag = window.localStorage.getItem("email");
		//登录过直接放行
		if (flag) {
			next()
		} else {
			//未登录则跳转到首页
			Message({
				message: '您尚未登录哦，请先登录！',
				type: 'warning',
				duration: 1500
			});
			next("/");
		}
	}
})
//控制路由跳转后页面回到顶部
router.afterEach(() => {
	window.scrollTo(0, 0)
})
export default router
