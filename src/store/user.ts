import { defineStore } from 'pinia';

export default defineStore({
    id: 'user', // id必填，且需要唯一
    state: () => ({
        name: '张三',
        token: '',
    }),
    actions: {
        updateName(name: string) {
            this.name = name;
        },
    },
});
