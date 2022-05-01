<template>
  <div v-if="comments">
    <ul>
        <li v-for="comment in comments" :key="comment">
            <div class="text-left border border-secondary my-3 px-2 d-flex box-comment">
                <img class="user my-auto mx-2" src="https://iconarchive.com/download/i102645/graphicloads/flat-finance/person.ico" alt="img user">
                <div class="my-2">
                    <p>User <strong>{{comment.user.username}}</strong> say:</p>
                    <p>"{{comment.body}}"</p>
                </div>
            </div>
        </li>
    </ul> 
  </div>
</template>
<script>
import CommentService from "@/services/commentservice";
import { useRoute } from 'vue-router';


export default {
  name: "CommentsComponent",

  data() {
    return {
      comments: [],
    };
  },
  mounted() {
    const route = useRoute()
    console.log('id router param', route.params.id);
    CommentService.getComment(route.params.id)
        .then(response => {
            this.comments = response.data.comments;
            console.log("comments", this.comments);
        })
        .catch(err => {
            console.error('CommentService error', err)
        })
        
  },
};
</script>
<style scoped>
.user {
    width: 50px;
    height: 50px;
}

ul {
    list-style-type: none;
}
.box-comment {
  box-shadow: 5px 10px 5px 5px rgba(0, 0, 0, 0.25);
}

</style>