<div align="center">
  <img src="Logo.png" width="110" height="110"/>
</div>

<br/>

# Lens JS
![GitHub package.json version](https://img.shields.io/github/package-json/v/suhailkakar/lens.js.svg)
[![GitHub license](https://img.shields.io/github/license/suhailkakar/lens.js.svg)](https://github.com/suhailkakar/lens.js/blob/master/LICENSE)
![NPM Package name](https://img.shields.io/badge/npm-lensprotocol-C5312A)
[![GitHub Shield](https://img.shields.io/badge/open-GitPod-D4973A?logo=gitpod)](https://gitpod.io/#https://github.com/suhailkakar/lens.js)
> A JavaScript SDK for Lens Protocol

<br/>

Lens.js is a JavaScript SDK or a API wrapper for Lens Protocol. 
Lens.js simplify the process of creating a social media app one more step.
It is a simple, easy to use, and powerful API for interacting with Lens Protocol. 

You can use Lens.js on node server, browser, or mobile.

## Installations

You can install Lens.js either using NPM and YARN. 



Inside your project directory, run the following command:

```sh
npm install lens-protocol
```

Or with `yarn`:

```sh
yarn add lens-protocol
```

## Example 

Using lens.js is way easier, you can check all APIs in the docs and here is a example on how to get the status of the API 

```js
lensjs
  .ping()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```


## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue.
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Lens.js project is an open source software licensed under the MIT License

