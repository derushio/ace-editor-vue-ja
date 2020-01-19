<template lang='pug'>
.test
    p test
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Test extends Vue {}
</script>

<style lang='stylus' scoped>
.test
    p
        color: red;
</style>
