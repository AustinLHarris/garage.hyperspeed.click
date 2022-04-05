<template>
  <div class="wrapper">
    <div class="products">
      <div class="product" v-for="car in cars" :key="car.id">
        <div class="info">
          <h1>{{car.Name}}</h1>
        </div>
        <div class="image">
          <img :src="car.Image" alt="IMAGE COMING SOON">
        </div>
        <div class="cylinders">
          <h1>Details</h1>
          <p>{{car.Miles_per_Gallon}} MPG</p>
          <p>{{car.Cylinders}} Cylinders</p>
          <p>Horsepower: {{car.Horsepower}}</p>
          <p>Weight: {{car.Weight_in_lbs}} lbs</p>
          <p>Year: {{car.Year}}</p>
          
        </div>
      </div>
    </div>
  </div>
</template>



<script>
  export default {
    methods: {
      
    },
    name: 'CarList',
      props: {
        cars: Array
      },
    computed: {
    //   cart() {
    //     return this.$root.$data.calendar.length;
    //   }
    }
  }

  
</script>




<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 500px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 500px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #a50000;
  color: #000;
  padding: 10px 10px 30px;
  height: 40px;
}

.info h1 {
  font-size: 26px;
  text-transform: capitalize;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>