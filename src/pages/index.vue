<template>
    <el-button
                type="primary"
                @click="alerts"
    >
        弹窗
    </el-button>
    <el-input />
    <div class="main w-300px h-300px" />
</template>

<script lang="ts" setup>
function alerts() {
    ElMessage.success('2222');
}
</script>

<style lang="less">
.main {
    background-color: @theme-drak-color;
}
</style>
