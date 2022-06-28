/**
 * @name VisualizerPlugin
 * @description 打包完成后文件图
 */
import { visualizer } from 'rollup-plugin-visualizer';

export default visualizer({
    filename: './node_modules/.cache/visualizer/stats.html',
    open: true,
    gzipSize: true,
    brotliSize: true,
}) as Plugin;
