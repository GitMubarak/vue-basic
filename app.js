var myview = new Vue({
    el: "#my-app",
    data:{
        message: "Welcome to VueJs",
        fname: "Hossni",
        lname: "Mubarak",
        title: "Web Application Developer"
    },
    methods:{
        getFullName: function() {
            return "I am Hossni Mubarak.";
        },
        getAge: function(age) {
            return "I am " + age + " years of age.";
        },
        getTitle: function(){
            return "I am a " + this.title;
        }
    }
});