var app = new Vue({
  el: 'div',
  data: {
    pesan: 'Hello Vue!',
    nama: 'gung cahyadi',
    kelas: 'XRPL',
    tgl_lahir: '22-10-2000',
    umur: '17',
    alamat: 'br. dlodtangluk - sukawati'
  },
  methods: {
  	details : function(){
  		return "Nama Saya "+this.nama+" Saya Sekarang Kelas "+this.kelas+" Saya lahir pada Tanggal "+this.tgl_lahir+" Sekarang Saya tinggal "+this.alamat; 
  	}
  }
})