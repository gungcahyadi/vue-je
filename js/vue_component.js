Vue.component('pcom',{
	// template : '<div><h1>testing vue component</h1></div>'
	template : '<div v-on:mouseover="changename()" v-on:mouseout="originalname();"><h1>Custom component by <span id="name">{{name}}</span></h1></div>',
	data: function(){
		return {
			name : "gungcahyadi"
		}
	},
	methods:{
		changename : function(){
			this.name = "gung";
		},
		originalname : function(){
			this.name = "cahyadi";
		}
	}
});

var vm = new Vue({
	el: '#component'
})
var vm1 = new Vue({
	el : '#component1'
})