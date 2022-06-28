import { UserConfig, ConfigEnv } from 'vite';
import path from 'path';
import registerVitePlugins from './plugins';

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfig => {
    const isBuild = command === 'build';
    return {
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
        },
        // build
        build: {
            brotliSize: false,
        },
    };
};
