/**
 * @name RestartPlugin
 * @description 监听配置文件修改自动重启Vite
 */
import ViteRestart from 'vite-plugin-restart';

export default ViteRestart({
    restart: ['*.config.[jt]s', '**/config/*.[jt]s'],
});
