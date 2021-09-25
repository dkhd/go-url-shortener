# Go! URL Shortener

An open-source URL shortener by [Diky Hadna](https://hadna.space). Check the demo here at [go.hadna.space](https://go.hadna.space).

## Installation

1. Clone this repository

`$ git clone https://github.com/dkhd/go-url-shortener.git`

2. Install all the dependencies

`$ npm install`

3. Set your secret key (read the documentation below)

4. Run the project

`$ npm start`

## Getting Your FaunaDB & Auth0 Secret Key

1. Register your FaunaDB account here [https://fauna.com/](https://fauna.com/)

2. Follow this documentation to create your own secret key [https://docs.fauna.com/fauna/current/security/keys](https://docs.fauna.com/fauna/current/security/keys)

3. Register your Auth0 account here [https://auth0.com/](https://auth0.com/)

4. Follow this documentation to create your own secret key [https://auth0.com/docs/quickstart/spa/react/01-login#configure-auth0](https://auth0.com/docs/quickstart/spa/react/01-login#configure-auth0)

5. Create `.env` file in your root project directory

6. Fill with these environment variables:

```
REACT_APP_AUTH0_URL=<AUTH0_URL>
REACT_APP_CLIENT_ID=<AUTH0_CLIENT_ID>
REACT_APP_FAUNADB_KEY=<FAUNADB_SECRET_KEY>
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
