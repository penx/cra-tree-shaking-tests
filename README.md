# CRA tree shaking tests

Checks on create-react-app to see what causes tree shaking issues.

## Example usage

```sh
hub clone penx/cra-tree-shaking-tests
cd cra-tree-shaking-tests
yarn
yarn build && ls -al build/static/js/*.js
cat build/static/js/main.951f4a08.chunk.js
git checkout unused-component-as-object-property
yarn build && ls -al build/static/js/*.js
cat build/static/js/main.951f4a08.chunk.js
git checkout react-star
yarn build && ls -al build/static/js/*.js
cat build/static/js/main.951f4a08.chunk.js
git checkout unused-component-named-export
yarn build && ls -al build/static/js/*.js
cat build/static/js/main.951f4a08.chunk.js
```
