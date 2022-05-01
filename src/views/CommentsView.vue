<template>
    <div class="post">
        <h1 class="my-3">Comments</h1>
        <CommentsComponent key=""/>
    </div>
</template>

<script>
import CommentsComponent from '@/components/CommentsComponent.vue';

export default {
    name: "CommentsView",
    components: {
        CommentsComponent,
    }
}

</script>

<style scoped>

</style>