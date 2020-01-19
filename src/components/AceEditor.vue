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

```js
const CopyWebpackPlugin = require('copy-webpack-plugin');

const modulePath = path.resolve(__dirname, 'node_modules');
const distPath = path.resolve(__dirname, 'dist');
```

```js
plugins: [
    new CopyWebpackPlugin([
        { from: path.resolve(modulePath, 'ace-builds/src'), to: path.resolve(distPath, 'ace') },
    ]),
]
```

* stylusに以下を追加
```stylus
@font-face
    font-family: 'VL Gothic for AceEditor'
    src: url('~ace-editor-vue-ja/src/assets/fonts/VL-Gothic-Regular-for-AceEditor.ttf')
```
</document>

<template lang='pug'>
.ace-editor
</template>

<script lang='ts'>
import { Component, Prop, PropSync, Watch } from 'vue-property-decorator';
import Vue from 'vue';
import * as Ace from 'ace-builds';
import { AceConfig, defaultConfig } from '@/models/AceConfig';

@Component
export default class AceEditor extends Vue {
    @Prop({ type: Object, default: () => defaultConfig() })
    protected config!: AceConfig;

    @PropSync('document', { type: String, default: () => '', required: true })
    protected syncDocument!: string;

    protected editor = null as Ace.Ace.Editor | null;

    protected beforeCreate() {
        // グローバル変数にエイリアス
        (window as any).define = (Ace as any).define;
        (window as any).require = (Ace as any).require;
    }

    protected mounted() {
        this.setup();
    }

    protected setup() {
        this.editor = Ace.edit(this.$el);
        this.documentToEditor();

        this.editor.on('change', (delta: Ace.Ace.Delta) => {
            this.editorToDocument();
        });

        Ace.config.set('basePath', this.config.basePath);
        this.editor.setTheme(this.config.theme);
        this.editor.session.setMode(this.config.mode);

        this.editor.setFontSize(this.config.fontSize);

        this.editor.container.style.lineHeight = this.config.lineHeight;
        this.editor.renderer.updateFontSize();
    }

    @Watch('syncDocument')
    protected documentToEditor() {
        if (this.editor == null) {
            return;
        }

        // 外部から変更が合った場合
        if (this.syncDocument !== this.editor.getValue()) {
            this.editor.setValue(this.syncDocument, 1);
        }
    }

    protected editorToDocument() {
        if (this.editor == null) {
            return;
        }

        this.syncDocument = this.editor.getValue();
    }
}
</script>

<style lang='stylus' scoped>
.ace-editor
    &.ace_editor *
        font-family: 'VL Gothic for AceEditor', Monaco, Menlo, 'Ubuntu Mono', Consolas, source-code-pro, monospace !important;
</style>
