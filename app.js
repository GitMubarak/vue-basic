var myview = new Vue({
    el: "#my-app",
    data:{
        counter: 0,
    },
    methods:{
        increment: function(val) {
            this.counter += val;
        },
        decrement: function(val) {
            this.counter -= val;
        },
    }
});