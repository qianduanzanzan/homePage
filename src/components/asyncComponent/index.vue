<template>
    <Suspense>
        <template #fallback>
            <div class="loading flex f-x-c f-y-c" :style="{height:props.defaultHeight,width:props.defaultWidth}">
                <div class="loading-box pos-r">
                    <div class="pos-a pos-y-t pos-x-l loading-item bg-red"></div>
                    <div class="pos-a pos-y-t pos-x-r loading-item bg-blue"></div>
                    <div class="pos-a pos-y-b pos-x-l loading-item bg-yellow"></div>
                    <div class="pos-a pos-y-b pos-x-r loading-item bg-green"></div>
                </div>
            </div>
        </template>
        <slot></slot>
    </Suspense>
</template>

<script setup lang="ts">

const props = defineProps({
    defaultHeight: {
        type: String,
        default: '120px'
    },
    defaultWidth: {
        type: String,
        default: '100%'
    }
})
</script>

<style scoped lang="scss">
.loading-box{
    animation: loading 2s linear infinite;
    .loading-item{
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }
}

@keyframes loading {
    0%{
        transform: rotate(0deg);
        width: 100px;
        height: 100px;
    }
    50%{
        transform: rotate(360deg);
        width: 60px;
        height: 60px;
    }
    100%{
        transform: rotate(720deg);
        width: 100px;
        height: 100px;
    }
}

.bg-blue{
    background-color: #00f;
}

.bg-yellow{
    background-color: #ff0;
}

.bg-green{
    background-color: #0f0;
}

.bg-red{
    background-color: red;
}
</style>
