<script setup>
import videoplayer from './components/videoplayer.vue';
import 'video.js/dist/video-js.css'  //videojs样式
import { ref } from 'vue'


const config = ref({
  data: [55],
  shape: 'round'
});
const videoList = ref([
  {
    name: '水坝下游球机',
    videourl: 'http://hls01open.ys7.com/openlive/6c99244cadbd4e558f65560f1e02df83.hd.m3u8'
  },
  {
    name: '水坝球机2',
    videourl: 'http://hls01open.ys7.com/openlive/32f44982e7a346f7a361a832ccda754e.hd.m3u8'
  },
  {
    name: '水坝球机1',
    videourl: 'http://hls01open.ys7.com/openlive/88c0b5bb0c5b434a915aac3d6e318b13.hd.m3u8'
  },
  {
    name: '桥头闸门枪机2',
    videourl: 'http://hls01open.ys7.com/openlive/fe8c8869ccb14ca09827bdb42bf85457.hd.m3u8'
  },
  {
    name: '桥头闸门枪机3',
    videourl: 'http://hls01open.ys7.com/openlive/b6165221dd7b4fa1b7006a9c4ec1e283.hd.m3u8'
  },
  {
    name: '桥头闸门枪机1',
    videourl: 'http://hls01open.ys7.com/openlive/9381ffbd747d41f4b6583e269b2fddd6.hd.m3u8'
  },
  {
    name: '桥头室外球机1',
    videourl: 'http://hls01open.ys7.com/openlive/1e9235d4936d4073931a742be9a654d2.hd.m3u8'
  },
  {
    name: '控制中心球机',
    videourl: 'http://hls01open.ys7.com/openlive/c5b70d26575d47b4a9dc821e5ef300f0.hd.m3u8'
  },
  {
    name: '桥头上游全景',
    videourl: 'http://hls01open.ys7.com/openlive/680ae14943604bf08b112335efb16d43.hd.m3u8'
  },
  {
    name: '发电机室球机',
    videourl: 'http://hls01open.ys7.com/openlive/153e12334cef4ea09275f6224c5ccd61.hd.m3u8'
  },
  {
    name: '配电室球机',
    videourl: 'http://hls01open.ys7.com/openlive/b4e300463bca42009dd291a2d31fee2d.hd.m3u8'
  },
  {
    name: '桥头下游全景',
    videourl: 'http://hls01open.ys7.com/openlive/25e06656e10c48dda5bef64a3faee747.hd.m3u8'
  },
  {
    name: '桥头室外球机2',
    videourl: 'http://hls01open.ys7.com/openlive/25d812c241c644508cb204b31704250b.hd.m3u8'
  },
  {
    name: '闸门控制室球机',
    videourl: 'http://hls01open.ys7.com/openlive/7dddbabe2d8f486bbeb35e034cc96e78.hd.m3u8'
  },
  {
    name: '气象站球机',
    videourl: 'http://hls01open.ys7.com/openlive/49f54ddb5d9d42aebeab3649ab71b133.hd.m3u8'
  },
  {
    name: '取水塔球机',
    videourl: 'http://hls01open.ys7.com/openlive/64c3c0dc5bd64c93a0c1d993909869ee.hd.m3u8'
  },
  {
    name: '取水塔顶部全景',
    videourl: 'http://hls01open.ys7.com/openlive/4bd10b6c091442b29b2b4597083766f6.hd.m3u8'
  },
  {
    name: '取水塔枪机1',
    videourl: 'http://hls01open.ys7.com/openlive/96150969316744adb6eb21380670cad3.hd.m3u8'
  },
  {
    name: '取水塔枪机2',
    videourl: 'http://hls01open.ys7.com/openlive/b78ff5ae7b7b4ed983e7855371127fec.hd.m3u8'
  },
]);
const videoShow = ref('http://hls01open.ys7.com/openlive/b78ff5ae7b7b4ed983e7855371127fec.hd.m3u8');
const dtid = ref('vi');
let i = 0 ;
const handleClick = () => {
  // console.log(videoList.value.length);
  if (i < videoList.value.length) {
    i++;
    videoShow.value = videoList.value[i].videourl;
    dtid.value = videoList.value[i].name;
  } else {
    i = 0;
    videoShow.value = videoList.value[i].videourl;
    dtid.value = videoList.value[i].name;
  };
};
</script>

<template>
  <div>
    <videoplayer  :rtsp = videoShow :key = dtid :dtid = dtid></videoplayer>
    <!-- <videoplayer></videoplayer> -->
    <button @click="handleClick"> 点击切换视频</button>
  </div>
</template>

<style scoped>
button {
  height: 30px;
  width: 100px;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
