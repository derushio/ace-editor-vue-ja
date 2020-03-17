import Vue, { PluginObject } from 'vue';
import { installers } from '@/components';

export default {
    install: (MyVue: typeof Vue) => {
        // install
        for (const installer of installers) {
            MyVue.use(installer);
        }
    },
} as PluginObject<{}>;
