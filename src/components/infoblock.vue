<template>
    <div :class="['card', positionClass]">
      <div class="content">
        <div class="title">
            <img :src="icon" alt="icon" />
            {{ title }}
        </div>
        <div class="subtitle">{{ description }}</div>
      </div>
      <div class="image-container">
        <img :src="imageSrc" alt="img" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EfficientTradingCard',
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      },
      position: {
        type: String,
        default: 'left',
        validator: function(value) {
          return ['left', 'right'].includes(value);
        }
      }
    },
    computed: {
      positionClass() {
        return this.position === 'right' ? 'content-right' : 'content-left';
      }
    },
  }
  </script>
  
  <style lang="scss" scoped>
  $mobile-breakpoint: 768px;

  .card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: auto;
    border-radius: 32px;
    padding: 60px 88px;
    background: #F8F7F9;
    margin-bottom: 88px;
  
    &.content-left {
      flex-direction: row;
    }
  
    &.content-right {
      flex-direction: row-reverse;
    }
  
    .image-container {
      flex: 0 0 auto;
  
      img {
        width: 360px;
        height: 360px;
        border-radius: 8px;
      }
    }
  
    .content {
      width: 560px;
  
      .title {
        margin-bottom: 20px;
        color: #333;
        font-size: 44px;
        font-weight: bold;
        line-height: 40px;
        color: #050615;
        display: flex;
        align-items: center;

        img {
            width: 48px;
            height: 48px;
            margin-right: 12px;
        }
      }
  
      .subtitle {
        font-size: 18px;
        font-weight: normal;
        line-height: normal;
        color: #7A7B90;
      }
    }
  }

  @media (max-width: #{$mobile-breakpoint}) {
    .card {
      padding: 48px 56px;
      flex-wrap: wrap;
      justify-content: center;
      height: auto;
      margin-bottom: 8px;

      .image-container {
        margin-top: 45px;
        flex: 0 0 auto;
    
        img {
          width: 250px;
          height: 250px;
        }
      }

      .content {
        width: 100%;

        .title {
          font-size: 28px;

          img {
            width: 36px;
            height: 36px;
          }
        }
        .subtitle {
          font-size: 15px;
        }
      }
    }
  }
  </style>