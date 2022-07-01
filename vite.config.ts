import { UserConfig, ConfigEnv } from 'vite';
import path from 'path';
import registerVitePlugins from './plugins';

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfig => {
    const isBuild = command === 'build';
    return {
        envDir: './env',
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
                '#': path.resolve(__dirname, './src/types'),
            },
        },
        plugins: registerVitePlugins(isBuild),
        css: {
            preprocessorOptions: {
                less: {
                    additionalData: '@import \'@/assets/styles/variables.less\';',
                },
            },
        },
        server: {
            host: '0.0.0.0',
            port: 9527,
            open: true,
            proxy: {
                // 选项写法
                '/api': {
                    target: 'http://127.0.0.1:7001',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ''),
                },
            },
        },
        // build
        build: {
            brotliSize: false,
        },
    };
};
