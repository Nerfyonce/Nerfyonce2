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
    
    const bearerToken = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzI2MTY1NTQzLCJuYmYiOjE3MjYxNjQ2NDMsImlwQWRkcmVzcyI6IjE4MC4yNDguMTYuMTE5IiwiaXBhZGRyIjoiMTgwLjI0OC4xNi4xMTkiLCJvaWQiOiIwN2JkZmNlYy0wNmQ0LTQwYmMtOTAzMC1lZjEyMTVkYWFhMzYiLCJzdWIiOiIwN2JkZmNlYy0wNmQ0LTQwYmMtOTAzMC1lZjEyMTVkYWFhMzYiLCJwaG9uZSI6Iis2MjgyMTMxMTA2NjA3IiwidGlkIjoiYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwIiwibm9uY2UiOiI2MmIyMmVhYS0wZmYxLTRkMmItOTBjMi0wZWJhMGU2MjNkZDUiLCJzY3AiOiJhbGwtYXBpcyIsImF6cCI6ImNhMGU0ODY4LTE3N2ItNDlkMi04YzYzLWYxMDQ0ZTNlZGM2MyIsInZlciI6IjEuMCIsImlhdCI6MTcyNjE2NDY0M30.Kx1Riog6idA2Sx_tkCbSEaSuzMV0zuJxRDiDrPAoZPLNxL3gjuc-jRIgXYOg9gbCIzZSxmhhtXC9lW-_KswYUpj74P8VxCugAGOOE2KWI2yT_4kq1gnxk9oZ6BTC8H_K91AIPUWSjO1zcWyPVdFKY7ah5JnlXWRJXpmr0MRPAPiy8sNsY1gfjk2pivv0Jd9Eoil0e828LFiH_28SpEXX8DgIAhqUaoWPzZv4ZssIQuIWXdC_oTSBQE7NzE8Wd7L_kbutMa6lqaFuCdVsXyK7pXhBoJpeHogjBWUDC4SR7EWL9KPIabxjrm5XmAhMqvDcPS0M3GK9VM_y8KkL1yK-7w'

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
