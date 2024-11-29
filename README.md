# Getting Started with Create React App

## 啟動docker log的服務器
需要到 `./logServer` 目錄下，運行 `node docker-api.js` 啟動log專屬服務器。

## Available Scripts

In the project directory, you can run:

### `npm i`

安裝所有需要的庫

### `npm start`

特別的，Windows需要使用`set PORT=5000 && npm start`啟動，Linux使用`PORT=5000 && npm start`。
修改上面的端口，6110 投票頁，6111 結果頁。
代碼中已自動判斷目前端口，需正確設置。

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
