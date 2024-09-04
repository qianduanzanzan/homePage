<template>
    <div class="app-wrapper">
      <el-config-provider :locale="zhCn">
        <router-view v-slot="{ Component }">
            <component :is="Component" />
        </router-view>
      </el-config-provider>
    </div>
  </template>

<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>
