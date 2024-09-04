<template>
    <div>
        403
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
router.replace({name: '404'})
</script>
