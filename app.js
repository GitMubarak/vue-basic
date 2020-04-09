var myview = new Vue({
    el: "#my-app",
    data:{
        fullName: "Hossni Mubarak",
        title: "Web Application Developer",
        webUrl: "http://hossnimubarak.com",
        imgUrl: "hossni-mubarak.jpg",
        isActive: true,
        htmlContentBinding: "<span>Bangladesh is a small country. But she has a large population</span>",
        txtUserName: "User Name",
        txtUserEmail: "abc@abc.com",
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