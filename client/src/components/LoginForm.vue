<template>
  <div class="pop-up">
    <div class="container">
      <div class="card pop-up-form p-5">
        <div id="login-row" class="row align-items-center">
          <div id="login-column" v-if="login == true" class="col-md-12">
            <div
              class="alert alert-warning alert-dismissible fade show"
              v-if="errMessage.length > 1"
              role="alert"
            >
              {{ errMessage }}
              <button
                type="button"
                class="close"
                @click="closeAlert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div id="login-box" class="col-md-12">
              <form
                id="login-form"
                @submit.prevent=""
                class="form"
                action=""
                method="post"
              >
                <h3 class="text-center text-orange">Login</h3>
                <div class="form-group">
                  <label for="email" class="text-orange">Email :</label><br />
                  <input
                    v-model="emailFormLogin"
                    type="email"
                    name="email"
                    id="email-login"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="password" class="text-orange">Password :</label
                  ><br />
                  <input
                    v-model="passwordFormLogin"
                    type="password"
                    name="password"
                    id="password-login"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <!-- <label for="remember-me" class="text-orange"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"></span></label><br> -->
                  <!-- <google-login :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure">Google Login</google-login> -->
                  <input
                    type="submit"
                    class="btn btn-orange pl-5 pr-5 mr-1"
                    @click.prevent="loginProcess"
                    value="Login"
                  />
                  <input
                    type="submit"
                    class="btn btn-outline-danger btn-md"
                    @click.prevent="closeForm"
                    value="Cancel"
                  />
                  <br />
                  Dont have any ?
                  <a href="#" @click.prevent="toogleLogin" class="text-orange"
                    >Register here</a
                  >
                  <!-- <GoogleLogin class="float-right" :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin> -->
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          id="login-row"
          v-if="login == false"
          class="row align-items-center"
        >
          <div id="login-column" class="col-md-12">
            <div
              class="alert alert-warning alert-dismissible fade show"
              v-if="errMessage.length > 1"
              role="alert"
            >
              {{ errMessage }}
              <button
                type="button"
                class="close"
                @click="closeAlert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div id="login-box" class="col-md-12">
              <form
                id="login-form"
                @submit.prevent=""
                class="form"
                action=""
                method="post"
              >
                <h3 class="text-center text-orange">Register</h3>
                <div class="form-group">
                  <label for="email" class="text-orange">Email :</label><br />
                  <input
                    v-model="emailFormRegist"
                    type="email"
                    name="email"
                    id="email-login"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="password" class="text-orange">Password :</label
                  ><br />
                  <input
                    v-model="passwordFormRegist"
                    type="password"
                    name="password"
                    id="password-login"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <!-- <label for="remember-me" class="text-orange"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"></span></label><br> -->
                  <!-- <google-login :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure">Google Login</google-login> -->
                  <input
                  type="submit"
                    class="btn btn-orange btn-md mr-1"
                    @click.prevent="registProcess"
                    value="Register"
                  />
                  <input
                    type="submit"
                    class="btn btn-outline-danger btn-md"
                    @click.prevent="closeForm"
                    value="Cancel"
                  />
                  <br />
                  Already have one ?
                  <a href="#" @click.prevent="toogleLogin" class="text-orange"
                    >Sign in here</a
                  >
                  <!-- <GoogleLogin class="float-right" :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin> -->
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import server from "@/api/server";
export default {
  name: "LoginForm",
  data() {
    return {
      emailFormLogin: "",
      passwordFormLogin: "",
      emailFormRegist: "",
      passwordFormRegist: "",
      login: true,
      errMessage: "",
    };
  },
  methods: {
    closeAlert() {
      this.errMessage = "";
    },
    toogleLogin() {
      this.login = !this.login;
    },
    loginProcess() {
      console.log(this.emailFormLogin, this.passwordFormLogin);
      server
        .post(`login`, {
          email: this.emailFormLogin,
          password: this.passwordFormLogin,
        })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token);
          console.log(data);
          this.$store.commit("TOOGLE_LOGINFORM");
          this.$store.commit("TOOGLE_LOGGEDIN");
          this.$store.dispatch("fetch_all");
        })
        .catch((err) => {
          console.log(err);
          // console.log(err.response);
          if (err.response) {
            this.errMessage = err.response.data.msg;
          }
        });
    },
    registProcess() {
      console.log(this.emailFormRegist, this.passwordFormRegist);
      server
        .post(`register`, {
          email: this.emailFormRegist,
          password: this.passwordFormRegist,
        })
        .then(({ data }) => {
        //   localStorage.setItem("access_token", data.access_token);
          console.log(data);
            this.errMessage = "Account created Successfully";
            this.emailFormRegist =''
            this.passwordFormRegist = ''
            this.toogleLogin()
        //   this.$store.commit("TOOGLE_LOGINFORM");
        //   this.$store.commit("TOOGLE_LOGGEDIN");
        //   this.$store.dispatch("fetch_all");
        })
        .catch((err) => {
          console.log(err);
          // console.log(err.response);
          if (err.response) {
            this.errMessage = err.response.data.msg;
          }
        });
    },
    closeForm() {
      this.$store.commit("TOOGLE_LOGINFORM");
    },
  },
  computed: {
    // errMessage() {
    //   return this.$store.state.errMessage;
    // },
  },
};
</script>

<style>
.pop-up {
  position: fixed;
  z-index: 999;
  height: 100vh;
  width: 100%;
  background-color: #61460b2f;
}
.pop-up-form {
  background-color: #797876;
  border-radius: 15px;
  /* margin-top: 30%; */
  color: white;
  margin: 15% auto;
  max-width: 500px;
}
.text-orange {
  color: #ffc038;
}
.btn-orange {
  background-color: #ffc038;
}
.btn-orange:hover {
  background-color: #997425;
  color: white;
}
</style>