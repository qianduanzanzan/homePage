<template>
    <div>
        123456
    </div>
</template>

<script setup lang="ts">
const test = () => {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 10000)
    })
}

await test()
</script>
