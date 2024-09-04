<template>
    <!-- <div id="scrollContainer" ref="scrollContainerRef">
        <div style="height: 2000px;">
            <div class="loading flex f-x-c f-y-c">
                <div class="loading-box pos-r">
                    <div class="pos-a pos-y-t pos-x-l loading-item bg-red"></div>
                    <div class="pos-a pos-y-t pos-x-r loading-item bg-blue"></div>
                    <div class="pos-a pos-y-b pos-x-l loading-item bg-yellow"></div>
                    <div class="pos-a pos-y-b pos-x-r loading-item bg-green"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="line"></div> -->
    <div class="view1 view pos-f pos-x-l pos-y-t">
        <div class="item pos-a pos-c ani1 ani" style="background-color: red;"></div>
        <div class="item pos-a pos-c ani2 ani" style="background-color: blue;"></div>
        <div class="item pos-a pos-c ani3 ani" style="background-color: green;"></div>
        <div class="avatar pos-a pos-c">
            <img class="avatar-img" src="https://img2.baidu.com/it/u=1030204962,1686607651&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1725555600&t=666175b0c07a33ec0ccba72c550b22c8" alt="" srcset="">
        </div>
    </div>
    <div class="view2 view pos-f pos-x-l">

    </div>
    <div class="scroll-container"></div>
</template>

<script setup lang="ts">
import { ref,onMounted,Ref } from 'vue';
</script>

<style scoped lang="scss">
.view{
    height: 100vh;
    width: 100%;
}
.view2{
    animation: view2 2s linear forwards;
    background-color: #ff0;
    animation-timeline: scroll();
    animation-range: 100vh 200vh;
    top: 100vh;
}
@keyframes view2 {
    0%{
        top:100vh
    }
    100%{
        top: 0;
    }
}
.view1{
    animation: view 2s linear forwards;
    animation-timeline: scroll();
    animation-range: 100vh 200vh;
    .avatar{
        padding: 20px;
        border-radius: 50%;
        border: 1px solid #ccc3;
        z-index: 2;
        .avatar-img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: scale-down;
            z-index: 3;
        }
    }
    .ani1{
        animation: a 2s linear 1s forwards;
        animation-timeline: scroll();
        animation-range: 0 100vh;
        transform: translate(0,0);
    }
    .ani2{
        animation: b 3s linear .5s forwards;
        animation-timeline: scroll();
        animation-range: 0 100vh;
        transform: translate(0,0);
    }
    .ani3{
        animation: c 2s linear forwards;
        animation-timeline: scroll();
        animation-range: 0 100vh;
        transform: translate(0,0);
    }
}

@keyframes view {
    0%{
        top:0
    }
    100%{
        top: -100vh;
    }
}

@keyframes a {
    0%{
        transform: translate(0,0);
    }
    10%{
        transform: translate(-30px,10px);
    }
    50%{
        transform: translate(-80px,40px);
    }
    90%{
        transform: translate(-120px,90px);
    }
    100%{
        transform: translate(-150px,100px);
    }
}
@keyframes b {
    0%{
        transform: translate(0,0);
    }
    10%{
        transform: translate(30px,10px);
    }
    50%{
        transform: translate(60px,30px);
    }
    90%{
        transform: translate(100px,70px);
    }
    100%{
        transform: translate(120px,100px);
    }
}
@keyframes c {
    0%{
        transform: translate(0,0);
    }
    10%{
        transform: translate(20px,-10px);
    }
    50%{
        transform: translate(50px,-40px);
    }
    90%{
        transform: translate(90px,-80px);
    }
    100%{
        transform: translate(100px,-90px);
    }
}



.scroll-container{
    height: 400vh;
}

.loading{
    height: 100vh;
    width: 100%;
    top: 0;
    position: fixed;
}

.loading-box{
    width: 150px;
    height: 150px;
    animation: loading 2s linear .1s;
    animation-fill-mode: forwards;
    animation-timeline: scroll();
    animation-range: 0 500px;
    .loading-item{
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }
}

.line{
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: red;
    top: 500px;
    z-index: 2;
}

// .loading-box1{
//     animation: loading 2s linear 1s infinite;
//     animation-fill-mode: forwards;
//     animation-timeline: scroll(root);
//     .loading-item{
//         width: 25px;
//         height: 25px;
//         border-radius: 50%;
//     }
// }

@keyframes loading {
    0%{
        transform: rotate(0deg);
        width: 150px;
        height: 150px;
    }
    50%{
        transform: rotate(360deg);
        width: 100px;
        height: 100px;
    }
    100%{
        width: 150px;
        height: 150px;
        transform: rotate(720deg);
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

.item{
    height: 30px;
    width: 30px;
    background-color: red;
    border-radius: 50%;
}
.animate{
    position: absolute;
    top: 100px;
    left: 0;
    animation: animate 2s linear forwards;
}

.animate1{
    margin-top: 40px;
    animation: animate1 2s linear forwards;
    will-change: transform;
}

@keyframes animate {
    0%{
        left: 0;
    }
    85%{
        left: 510px;
        transform: scale(1.2);
    }
    100%{
        left: 500px;
    }
}

@keyframes animate1 {
    0%{
        transform: translateX(0);
    }
    85%{
        transform: translateX(510px) scale(1.2);
    }
    100%{
        transform: translateX(500px);
    }
}
</style>
