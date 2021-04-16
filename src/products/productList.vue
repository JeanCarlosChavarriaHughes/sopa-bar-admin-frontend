<template>
  <div>
    <h1>Prueba</h1>
    <p>{{ product.name }}</p>
  </div>
</template>

<script>
export default Vue.extend({
  /*
  setup() {
    onMounted(async () => {
      const response = await fetch(
        'https://sopa-bar-desarrollo-develop.herokuapp.com/api/product'
      )
      product = await response.json()
    })
    */
  data() {
    return {
      product: null,
    }
  },
  mounted() {
    fetch('https://sopa-bar-desarrollo-develop.herokuapp.com/api/product')
      .then((res) => res.json())
      .then((data) => (this.product = data))
      .catch((err) => {
        console.log(err.meesage)
      })
  },
})
</script>

<style></style>
