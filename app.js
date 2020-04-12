var myview = new Vue({
    el: "#my-app",
    data:{
        counter: 0,
        x: 0,
        y: 0,
        mouse: "Mouse",
    },
    methods:{
        increment: function(val) {
            this.counter += val;
        },
        decrement: function(val) {
            this.counter -= val;
        },
        movefunction: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        overfunction: function() {
            this.mouse = 'Mouse is over';
        },
        outfunction: function() {
            this.mouse = 'Mouse is out';
        }
    }
});