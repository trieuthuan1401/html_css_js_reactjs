<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <div class="nav navbar-nav">
          <a class="nav-item nav-link active" href="#">Home</a>
          <a class="nav-item nav-link" href="#">Product</a>
        </div>

        <div>
          <div class="dropdown open">
            <button
              class="btn btn-secondary dropdown-toggle ml-2"
              type="button"
              id="triggerId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >0 Cart</button>

            <MiniCart />
            
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import MiniCart from "./MiniCart";
export default {
  components: {
    MiniCart,
  },
};
</script>

<style scoped>
</style>