import Vue, { PluginObject } from 'vue';
import AceEditor from './AceEditor.vue';

export const components = [ AceEditor ];

export const installers = components.map((component) => {
    return {
        install: (MyVue: typeof Vue) => {
            MyVue.component(component.name, component);
        },
    };
}) as Array<PluginObject<{}>>;
