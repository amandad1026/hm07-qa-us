// eslint-disable-next-line no-undef
const config = require('../config');

test('Request status code should be 200', async () => {
	let actualResponseCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualResponseCode = response.status;
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseCode).toBe(200);
});
/*GET Test 1 checks that getting an order returns 200 status code*/


test('Response body should contain the expected warehouse', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	const expectedWarehouse = {
        name: "Everything You Need",
        workingHours: {
            start: 7,
            end: 23
        }
    };

    expect(actualResponseBody).toEqual(expect.arrayContaining([expect.objectContaining(expectedWarehouse)]));
});
/*Get Test 2 checks that getting an order returns the expected body data*/
