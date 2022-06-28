/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用
 */
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import windiCSS from 'vite-plugin-windicss';
import VitePluginCertificate from 'vite-plugin-mkcert';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImportPlugin from './vite/autoImport';
import RegistryComponentsPlugin from './vite/component';
import PagesPlugin from './vite/pages';
import Visualizer from './vite/visualizer';
import CompressPlugin from './vite/compress';
import RestartPlugin from './vite/restart';
import ProgressPlugin from './vite/progress';
import SvgIconsPlugin from './vite/svgIcons';

export default function registerVitePlugins(isBuild: boolean) {
    const vitePlugins = [
        vue(), // vue支持
        vueJsx(), // JSX支持
        PagesPlugin,
        AutoImportPlugin,
        RegistryComponentsPlugin, // 自动按需引入组件
        VitePluginCertificate({
            // 提供https证书
            source: 'coding',
        }),
        vueSetupExtend(), // setup语法糖组件名支持
        CompressPlugin(), // 开启.gz压缩  rollup-plugin-gzip
        RestartPlugin, // 监听配置文件改动重启
        ProgressPlugin, // 构建时显示进度条
        windiCSS(),
        SvgIconsPlugin(isBuild), // vite-plugin-svg-icons
        Visualizer, // rollup-plugin-visualizer
    ];
    return vitePlugins;
}
