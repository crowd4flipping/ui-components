import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
//import postcssJitProps from "postcss-jit-props";
import css from "rollup-plugin-css-only";
import terser from "@rollup/plugin-terser";
import scss from "rollup-plugin-scss";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/index.cjs.js",
        format: "cjs",
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
      },
    ],
    plugins: [
      resolve({
        moduleDirectories: ["node_modules"],
      }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      scss({
        include: [
          "./src/components/styles/theme/02.generics/_all-generics.scss",
        ],
      }),
      postcss({
        modules: true,
        extract: true,
      }),
    ],
    external: ["react", "react-dom", "next/image"],
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.scss$/],
  },
];
