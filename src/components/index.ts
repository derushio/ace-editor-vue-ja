import Vue, { PluginObject } from 'vue';
import AceEditor from '@/components/AceEditor.vue';

export const components = [AceEditor];

export const installers = components.map(component => {
    return {
        install: (MyVue: typeof Vue): void => {
            MyVue.component(component.name, component);
        },
    };
}) as Array<PluginObject<{}>>;
