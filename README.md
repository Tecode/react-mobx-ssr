React+Mobx server side render boilerplate with ES2015, Express.js, and Webpack.

## 更新

- Babel7版本请切换分支到babel-7
- 或者访问[https://github.com/Tecode/react-mobx-ssr/tree/babel-7](https://github.com/Tecode/react-mobx-ssr/tree/babel-7)

## Technologies

- React (v16) + Mobx (v4) + React Router (v4)
- Express.js (v4) as production and development server
- Webpack 4.12.0 (production and development configurations)
- SCSS support (+ sanitize.css included)
- ES2015
- Antd v3.6.2

## Features
- Server side render(ssr)
- Code splitting
- Preconfigured router
- React Antd UI example theme
- preconfigured eslint and Prettier code formatter
- React Hot Loader
- Linux/MacOS/Windows

## Usage

### Installation
```bash
git clone https://github.com/Tecode/react-mobx-ssr.git
cd react-mobx-ssr
npm install Or yarn

# remove boilerplate git references
rm ./.git
```

### Scripts
```bash
# run development mode
npm run dev

# run production mode
npm run build
npm start

# run prettier
npm run prettier

# run lint
npm run lint

# run on a different port
HTTP_PORT=3001 npm run dev
```

## License
MIT License. Free use and change.
