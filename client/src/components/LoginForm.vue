<template> 
    <div class="pop-up"  >
        <div class="container">
            <div class="card pop-up-form p-5" >
            <div id="login-row" class="row align-items-center">
                <div id="login-column" class="col-md-12">
                <div class="alert alert-warning alert-dismissible fade show" v-if="errMessage.length>1" role="alert">
                    {{errMessage}}
                    <button type="button" class="close" @click="closeAlert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                    <div id="login-box" class="col-md-12">
                        <form id="login-form"  @submit.prevent=""  class="form" action="" method="post">
                            <h3 class="text-center text-orange">Login</h3>
                            <div class="form-group">
                                <label for="email" class="text-orange">Username:</label><br>
                                <input v-model="emailFormLogin" type="email" name="email" id="email-login" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-orange">Password:</label><br>
                                <input v-model="passwordFormLogin" type="text" name="password" id="password-login" class="form-control">
                            </div>
                            <div class="form-group">
                                <!-- <label for="remember-me" class="text-orange"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"></span></label><br> -->
                                <!-- <google-login :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure">Google Login</google-login> -->
                                <input class="btn btn-orange btn-md mr-1" @click.prevent="login" value="Login">
                                <input type="submit" class="btn btn-outline-danger btn-md" @click.prevent="closeForm" value="Cancel">
                                <br>
                                Dont have any ? <a href="#" @click.prevent="changePage" class="text-orange">Register here</a>
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
export default {
    name: 'LoginForm',
    data () {
        return {
            emailFormLogin: '',
            passwordFormLogin: '', 
        }
    },
    methods: { 
        closeAlert(){
            this.errMessage =""
        },
        login(){
            console.log(this.emailFormLogin,this.passwordFormLogin);
            axios
                .post(`${this.serverUrl}login`,{ 
                    email:this.emailFormLogin,
                    password:this.passwordFormLogin,
                })
                .then(({data})=>{
                    localStorage.setItem('access_token',data.access_token) 
                    // this.page = 'home'
                    // this.fetchData()
                    this.$emit('changePage','home')
                })
                .catch(err=>{
                    console.log(err);
                    // console.log(err.response);
                    if(err.response){
                        this.errMessage = err.response.data.msg
                    }
                }) 
        }, 
        closeForm () { 
            this.$store.commit('TOOGLE_LOGINFORM') 
        }
    },
    computed: {
        errMessage () {
            return this.$store.state.errMessage
        }
    }

}
</script>

<style>

.pop-up{
    position: fixed;
    z-index: 999; 
    height: 100vh;
    width: 100%;
    background-color: #61460b2f;
}
.pop-up-form{
    background-color: #797876;
    border-radius: 15px;
    /* margin-top: 30%; */
    color:white;
    margin: 15% auto;
    max-width:500px ;
}
.text-orange {
    color: #ffc038;
}
.btn-orange {
    background-color: #ffc038; 
}
.btn-orange:hover {
    background-color: #997425; 
    color:white;
}

</style>