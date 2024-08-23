<template>
  <div class="popup-overlay" v-if="visible">
    <div class="popup">
        <div class="closebtn">
            <img src="/src/assets/icon_close.svg" alt="close" @click="close" />
        </div>
      <div class="popup-content">
        <slot>{{ content }}</slot>
      </div>
      <div class="popup-footer">
        <div @click="confirm">确认</div>
        <div class="cancle" @click="close">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: "",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    confirm() {
      this.$emit("confirm");
      this.close();
    },
    close() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang="scss" scoped>
$mobile-breakpoint: 768px;

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 480px;
  padding: 40px;
  padding-top: 88px;
  padding-bottom: 48px;
  display: flex;
  flex-direction: column;

  position: relative;

  @media (max-width: #{$mobile-breakpoint}) {
    width: 279px;
    padding: 13px;
    padding-top: 60px;
    padding-bottom: 24px;
  }

  .closebtn {
    position: absolute;
    top: 20px;
    right: 20px;

    img {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }
}

.popup-content {
  margin-bottom: 42px;
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  @media (max-width: #{$mobile-breakpoint}) {
    font-size: 18px;
    margin-bottom: 40px;
    font-weight: 600;
  }
}

.popup-footer {
  display: flex;
  justify-content: space-between;

  padding: 0px 32px;
  @media (max-width: #{$mobile-breakpoint}) {
    padding: 0px;
  }

  div {
    width: 160px;
    height: 48px;
    border-radius: 100px;
    cursor: pointer;
    background: linear-gradient(91deg, #4e00ff -1%, #7928ff 101%);
    color: white;

    text-align: center;
    line-height: 48px;

    font-size: 20px;
    font-weight: normal;

    @media (max-width: #{$mobile-breakpoint}) {
      width: 120px;
      height: 40px;
      font-size: 16px;
      border-radius: 100px;
      line-height: 40px;
    }

    &.cancle {
      background: #d5d6e0;
      color: #050615;
    }
  }
}
</style>
