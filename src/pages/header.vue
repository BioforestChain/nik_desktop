<template>
  <header class="header" :style="{ paddingLeft: isMobile ? '1.5rem' : '3rem' , paddingRight: isMobile ? '1.5rem' : '3rem' }">
    <div class="logo-container">
      <img v-if="isMobile" src="/src/assets/logo.svg" alt="NikolaX Logo" class="logo" />
      <img v-else src="/src/assets/logo_black.svg" alt="NikolaX Logo" class="logo" />
    </div>
    <div ref="dropdown" class="icon-container">
        <img v-if="isMobile" @click="toggleDropdown" src="/src/assets/language.svg" alt="Language" class="icon" />
        <img v-else @click="toggleDropdown" src="/src/assets/language_desk.svg" alt="Language" class="icon" />

        <div v-if="isOpen" class="dropdown-menu">
          <div>
            <div
              v-for="language in languages"
              :key="language.code"
              @click="$i18n.locale = language.code, isOpen = false"
              class="dropdown-item"
            >
              {{ language.name }}
            </div>
          </div>
        </div>
    </div>
  </header>
</template>
<script setup>
import { ref, inject, onMounted, onUnmounted} from 'vue';

const isOpen = ref(false);
const languages = ref([
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
]);

const dropdown = ref(null);

const handleClickOutside = (event) => {
  if (isOpen.value && dropdown.value && !dropdown.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const isMobile = inject('isMobile');
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.2);
  z-index: 1;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 32px;
}

.title {
  font-size: 1.5rem;
  color: white;
}

.icon-container  {
  position: relative;
  .dropdown-menu {
    position: absolute;
    right: 0;
    width: 120px;
    background-color: #ffffff;
    border: 1px solid #cbd5e0;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .dropdown-item {
      padding: 8px 16px;
      cursor: pointer;
      transition: background-color 0.3s;
      text-align: center;

      &:hover {
        background-color: #f7fafc;
      }
    }
  }

  .icon {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
}
</style>