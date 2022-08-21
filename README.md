# Nomi Web App

## Scripts:
| Command| Description |
|---|---|
|`npm start`|Starts development server on localhost:3000 and a proxy of localhost:4000 |
|`npm run server`|Starts api server using nodemon for development|
|`npm run production`|Starts production server and serves the build folder static|

## API

Base URL: /api

### Endpoints

#### `/api/twilio/sendverify`
Sends a post request to twilio with a phone number
Example response: 
```
{
    "success": true,
    "status": "pending",
    "payee": null,
    "date_updated": "2022-08-21T20:22:13Z",
    "send_code_attempts": [
        {
            "attempt_sid": "VLb44a51d52c305823e1c6da92eb6dbac8",
            "channel": "sms",
            "time": "2022-08-21T20:17:56.000Z"
        },
        {
            "attempt_sid": "VL32c274929f5a028fdf3670bb99ac6f62",
            "channel": "sms",
            "time": "2022-08-21T20:22:13.245Z"
        }
    ],
    "account_sid": "ACb2f62848771dd92b3fe4b6a30ce61095",
    "to": "+15078292069",
    "amount": null,
    "valid": false,
    "lookup": {
        "carrier": null
    },
    "url": "https://verify.twilio.com/v2/Services/VAb0fb1af4f22b51b2e1a8bdd4f673175e/Verifications/VEdb6feb6be3ef19000337061089fbad4a",
    "sid": "VEdb6feb6be3ef19000337061089fbad4a",
    "date_created": "2022-08-21T20:17:56Z",
    "service_sid": "VAb0fb1af4f22b51b2e1a8bdd4f673175e",
    "channel": "sms"
}
```
