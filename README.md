# A reduplicate to the rtk `ts2742` [issue](https://github.com/reduxjs/redux-toolkit/issues/3962)

## Steps to reproduce

```bash
# this fails when emitting d.ts files
pnpm --filter common build
# this works because JS bundle is fine.
pnpm --filter client dev -- nikki/addNote --title=helloworld
```
