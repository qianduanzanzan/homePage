<template>
    <!-- <div class="grid10 not_trigger" @click="aaa">
        <div class="item self_trigger" :data-index="i" v-for="i in 1000">

        </div>
    </div>
    <el-dialog title="测试" :model-value="true" lock-scroll>
        <div style="height: 100vh;">
            <el-select-v2
                v-model="a"
                :options="options"
                placeholder="Please select"
                size="large"
                style="width: 240px"
            >
                <template #default="{item}">
                    <div style="background-color: red;color: #fff;padding: 0 -20px 0 -10px;" @click="bbb(item)">{{ item.label }}</div>
                </template>
            </el-select-v2>
        </div>
    </el-dialog> -->
    <test />
    <div>----------------------</div>
    <asyncComponent>
       <AsyncComp /> 
    </asyncComponent>
    <div>----------------------</div>
    <div class="item animate"></div>
    <div class="item animate1"></div>
</template>

<script setup lang="ts">
import { onMounted,reactive,ref } from 'vue';
import test from './component/test.vue';
import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent(() => import('./component/ddd.vue'))

const a = ref('')

console.time()
onMounted(() => {
    console.timeEnd()
})

const options:any = reactive([])

for (let index = 0; index < 1000; index++) {
    options.push({
        value:index,
        label:index
    })
}

const aaa = (event:any) => {
    console.log(event.target.dataset.index)
    ElMessage.success(event.target.dataset.index)
};

const bbb = (data:any) => {
    console.log(data)
};

</script>

<style scoped lang="scss">
.a{
    color: red;
    .b{
        color: blue;
    }
}

.grid10{
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 10px;
    .item{
        height: 30px;
        background-color: red;
        border-radius: 4px;
    }
}

.item{
    height: 30px;
    width: 30px;
    background-color: red;
    border-radius: 50%;
}
</style>
