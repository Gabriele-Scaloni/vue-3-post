<template>
    <div class="post">
        <h1 class="my-3">My Post</h1>
        <PostComponent key=""/>
    </div>
</template>

<script>
import PostComponent from '@/components/PostComponent.vue';

export default {
  name: "PostView",
  components: {
    PostComponent,
    }
}

</script>

<style scoped>

</style>