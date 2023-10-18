<template>
    <div class="vedio">
        <!-- <video id="valveVideogj" class="video-js vjs-default-skin" autoplay
            style="width: 100%;height: 100%; object-fit: fill"></video> -->
        <video :id=dtid class="video-js vjs-default-skin" autoplay
            style="width: 100%;height: 100%; object-fit: fill"></video>
    </div>
</template>
<script lang="ts" setup>


import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { onMounted, ref, defineProps } from 'vue';
const props = defineProps({
    rtsp: {
        type: String,
        required: true
    },
    dtid :{
        type:String,
        required:true
    }
});
const options = (src) => {
    return {
        autoplay: true, // true,浏览器准备好时开始播放。
        muted: true, // 默认情况下将会消除音频。
        loop: true, // 导致视频一结束就重新开始。
        controls: false, //取消视频中的进度条
        preload: 'auto', // auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',  //汉化
        fluid: true, // 当true时，将按比例缩放以适应其容器。
        sources: [{
            type: 'application/x-mpegURL',
            src  //视频播放地址
        }],
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 无法播放媒体源时显示的默认信息。
        textTrackDisplay: false,
    }
}
let player = ref(null);
// const rtsp = ref('http://hls01open.ys7.com/openlive/b78ff5ae7b7b4ed983e7855371127fec.hd.m3u8')
onMounted(() => {
    try {
        player = videojs(props.dtid, options(props.rtsp), () => {
            player.play();
        });
        // player = videojs("valveVideogj", options(rtsp.value), () => {
        //     player.play();
        // });
    } catch (error) {
        console.log(error);
    }
})

</script>

<style  scoped>
.vedio {
    width: 632.89px;
    height: 356px;
    background: #000;
    padding: 3px;
    border: 1px solid #707070;
    margin: 30px 30px 0 30px;
}
</style>