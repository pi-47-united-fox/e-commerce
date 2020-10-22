<template>
<div class="container-fluid"> <output class="text-white shadow-sm">
        <footer class="section-footer border-top">
            <div class="container-fluid">
                <section class="footer-top padding-y">
                    <div class="row">
                        <aside class="col-md-4">
                            <article class="mr-3"> <img src="https://www.logitech.com/content/dam/logitech/common/en/logitechg-logo.png" style="max-width:100px; margin-top: -7px;" alt="Toko Aldy Distributor Logitech!">
                                <p class="mt-3 description">This store selling a blackmarket Product with Original Quality with Reasonable Price. Stock are limited so Order it Fast!</p>
                                <div> <a class="btn btn-icon btn-light" title="Facebook" target="_blank" data-abc="true"><i class="fab fa-facebook-f"></i></a> <a class="btn btn-icon btn-light" title="Instagram" target="_blank" data-abc="true"><i class="fab fa-instagram"></i></a> <a class="btn btn-icon btn-light" title="Youtube" target="_blank" data-abc="true"><i class="fab fa-youtube"></i></a> <a class="btn btn-icon btn-light" title="Twitter" target="_blank" data-abc="true"><i class="fab fa-twitter"></i></a> </div>
                            </article>
                        </aside>
                        <aside class="col-sm-3 col-md-2">
                            <h6 class="title">About</h6>
                            <ul class="list-unstyled">
                                <li> <a data-abc="true">About us</a></li>
                                <li> <a data-abc="true">Services</a></li>
                                <li> <a data-abc="true">Terms & Condition</a></li>
                                <li> <a data-abc="true">Our Blogs</a></li>
                            </ul>
                        </aside>
                        <aside class="col-sm-3 col-md-2">
                            <h6 class="title">Services</h6>
                            <ul class="list-unstyled">
                                <li> <a data-abc="true">Help center</a></li>
                                <li> <a data-abc="true">Money refund</a></li>
                                <li> <a data-abc="true">Terms and Policy</a></li>
                                <li> <a data-abc="true">Open dispute</a></li>
                            </ul>
                        </aside>
                        <aside class="col-sm-3 col-md-2">
                            <h6 class="title">For users</h6>
                            <ul class="list-unstyled">
                                <li> <a data-abc="true"> User Login </a></li>
                                <li> <a data-abc="true"> User register </a></li>
                                <li> <a data-abc="true"> Account Setting </a></li>
                                <li> <a data-abc="true"> My Orders </a></li>
                            </ul>
                        </aside>
                        <aside class="col-sm-2 col-md-2">
                            <h6 class="title">Our app</h6> <a class="d-block mb-2" data-abc="true"><img class="img-responsive" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574317087/AAA/appstore.png" height="40"></a> <a class="d-block mb-2" data-abc="true"><img class="img-responsive" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574317110/AAA/playmarket.png" height="40"></a>
                        </aside>
                    </div>
                </section>
                <section class="footer-copyright border-top">
                    <p class="float-left text-muted"> © 2020 All rights reserved </p>
                    <p target="_blank" class="float-right text-muted"> <a data-abc="true">Privacy &amp; Cookies</a> &nbsp; &nbsp; <a data-abc="true">Accessibility</a> </p>
                </section>
            </div>
        </footer>
    </output> </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

 body {
     font-family: 'Open Sans', serif;
     font-size: 14px;
 }

 #wrap {
  min-height: 100%;
}

#main {
  overflow:auto;
  padding-bottom:150px; /* this needs to be bigger than footer height*/
}

.footer {
  position: relative;
  margin-top: -150px; /* negative value of footer height */
  height: 150px;
  clear:both;
  padding-top:20px;
}

 .container-fluid {
    background-color: #202020 !important;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
 }

 .footer-copyright {
     margin-top: 13px
 }

 a {
     text-decoration: none !important;
     color: #777a7c
 }

 .description {
     font-size: 12px
 }

 .fa-facebook-f {
     color: #3b5999
 }

 .fa-instagram {
     color: #e4405f
 }

 .fa-youtube {
     color: #cd201f
 }

 .fa-twitter {
     color: #55acee
 }

 .footer-copyright p {
     margin-top: 10px
 }
</style>
