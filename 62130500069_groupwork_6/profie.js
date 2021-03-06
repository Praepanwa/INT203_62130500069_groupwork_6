const constraints = {
    firstname: {
        presence: true
    },
    lastname: {
        presence: true
    },
    email: {
        presence: true,
        email:true
    },
}

const app =Vue.createApp({
    data() {
        return {
            //     firstname:null,
            // lastname:null,
            // email: null,
            //     myprofilepic: "./images/profile.jpg",
            //  ig: "https://www.instagram.com/2000meters/",
            myprofilepic: "./images/profile.jpg",
          formdata: {
            firstname:null,
            lastname:null,
            email: null,
            // article:null,
            // follower:null,
            // rating:null,
            // facebook: "https://www.facebook.com/praepanwa.phaeng.3/",
            ig: "https://www.instagram.com/2000meters/",
          },
            errors: null,
        }
    },
    methods: {
        checkForm(e){
            // this.errors = validate({firstname: this.firstname,
            //                         lastname: this.lastname,
            //                         email: this.email,
            //                         }, constraints)
            this.errors = validate(this.formdata,constraints)
            if(this.errors){
                // alert("please, corrected the display error on : " )
                e.preventDefault();
                
            }else{
                alert("register sucessfully")
            }
        }
    }
})

