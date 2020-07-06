// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAwp7hhcZGyNfZOY8AOeIrpzkzL69quiS0',
    authDomain: 'localhost',
    databaseURL: 'https://watsappclone-fd0b8.firebaseio.com/',
    projectId: 'watsappclone-fd0b8',
    storageBucket: 'photos',
    messagingSenderId: ''
  }
};
