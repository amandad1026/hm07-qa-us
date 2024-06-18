// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    // put your body here
}

test('Request status code should be 200', async () => {
	let actualResponseCode;
	let response;
    try {
		response = await fetch(`${config.API_URL}/speedy/v1/calculate`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseCode = response.status;
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseCode).toBe(200);  // Check if the status code is 200
});
/*POST Test 1 checks that creating and order/getting new resources for an order returns 200 status code*/


test('Request body should contain Speedy', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/speedy/v1/calculate`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});

		actualResponseBody = await response.json();
    } catch (error) {
        console.error(error);
    }

    expect(actualResponseBody).toMatchObject({
        name: "Speedy",
        isItPossibleToDeliver: true,
        hostDeliveryCost: 4,
        toBeDeliveredTime: {
            min: 30,
            max: 35
        },
        clientDeliveryCost: 0
    });
});
/*POST Test 2 checks that creating and order/getting new resources for an order returns the appropriate body response*/
