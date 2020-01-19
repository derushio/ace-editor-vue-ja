<document>
# AceEditor.vue
## Author
* Derushio

## Description
* リッチテキストエディタコンポーネント

## Dependencies
* ace-builds
* @types/ace
* copy-webpack-plugin

## Instalation
* webpackに以下の記述を追加

```
plugins: [
    new copyWebpackPlugin([
        { from: path.resolve(modulePath, 'ace-builds/src'), to: path.resolve(distPath, 'ace') }
    ])
]
```
</document>

<template lang='pug'>
.ace-editor
    p test
</template>

<script lang='ts'>
import { Component, Vue, Prop, PropSync, Watch } from 'vue-property-decorator';
import * as Ace from 'ace-builds';

export interface AceConfig {
    basePath: string;
    theme: string;
    mode: string;

    fontSize: string;
    lineHeight: string;
}

export const defaultConfig = {
    basePath: '/',
    theme: '',
    mode: '',

    fontSize: '14px',
    lineHeight: '1.5em',
} as AceConfig;

@Component
export default class AceEditor extends Vue {
    @Prop({ type: Object, default: () => defaultConfig })
    protected config?: AceConfig;

    @PropSync('document', { type: String, default: () => '', required: true })
    protected syncDocument?: string;

    protected editor = null as Ace.Ace.Editor | null;

    protected beforeCreate() {
        // グローバル変数にエイリアス
        (window as any).define = (Ace as any).define;
        (window as any).require = (Ace as any).require;
    }

    protected mounted(): void {
        this.setup();
    }

    protected setup(): void {
        this.editor = Ace.edit(this.$el);
        this.documentToEditor();

        this.editor.on('change', (delta: Ace.Ace.Delta) => {
            this.editorToDocument();
        });

        Ace.config.set('basePath', this.config!.basePath);
        this.editor.setTheme(this.config!.theme);
        this.editor.session.setMode(this.config!.mode);

        this.editor.setFontSize(this.config!.fontSize);

        this.editor.container.style.lineHeight = this.config!.lineHeight;
        this.editor.renderer.updateFontSize();
    }

    @Watch('syncDocument')
    protected documentToEditor(): void {
        if (this.editor == null) {
            return;
        }

        // 外部から変更が合った場合
        if (this.syncDocument! !== this.editor.getValue()) {
            this.editor.setValue(this.syncDocument!, 1);
        }
    }

    protected editorToDocument(): void {
        if (this.editor == null) {
            return;
        }

        this.syncDocument = this.editor.getValue();
    }
}
</script>

<style lang='stylus' scoped>
.ace-editor
    p
        color: red;
</style>
