<template>
  <div class="main">
    <div class="banner-wrapper">
      <div class="container containerPositon">
        <div class="title-container">
          <div class="title">NikolaX</div>
          <div v-if="version" class="version">v{{ version }}</div>
        </div>
        <p>
          {{ $t("appIntroduce") }}
        </p>
        <div class="download-button" @click="download">
          {{ $t("download") }}
          <img
            src="@/assets/icon_download.svg"
            alt="download"
            class="icon"
          />
        </div>
      </div>
    </div>
    <div class="introduce-container">
      <div class="cardList">
        <Card
          v-for="(item, index) in cardInfoList"
          :key="item.title"
          :imageSrc="item.imageSrc"
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
          :position="index % 2 === 0 ? 'left' : 'right'"
        />
      </div>
    </div>


    <Popup :visible="isPopupVisible" @update:visible="isPopupVisible = $event" @confirm="downloadDweb">
      系统中未安装 Dweb 应用无法安装 Nikola X，先前往 Dweb 官网安装 Dweb？
    </Popup>
  </div>
</template>

<script>
import Card from "../components/infoblock.vue";
import Popup from '../components/Popup.vue';
import applistService from '../utils/applist'

import {downloadApp} from '../utils/index.ts'

import intro1 from '@/assets/intro-1.png';
import intro2 from '@/assets/intro-2.png';
import intro3 from '@/assets/intro-3.png';
import icon3 from '@/assets/icon-3.svg';
import icon4 from '@/assets/icon-4.svg';
import icon5 from '@/assets/icon-5.svg';

export default {
  components: {Card, Popup},
  computed: {
    cardInfoList() {
      return [
        {
          imageSrc: intro1,
          title: this.$i18n.t("function1_title"),
          icon: icon3,
          description: this.$i18n.t("function1_content"),
        },
        {
          imageSrc: intro2,
          title: this.$i18n.t("function2_title"),
          icon: icon4,
          description: this.$i18n.t("function2_content"),
        },
        {
          imageSrc: intro3,
          title: this.$i18n.t("function3_title"),
          icon: icon5,
          description: this.$i18n.t("function3_content"),
        },
      ];
    },
  },

  data() {
    return {
      isPopupVisible: false,
      appdata: null,
      version: '',
    };
  },

  methods: {
    download() {
      applistService.jumpApp(this.appdata, () => {
        this.isPopupVisible = true;
      })
    },

    downloadDweb() {
      const packagename = 'info.bagen.dwebbrowser'
      const iosLinkUrl = `https://apps.apple.com/cn/app/6443558874`
      downloadApp(packagename, iosLinkUrl)
    }
  },

  async mounted() {
    const applist = await applistService.getApplist()
    console.log('applist', applist)
    applist.find((item) => {
      if (item.name.indexOf('NikolaX') > -1) {
        console.log('找到了', item)
        this.appdata = item

        this.version = item.latest.split('-')[1]
      }
    })
  },
};
</script>

<style scoped lang="scss">
$mobile-breakpoint: 768px;

main {
  padding: 0;
  width: 100%;
  height: auto;
}

.banner-wrapper {
  width: 100%;
  height: 50rem;
  background-image: url("@/assets/bg.png");
  background-size: 100% 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  @media (max-width: #{$mobile-breakpoint}) {
    background-image: url("@/assets/bg_mobile.png");
  }

  .container {
    position: absolute;
    left: 1000px;
    top: 300px;
    width: 560px;
    height: 256px;

    @media (max-width: #{$mobile-breakpoint}) {
      left: 55px;
      top: 332px;
      width: 280px;
      height: 260px;
      color: white;
    }

    .title-container {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .title {
        font-size: 48px;
        font-weight: bold;
        line-height: 40px;
      }

      .version {
        height: 28px;
        padding: 0px 6px;
        border-radius: 6px;
        margin-left: 8px;
        /* 背景色/白32% */
        background: rgba(255, 255, 255, 0.32);
        font-size: 20px;
        font-weight: normal;
        line-height: 28px;
        letter-spacing: 0.02em;
        color: #7A7B90;
      }
    }
    

    p {
      font-size: 18px;
      font-weight: normal;
      line-height: normal;
      letter-spacing: 0.02em;
      margin-bottom: 48px;
    }

    .download-button {
      width: 160px;
      height: 48px;
      border-radius: 100px;
      background: linear-gradient(91deg, #4e00ff -1%, #7928ff 101%);
      color: white;
      padding: 10px 20px;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      img {
        margin-left: 8px;
        width: 20px;
        height: 20px;
      }
    }
  }
}

.introduce-container {
  margin-top: 40px;
  width: 100%;
  .cardList {
    width: 1200px;
    margin: 0 auto;

    @media (max-width: #{$mobile-breakpoint}) {
      width: 92%;
      overflow: hidden;
    }
  }
}
</style>
