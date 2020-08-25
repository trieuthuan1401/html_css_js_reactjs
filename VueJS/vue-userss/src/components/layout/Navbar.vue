<template>
  <nav class="navbar" role="navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </router-link>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/about" class="navbar-item">About</router-link>
          <router-link to="/contact" class="navbar-item">Contact</router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <a class="button is-primary">
              <strong>Dashboard</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped></style>
