<template>
  <Header />
  <Main />
  <Footer />
</template>

<script setup>
import Header from './pages/header.vue';
import Main from './pages/main.vue';
import Footer from './pages/footer.vue';
import { onMounted, provide, ref } from 'vue';

const isMobile = ref(false);

const  updateIsMobile = () => {
  const clientWidth = document.documentElement.clientWidth || window.innerWidth;
  isMobile.value = clientWidth < 768; // 设置手机端阈值
}

const setRemUnit = () => {
  const baseSizeMobile = 16; // 手机端基础字体大小
  const baseSizeDesktop = 18; // 桌面端基础字体大小
  const designWidthMobile = 390; // 手机端设计稿宽度
  const designWidthDesktop = 1920; // 桌面端设计稿宽度
  const maxWidthDesktop = 1920; // 桌面端最大宽度

  let clientWidth = document.documentElement.clientWidth || window.innerWidth;

  let baseSize;
  let designWidth;

  // 根据屏幕宽度设置基准值
  if (clientWidth < 768) {
    // 手机端
    baseSize = baseSizeMobile;
    designWidth = designWidthMobile;
  } else {
    // 桌面端
    baseSize = baseSizeDesktop;
    designWidth = designWidthDesktop;

    // 限制最大宽度，防止超宽屏字体过大
    if (clientWidth > maxWidthDesktop) {
      clientWidth = maxWidthDesktop;
    }
  }

  const scale = clientWidth / designWidth;
  document.documentElement.style.fontSize = `${baseSize * scale}px`;

  updateIsMobile()
}

onMounted(() => {
  console.log('onMounted'); 
  setRemUnit()
  window.addEventListener('resize', setRemUnit);
});

provide('isMobile', isMobile);
</script>

<style src="./style.css"></style>