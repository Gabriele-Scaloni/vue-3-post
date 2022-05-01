<template>
  <div v-if="post" class="row my-4 p-3 border border-light rounded">
    <div class="col-sm-12 col-lg-8 my-2 border-right">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
      <div class="d-flex justify-content-between">
        <p>{{post.reactions}} reactions</p>
        <router-link :to="'/comments/' + post.id" class="btn btn-primary">
            Go to Comments
        </router-link>
      </div>
    </div>
    <div class="col-sm-12 col-lg-4 my-2">
      <h5>Tags:</h5>
      <div>
        <ul class="d-flex justify-content-around">
            <li v-for="tag in post.tags" :key="tag"> 
                <button class="btn btn-primary" type="submit">{{tag}}</button>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import PostService from "@/services/postservice";

export default {
  name: "PostComponent",
  data() {
    return {
      post: null,
    };
  },
  mounted() {
    console.log("oh no");
    PostService.getPost()
        .then(response => {
            this.post = response.data;
            console.log("post", this.post);
        })
        .catch(err => {
            console.error('PostService error', err)
        })
  },
};
</script>
<style scoped>

ul {
    list-style-type: none;
}

</style>

