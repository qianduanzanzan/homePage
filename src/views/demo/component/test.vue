<template>
    <el-dialog title="提示" v-model="dialogVisible">
        123456789
    </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const dialogVisible = ref(false)

const showDialog = () => {
    dialogVisible.value = true
}

defineExpose({
    showDialog
})

</script>
