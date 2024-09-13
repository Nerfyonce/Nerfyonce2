document.getElementById('voucherForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const cardNumber = document.getElementById('cardNumber').value;
    const resultDiv = document.getElementById('result');

    // Clear previous result
    resultDiv.textContent = "Generating voucher...";

    try {
        // API request setup
        const response = await fetch(`https://api.teeg.cloud/vouchers/campaigns/RIXI59A/cards/${cardNumber}?tz=MIDQRS5R5K`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzI2MjUzODc3LCJuYmYiOjE3MjYyNTI5NzcsImlwQWRkcmVzcyI6IjE4MC4yNDguMTYuMTE5IiwiaXBhZGRyIjoiMTgwLjI0OC4xNi4xMTkiLCJvaWQiOiIwN2JkZmNlYy0wNmQ0LTQwYmMtOTAzMC1lZjEyMTVkYWFhMzYiLCJzdWIiOiIwN2JkZmNlYy0wNmQ0LTQwYmMtOTAzMC1lZjEyMTVkYWFhMzYiLCJwaG9uZSI6Iis2MjgyMTMxMTA2NjA3IiwidGlkIjoiYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwIiwibm9uY2UiOiI1NDlmNDdhMy03NDc3LTQzYTUtODFiOC04YmQzYzdiZmUzZWQiLCJzY3AiOiJhbGwtYXBpcyIsImF6cCI6ImNhMGU0ODY4LTE3N2ItNDlkMi04YzYzLWYxMDQ0ZTNlZGM2MyIsInZlciI6IjEuMCIsImlhdCI6MTcyNjI1Mjk3N30.wxQh5SUok0V-0bmVQrE2lFK5H90spqR55WNGR49bbamX9PQJx8jk8jyclSAjytdaJxGlwZCxzMr7DlXMuCBcj2QMLx6OXx4a_WyOUQ6M7YDR7j_WpL-gPzzRfJU7u8wguI_we13YF8g-yioVDEmXOaCnoYRN_k2FHpwlD7qkUSq3-3AHMl34PG1-TisSN9Hj7bNF-_s8ZXsSR-phBk4g7vsHw0-AodURtJK6DWo_VUMag3nfBSXi2bDlhCXuRUyZvnzao1QT91yfoaYDw7Z_BwPXLzyg2a75LNRg-CJfb7wCDLrXaNaN8-DvC4W-ZI78U86SR6iAzcwTKFTdUbnX0g'
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        // Display the result
        resultDiv.textContent = `Voucher generated successfully! Voucher Code: ${data.voucherCode}`;
    } catch (error) {
        // Display error
        resultDiv.textContent = `Failed to generate voucher: ${error.message}`;
    }
});
