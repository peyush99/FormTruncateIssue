export default {
	async submitModal2 () {
		const data = {
			"name": input_name_2.text,
			"random word": input_random_word_2.text
		}
		await storeValue("showText", data);
	},
	async submitFormModal3 () {
		await storeValue("showText", form_input_3.data);		
	}
}