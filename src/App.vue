<template>
    <component :is="layoutObj.get(layout)">
        <router-view />
    </component>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import DefaultLayout from './layouts/DefaultLayout.vue';
import LoginLayout from './layouts/LoginLayout.vue';

const layoutObj = new Map([
    ['default', DefaultLayout],
    ['login', LoginLayout],
]);
const layout = ref('default');
const route = useRoute();

watch(route, (route) => {
    layout.value = route?.meta?.layout as string ?? 'default';
});
</script>
