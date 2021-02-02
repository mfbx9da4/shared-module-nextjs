# shared-module-nextjs

[Uses npm workspaces](https://github.com/mfbx9da4/shared-module-nextjs/blob/main/package.json#L4) to reference modules.

https://docs.npmjs.com/cli/v7/using-npm/workspaces

Uses [tsConfig paths](https://github.com/mfbx9da4/shared-module-nextjs/blob/main/next/tsconfig.json#L5) to alias the parent directory.

https://www.typescriptlang.org/tsconfig#paths

## Todo

- As a build step, need to run `npm install` inside `apps-shared/` and `next/`
- [React native web rewrites aliases for babel config depending on env](https://github.com/vercel/next.js/tree/master/examples/with-react-native-web)
- May need to transpile the sibling directory using next-plugin-transpile-modules plugin if we use npm link
  [[1]](https://github.com/vercel/next.js/issues/706) [[2]](https://www.npmjs.com/package/next-transpile-modules)
