import axios from "axios";

class CommentService {
    getComment(id) {
        return axios
        .get(`https://dummyjson.com/comments/post/${id}`)
    }
}

export default new CommentService();