import axios from "axios";

class PostService {
    getPost() {
        return axios
            .get('https://dummyjson.com/posts/2')
    }
}

export default new PostService();
