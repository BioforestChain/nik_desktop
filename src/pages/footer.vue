<template>
  <div class="footer">
    <div class="logo-container">
      <img src="/src/assets/logo_black.svg" alt="NikolaX Logo" class="logo" />
    </div>
  </div> 
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped lang="scss">
$mobile-breakpoint: 768px;
.footer {
  text-align: center;
  padding: 1rem;
  margin-top: 112px;

  @media (max-width: #{$mobile-breakpoint}) {
    margin-top: 0;
  }
}   

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 2rem;
}
</style>