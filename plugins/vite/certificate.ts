/**
 * @name certificate https 支持
 * @description https 支持 证书
 */
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        https: true,
    },
    plugins: [mkcert()],
});
