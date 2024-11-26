import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  // // If entries is not provided, will be automatically inferred from package.json
  // entries: [
  //   // default
  //   "./src/index",

  //   // mkdist builder transpiles file-to-file keeping original sources structure
  //   // BUT it doesn't support source maps
  //   // https://github.com/unjs/mkdist/issues/164
  //   {
  //     builder: "mkdist",
  //     input: "./src/",
  //     outDir: "./dist/src",
  //     esbuild: {
  //       minify: false,
  //     },
  //   },
  // ],

  // Change outDir, default is 'dist'
  // outDir: "dist",

  /**
   * * `compatible` means "src/index.ts" will generate "dist/index.d.mts", "dist/index.d.cts" and "dist/index.d.ts".
   * * `node16` means "src/index.ts" will generate "dist/index.d.mts" and "dist/index.d.cts".
   * * `true` is equivalent to `compatible`.
   * * `false` will disable declaration generation.
   * * `undefined` will auto detect based on "package.json". If "package.json" has "types" field, it will be `"compatible"`, otherwise `false`.
   */
  // declaration: "compatible",

  sourcemap: true,
});
