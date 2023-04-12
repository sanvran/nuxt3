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
