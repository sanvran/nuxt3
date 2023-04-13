# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

<!-- fontawesome -->

https://stackoverflow.com/questions/47788847/font-awesome-5-font-family-issue

Your Unicode is wrong f107

a::after {
content: "\f007";
font-family: 'Font Awesome\ 5 Free';
}

<link href="https://use.fontawesome.com/releases/v5.0.1/css/all.css" rel="stylesheet">
<a>User</a>
<i class="fas fa-shopping-basket"></i>

<!-- msal -->

https://learn.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-sign-in?tabs=javascript2

1.Direct signin
const config = {
auth: {
clientId: "your_app_id",
redirectUri: "your_app_redirect_uri", //defaults to application start page
postLogoutRedirectUri: "your_app_logout_redirect_uri",
},
};

const loginRequest = {
scopes: ["User.ReadWrite"],
};

let accountId = "";

const myMsal = new PublicClientApplication(config);

function handleResponse(response) {
if (response !== null) {
accountId = response.account.homeAccountId;
// Display signed-in user content, call API, etc.
} else {
// In case multiple accounts exist, you can select
const currentAccounts = myMsal.getAllAccounts();

    if (currentAccounts.length === 0) {
      // no accounts signed-in, attempt to sign a user in
      myMsal.loginRedirect(loginRequest);
    } else if (currentAccounts.length > 1) {
      // Add choose account code here
    } else if (currentAccounts.length === 1) {
      accountId = currentAccounts[0].homeAccountId;
    }

}
}

myMsal.handleRedirectPromise().then(handleResponse);
