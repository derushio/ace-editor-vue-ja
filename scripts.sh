#!/bin/bash -eu

function clean() {
    $(npm bin)/rimraf './dist/*'
}

function build() {
    yarn install
    mv 'node_modules/vue' 'node_modules/_vue'
    clean && $(npm bin)/webpack || true
    mv 'node_modules/_vue' 'node_modules/vue'
}

function start() {
    node dist/main.bundle.js
}

function dev() {
    build && start
}

function build_typedoc() {
    typedoc --name "$1" --mode 'file' --out './document/typedoc' './src'
}

if [ -z ${2+UNDEF} ]; then
    $1
else
    $1 $2
fi
