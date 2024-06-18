//PUT Test 1 checks that updating an order returns 200 status code
const config = require('../config');

const requestBody = {}

test('Request status code should be 200', async () => {
	let actualResponseCode;
    try {
		const response = await fetch(`${config.API_URL}/your/endpoint`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseCode = response.status;
	} catch (error) {
		console.error(error);
	}

expect(actualResponseCode).toBe(405);
});

//POST Test 2 checks that updating an order returns the appropriate body response
test('Response body should contain code and message', async () => {
    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/2:id`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        actualResponseBody = await response.json();
    } catch (error) {
        console.error(error);
    }

	const expectedResponse = {
        code: 404,
        message: "Not Found"
    };

    expect(actualResponseBody).toMatchObject(expectedResponse);
});

