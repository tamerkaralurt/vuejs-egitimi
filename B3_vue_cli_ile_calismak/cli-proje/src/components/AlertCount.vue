<template>
  <div class="alert alert-success">
    <button @click="count++">{{ count }} kez tıklandı</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  }
};
</script>
