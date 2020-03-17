import Vue, { PluginObject } from 'vue';
import Test from '@/components/Test.vue';

export const components = [Test];

export const installers = components.map(component => {
    return {
        install: (MyVue: typeof Vue): void => {
            MyVue.component(component.name, component);
        },
    };
}) as Array<PluginObject<{}>>;
