document.getElementById('voucherForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const cardNumber = document.getElementById('cardNumber').value;
    const voucherResult = document.getElementById('voucherResult');
    const errorMessage = document.getElementById('errorMessage');
    const voucherCodeElement = document.getElementById('voucherCode');
    const errorDetailsElement = document.getElementById('errorDetails');

    voucherResult.classList.add('hidden');
    errorMessage.classList.add('hidden');

    const apiKey = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzI2MjUzMjQ1LCJuYmYiOjE3MjYyNTIzNDUsImlwQWRkcmVzcyI6IjE4MC4yNDguMTYuMTE5IiwiaXBhZGRyIjoiMTgwLjI0OC4xNi4xMTkiLCJvaWQiOiIwN2JkZmNlYy0wNmQ0LTQwYmMtOTAzMC1lZjEyMTVkYWFhMzYiLCJzdWIiOiIwN2JkZmNlYy0wNmQ0LTQwYmMtOTAzMC1lZjEyMTVkYWFhMzYiLCJwaG9uZSI6Iis2MjgyMTMxMTA2NjA3IiwidGlkIjoiYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwIiwibm9uY2UiOiI1NDlmNDdhMy03NDc3LTQzYTUtODFiOC04YmQzYzdiZmUzZWQiLCJzY3AiOiJhbGwtYXBpcyIsImF6cCI6ImNhMGU0ODY4LTE3N2ItNDlkMi04YzYzLWYxMDQ0ZTNlZGM2MyIsInZlciI6IjEuMCIsImlhdCI6MTcyNjI1MjM0NX0.rWv_bDJj5wXV4Lzp5qndmLa4Da0PqERBlJ3gMnSWz2jcBB41fZuiRv4DF_uv9Y-2sb097DFzvKeqkNf0tO6qWE0Eyk0OgUgjnTiWLaZMwza-tSbZfAwhRtf7lQq9-Un6q5NSh77qmf0TScU0iQIMdwLbHt7b91TxeyGgWIEPTmNJZJkog5jarhazMcKVRWyOTl4oD2m9_E5Kh7QzV5_sTZnTDtoEtUDNXCK0jG77A5Fg1ye4gfU35yIWiaAk40aBQ9AUcbyG_4BFy6RrveVX_R9Ckf94hmsVmcnQC_kmY3HBOd22qQanJAXKPAA5c7Ltx8cLtyblpCy083XvJRMTig';

    try {
        const response = await fetch(`https://api.teeg.cloud/vouchers/campaigns/RIXI59A/cards/${cardNumber}?tz=MIDQRS5R5K`, {
            method: 'GET',
            headers: {
                'Authorization': apiKey,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        voucherCodeElement.textContent = `Voucher Code: ${data.voucherCode}`;
        voucherResult.classList.remove('hidden');
    } catch (error) {
        errorDetailsElement.textContent = error.message;
        errorMessage.classList.remove('hidden');
    }
});
