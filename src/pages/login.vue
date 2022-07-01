<template>
    <section class="login-container">
        <el-form
            ref="loginFormRef"
            :model="loginInfo"
            :rules="rules"
            label-width="66px"
            status-icon
            class="login-form"
        >
            <el-form-item prop="username" label="用户名">
                <el-input v-model="loginInfo.username" />
            </el-form-item>
            <el-form-item prop="password" label="密码">
                <el-input v-model="loginInfo.password" type="password" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click.prevent="loginSubmit(loginFormRef)">
                    登录
                </el-button>
                <el-button type="primary" @click.prevent="register">
                    注册
                </el-button>
            </el-form-item>
        </el-form>
    </section>
</template>

<route>
{
  meta: {
    layout: 'login'
  }
}
</route>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus';
import { reactive, ref } from 'vue';
import { login } from '@/apis/login';

const router = useRouter();
const loginFormRef = ref<FormInstance>();
const loginInfo = reactive({
    username: '',
    password: '',
});

const rules = reactive<FormRules>({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        {
            min: 5, max: 20, message: '用户名长度 5 - 20 个字符！', trigger: 'blur',
        },
    ],
    password: [
        {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
        },
        {
            min: 8, max: 32, message: '密码长度8 - 32 个字符！', trigger: 'blur',
        },
    ],
});
function loginSubmit(formEl: FormInstance | undefined) {
    if (!formEl) return;
    formEl.validate(async (valid) => {
        if (valid) {
            const res = await login(loginInfo);
            if (res.code !== 200) {
                ElMessage.error('登录失败，请检查用户名或者密码是否正确！');
            }
        }
        ElMessage.error('登录数据有误请重新输入！');
    });
    console.log('login');
}
function register() {
    router.push('/register');
}
</script>

<style lang="less" scoped>
.login-container {
    width: 100vw;
    height: 100vh;
    position: relative;
    .login-form {
        width: 300px;
        height: max-content;
        margin: 0;
        padding: 16px;
        border-radius: 4px;
        position: absolute;
        top: 30%;
        left: 70%;
    }
}
</style>
