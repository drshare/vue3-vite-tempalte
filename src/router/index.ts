import { createRouter, createWebHistory } from 'vue-router';
import routes from 'virtual:generated-pages';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { isLogin } from '@/request/auth';

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const noLoginRouterPath: Array<string> = ['/login', '/register'];

router.beforeEach(async (to, from, next) => {
    NProgress.start();
    if (!noLoginRouterPath.includes(to.path) && !isLogin()) {
        ElMessage.error('您还没有登录，请先登录！');
        next('/login');
    }
    next();
});

router.afterEach(() => {
    NProgress.done();
});

export default router;
