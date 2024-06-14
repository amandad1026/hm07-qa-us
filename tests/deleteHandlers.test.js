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

test('Response body should contain "ok": true', async () => {
    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/2:id`, {
            method: 'DELETE',
        });
        actualResponseBody = await response.json();
    } catch (error) {
        console.error(error);
    }

    const expectedSuccessResponse = {
        "ok": true,
    };

    expect(actualResponseBody).toMatchObject(expectedSuccessResponse);
});
