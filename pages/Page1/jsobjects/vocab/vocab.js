export default {
	items:[],
	init () {
		for (let i=0;i<15000;i++) {
			this.items.push({"id":i,"name":`item ${i}`})	
		}		
	}
}