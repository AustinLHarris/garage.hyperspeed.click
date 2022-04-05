<template>
<div class="home">
  <h1>HELP PAGE</h1>
  <div class="heading">
    <!-- <div class="circle">1</div> -->
    <h3>Ask a Mechanic</h3>
  </div>
  <div class="add">
    <div class="form">
      <input v-model="title" placeholder="Full Name">
      <input v-model="description" placeholder="Description of Problem">
      <p></p>
      <input type="file" name="photo" @change="fileChanged">
      <button @click="upload">Upload</button>
    </div>
    <div class="upload" v-if="addItem">
      <!-- <h2>{{addItem.title}}</h2>
      <h4>{{addItem.description}}</h4>
      <img :src="addItem.path" /> -->
      
    </div>
  </div>

  <h2>All Questions & Comments</h2>
  <section class="image-gallery">
    <div class="image" v-for="item in items" :key="item.id">
      <div class="question">
        <h2 class="name">{{item.title}}</h2>
        <img :src="item.path" />
        <h4 class="problem">{{item.description}}</h4>
      </div>
      <div class="comment">
        <h2>{{item.commenter}}</h2>
        <h4>{{item.comment}}</h4>
      </div>
    </div>
  </section>
</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
     title: "",
     description: "",
     file: null,
     addItem: null,
     items: [],
     comment:"",
     commenter:"",
    
    }
  },
    created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/items', {
          title: this.title,
          path: r1.data.path,
          description: this.description
        });
        this.addItem = r2.data;
        this.getItems();
      } catch (error) {
        console.log(error);
      }
    },
    selectItem(item) {
      this.findTitle = "";
      this.findItem = item;
    },
    fileChanged(event) {
      this.file = event.target.files[0]
    },
  }
}
</script>

<style scoped>
h1 {
  font-size: 50px;
  text-align: center;
}

h2 {
  font-size: 35px;
  text-align: center;
}

.question {
  align-self: center;
  width: 700px;
  border: 5px;
  border-color:black;
  flex-direction: row;

}
.question image {
  align-self: right;
}

.image h2 {
  font-size: 18px;
  border-bottom: 1px;
  border-top: 1px;
  border-color: darkslategray;
  margin: 5dp 5dp 5dp 5dp;
  text-align: left;
  size: 200px;
  border: 5px;
  border-color:black;
}
.comment {
  padding-left: 50px;
  padding-top: 5px;
}
h4 {
  font-size: 14px;
}

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.image-gallery {
  column-gap: 1.5em;
}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

.image img {
  width: 100%;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .image-gallery {
    column-count: 1;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .image-gallery {
    column-count: 1;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .image-gallery {
    column-count: 1;
  }
}
</style>
