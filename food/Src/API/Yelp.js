import axios from 'axios';

export default axios.create ({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 'Bearer l5SA3YCgTiPqwN0JIdC0h3nksir6aKWZjukwk-ul6NFVvUP4ELIBye8NTXfkoZEPzLyIeNJPwf4XCbUl517mbhpLKE6wCVdfUeBOiuvUXxjdfQykLXFhd2pjT_VAX3Yx'
	}
});