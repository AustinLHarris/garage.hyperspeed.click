<template>
  <div>
    <h1>Austin's Car Collection</h1>
    <h4>Cars will go on sale during the next auction. Contact austinscargarage@example.com for more details</h4>
    <br>
    <br>
    <br>
    <br>
    <div class="wrapper">
      <div class="search">
        <form class="pure-form">
          <!-- <i class="fas fa-search"></i><input v-model="searchText" /> -->
        </form>
      </div>
    </div>
    <CarList :cars="cars" />
  </div>
</template>

<script>
import CarList from "../components/CarList.vue";
export default {
  name: "Browse",
  components: {
    CarList,
  },
  data() {
    return {
      searchText: "",
      cars: this.$root.$data.cars,
    };
  },
  computed: {
    products() {
      return this.$root.$data.cars.filter((car) =>
       car.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0
       );
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}

.image h2 {
  font-style: italic;
}

h1 {
  font-size: 50px;
  text-align: center;
}

h4 {
  font-size: 12px;
  text-align: center;
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
    column-count: 3;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .image-gallery {
    column-count: 2;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .image-gallery {
    column-count: 1;
  }
}
</style>
