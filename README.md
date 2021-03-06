# README

## Description
* ace
* リッチテキストエディタコンポーネント
* 日本語上でのバグを除去

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

## HOW TO USE
```ts
import Vue from 'vue';
import AceEditorVueJa from 'ace-editor-vue-ja';
Vue.use(AceEditorVueJa);
```

```html
<ace-editor :document.sync='document' :config='config'>
```

* config
```ts
import { defaultConfig } from 'ace-editor-vue-ja/src/models/AceConfig';
function config() {
    const config = defaultConfig();
    config.theme = 'ace/theme/monokai';
    config.mode = 'ace/mode/jade';
    return config;
}
```

## LICENSE

```
VL ゴシックフォントファミリライセンス
-------------------------------------

M+ FONTS 由来の部分については、M+ FONTS PROJECT のライセンスが適用されます。
添付の LICENSE_J.mplus を参照してください。

さざなみゴシックフォント由来の部分およびそれらの部品を元に改変した一部の文字
については、さざなみフォントと同様に修正BSDライセンスとします。オリジナルの
さざなみフォントのライセンスについては添付の README.sazanami を参照してくだ
さい。

その他　VL ゴシックフォントファミリで独自に追加した文字、および M+フォント
の部品を元に独自に作成した文字(2007/05/06以降に修正した漢字および記号)はM+
フォントと同じライセンスを摘要します。

なお、文書への埋め込みなど、フォントとしての再使用を目的としない用途におい
ては、以下で言う Redistribution には当たらず、制限なく行えるものとします。

Copyright (c) 1990-2003 Wada Laboratory, the University of Tokyo.
Copyright (c) 2003-2004 Electronic Font Open Laboratory (/efont/).
Copyright (C) 2002-2010 M+ FONTS PROJECT
Copyright (C) 2006-2010 Daisuke SUZUKI <daisuke@vinelinux.org>.
Copyright (C) 2006-2010 Project Vine <Vine@vinelinux.org>.
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:
1. Redistributions of source code must retain the above copyright notice,
   this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.
3. Neither the name of the Wada Laboratory, the University of Tokyo nor
   the names of its contributors may be used to endorse or promote products
   derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY WADA LABORATORY, THE UNIVERSITY OF TOKYO AND
CONTRIBUTORS ``AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT
NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE LABORATORY OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```
