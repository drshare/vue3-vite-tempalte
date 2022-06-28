/**
 * @name CompressPlugin
 * @description 开启.gz压缩
 */
import viteCompression from 'vite-plugin-compression';
import config from '../../config';

export default function CompressPlugin() {
    if (config.COMPRESSION) {
        return viteCompression({
            ext: '.gz',
            verbose: true,
            deleteOriginFile: false,
        });
    }
    return [];
}
