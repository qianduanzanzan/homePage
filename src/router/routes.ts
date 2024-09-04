import Layout from "../layout/index.vue";

const routes = [
	{
		path: "/",
		name: "root",
		component: Layout,
		redirect: {name: 'homePage'},
		children: [
			{
				path: "/demo",
				name: "demo",
				component: () => import(/* webpackChunkName: demo */ "../views/demo/index.vue")
			},
			{
				path: "/homePage",
				name: "homePage",
				component: () => import(/* webpackChunkName: homePage */ "../views/homePage/index.vue")
			}
		]
	},
	{
		path: "/:catchAll(.*)",
		name: "pageNotFound",
		component: () => import("../views/pageNotFound/index.vue")
	},
	{
		path: "/404",
		name: "404",
		component: () => import("../views/pageNotFound/404.vue")
	}
];

export default routes;
