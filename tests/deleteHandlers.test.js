// eslint-disable-next-line no-undef
const config = require('../config');

test('Request status code should be 200', async () => {
	let actualResponseCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2:id`, {
			method: 'DELETE',
		});
		actualResponseCode = response.status;
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseCode).toBe(200);
});

test('Request body should contain ok:', async () => {
	let actualResponseCode;
    try {
		response = await fetch(`${config.API_URL}/api/v1/kits/2:id`, {
			method: 'DELETE',
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	const expectedResponse = {
        ok: true,
	};

	expect(actualResponseBody).toMatchObject(expectedResponse);
});
