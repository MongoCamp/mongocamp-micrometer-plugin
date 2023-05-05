<script setup lang="ts">
import pkg from '../../../../package.json'</script>
<template>
    <div class="language-plugin">
        <button title="Copy Code" class="copy"></button>
        <span class="lang">plugin</span>
        <pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">"{{ pkg.organization }}:{{ pkg.name }}_2.13:{{ pkg.version }}"</span></span></code></pre>
    </div>
</template>

<style scoped>
</style>