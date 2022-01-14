<template>
  <div>
    Logged in
    <div v-if="loggedIn">Yes</div>
    <div v-else>No</div>
    <div v-if="loggedIn">{{email}}</div>
    <button class="but" @click="signOut">Sign out</button>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  name: "top-header",
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          console.log("signed in");
          this.loggedIn = true;
          this.email = user.email;
        } else {
          // No user is signed in.
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
        }
      });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "login" });
        });
    }
  },
  data() {
    return {
      loggedIn: false,
      email: '',
    };
  }
};
</script>

<style lang="scss" scoped>
div {
  color: inherit;
}
</style>