/**
 * @name RouterPagesPlugin
 * @description 动态生成路由
 */
import Pages from 'vite-plugin-pages';

export default Pages({
    pagesDir: [{ dir: 'src/pages', baseRoute: '' }],
    extensions: ['vue', 'tsx'],
    exclude: ['**/components/*.vue'],
    nuxtStyle: true,
});
