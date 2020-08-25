const { globLoader } = require('../src/index');

test('globLoader',() => {
    expect(JSON.stringify(globLoader('../testFile/**/index.ts'))).toBe(JSON.stringify(["/home/shayelee/workspace/feeler/base/packages/file/testFile/home/index.ts", "/home/shayelee/workspace/feeler/base/packages/file/testFile/login/index.ts"]))
})