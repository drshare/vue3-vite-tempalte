/**
 * @name AutoImportDeps
 * @description 按需加载，自动引入
 */
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default AutoImport({
    // 全局导入注册 global imports to register
    imports: [
        'vue',
        'pinia',
        'vue-router',
        {
            '@vueuse.core': [],
        },
    ],
    dts: './types/auto-imports.d.ts',
    // Custom resolvers, compatible with `unplugin-vue-components`
    // see https://github.com/antfu/unplugin-auto-import/pull/23/
    resolvers: [
        /* ... */
        ElementPlusResolver(),
    ],
});
