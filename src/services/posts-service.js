import {
  handleSuccessResponse,
  handleErrorResponse,
  RestBaseService,
} from './rest-base-service';


class PostsService extends RestBaseService {
  fetchAllPosts() {
    return this
      .get('/posts')
      .then(handleSuccessResponse)
      .catch(handleSuccessResponse);
  }

  fetchSinglePost(postId) {
    return this
      .get(`/posts/${postId}`)
      .then(handleSuccessResponse)
      .catch(handleSuccessResponse);
  }

  fetchSinglePostComments(postId) {
    return this
      .get(`/posts/${postId}/comments`)
      .then(handleSuccessResponse)
      .catch(handleSuccessResponse);
  }
}


export default PostsService;