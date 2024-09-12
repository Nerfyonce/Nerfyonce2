document.getElementById('generateBtn').addEventListener('click', async function() {
    // Get the card code input by the user
    const cardCode = document.getElementById('cardCodeInput').value;

    // If no card code is provided, show an error message
    if (!cardCode) {
        document.getElementById('output').textContent = 'Please enter a card code.';
        return;
    }

    // Construct API URL with the card code
    const apiUrl = `https://api.teeg.cloud/vouchers/campaigns/RIXI59A/cards/${cardCode}?tz=MIDQRS5R5K`;
    
    const bearerToken = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzI2MTYzMjczLCJuYmYiOjE3MjYxNjIzNzMsImlwQWRkcmVzcyI6IjE4MC4yNDguMTYuMTE5IiwiaXBhZGRyIjoiMTgwLjI0OC4xNi4xMTkiLCJvaWQiOiIwN2JkZmNlYy0wNmQ0LTQwYmMtOTAzMC1lZjEyMTVkYWFhMzYiLCJzdWIiOiIwN2JkZmNlYy0wNmQ0LTQwYmMtOTAzMC1lZjEyMTVkYWFhMzYiLCJwaG9uZSI6Iis2MjgyMTMxMTA2NjA3IiwidGlkIjoiYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwIiwibm9uY2UiOiI2MmIyMmVhYS0wZmYxLTRkMmItOTBjMi0wZWJhMGU2MjNkZDUiLCJzY3AiOiJhbGwtYXBpcyIsImF6cCI6ImNhMGU0ODY4LTE3N2ItNDlkMi04YzYzLWYxMDQ0ZTNlZGM2MyIsInZlciI6IjEuMCIsImlhdCI6MTcyNjE2MjM3M30.FIIO9SLag2OfXRMZ4JmkWQQfk7S4yaFyx8sJMBFaWI-LIqK9hvkfxHbWr40I83xc3vrEKN2wX1fzmOeAmriq_XpbP4HewR-fOMy_B9xOTMxe6OIodPx5J2tvCZiLM1a5Xuo_SC8lQ5hb1vIyn2GUO-fiJJuaib1Q5-ohXnW9GA5yUmiUw5gqrPkzdq9MD7AKMTevJsaA9plJcIZcEzwmDd1c8FqPxk6p-hTUSAlxA_7OUIk9Bbp5TjWtf1MxBmd48qTxwO2JZVPAlFaNiWOyNQOyqQ3TjXNHND2Rz3No7bmGcj6q7Q9mAwJIMY0ow6ia0gbSav8OHshMNL3Kt4yl5g';

    try {
        // Fetch API request
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': bearerToken,
                'Content-Type': 'application/json'
            }
        });

        // Error handling for unsuccessful response
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parsing the response to JSON format
        const data = await response.json();
        
        // Displaying the result in the output section
        document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        // Error handling for any request failure
        document.getElementById('output').textContent = `Error: ${error.message}`;
    }
});
