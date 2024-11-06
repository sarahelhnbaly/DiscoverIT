<template>
  <div>
    <h1>Posts</h1>
    <form @submit.prevent="addPost">
      <input v-model="newPost.title" placeholder="Title" required />
      <textarea v-model="newPost.content" placeholder="Content" required></textarea>
      <button type="submit">Add Post</button>
    </form>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
        <button @click="deletePost(post.id)">Delete</button>
        <button @click="editPost(post)">Edit</button>
      </li>
    </ul>

    <div v-if="editingPost">
      <h3>Edit Post</h3>
      <form @submit.prevent="updatePost">
        <input v-model="editingPost.title" placeholder="Title" required />
        <textarea v-model="editingPost.content" placeholder="Content" required></textarea>
        <button type="submit">Update Post</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      newPost: {
        title: '',
        content: '',
      },
      editingPost: null,
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      const response = await axios.get('http://localhost:8080/api/posts');
      this.posts = response.data;
    },
    async addPost() {
      const response = await axios.post('http://localhost:8080/api/posts', this.newPost);
      this.posts.push(response.data);
      this.newPost.title = '';
      this.newPost.content = '';
    },
    async deletePost(id) {
      await axios.delete(`http://localhost:8080/api/posts/${id}`);
      await this.fetchPosts(); // Refresh the list
    },
    editPost(post) {
      this.editingPost = { ...post };
    },
    async updatePost() {
      const response = await axios.put(`http://localhost:8080/api/posts/${this.editingPost.id}`, this.editingPost);
      const index = this.posts.findIndex(post => post.id === this.editingPost.id);
      this.posts.splice(index, 1, response.data);
      this.editingPost = null; // Reset the editing form
    },
  },
};
</script>