var	vm = new Vue({
	el: '#computed_prop',
	data:{
		firstname: "",
		lastname: "",
		birthyear: ""
	},
	computed:{
		getfullname:function(){
			return this.firstname+" "+this.lastname;
		}
	}
})