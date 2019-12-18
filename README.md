# Credit Card Processing

## Installation

### Clone the repository

```
git clone https://github.com/srlakhotia/cc-processing.git
cd cc-processing
```

### Installing base package and client and frontend node packages

```
npm install
npm run install-all
```

## Start the server

```
npm start
```
Frontend server will run at http://localhost:3000

Backend server will run at http://localhost:3001

## Running the test
```
cd backend
npm run test
```

## APIs Available

### GET /api/getAllCards
Response format:
```
{
    "success": true,
    "data": [{
            "name": "Sneh Raj Lakhotia",
            "cardNumber": "4024007103939509",
            "limit": "333",
            "balance": 0
        }
    ],
    "error": null
}
```

### POST api/addCard
body format:
```
{
	"name": "Sneh Raj Lakhotia 1",
	"cardNumber": "4024007103939509",
	"limit": "333"
}
```

Response format:
```
{
    "success": true,
    "data": [{
            "name": "Sneh Raj Lakhotia",
            "cardNumber": "4024007103939509",
            "limit": "333",
            "balance": 0
        }
    ],
    "error": null
}
```
