import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
//import postcss from "rollup-plugin-postcss";
import external from "rollup-plugin-peer-deps-external";
import scss from "rollup-plugin-scss";
import terser from "@rollup/plugin-terser";

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
      /*  postcss({
        plugins: [],
      }), */
      scss({
        fileName: "styles.css",
        //output: true,
        failOnError: true,
        outputStyle: "compressed",
      }),
      external(),
      terser(),
    ],
    external: ["react", "react-dom", "next/image"],
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.scss$/],
  },
  {
    input: "./src/components/styles/theme/_theme.scss",
    output: [
      {
        file: "dist/theme.js",
        format: "cjs",
      },
      {
        file: "dist/theme.js",
        format: "esm",
      },
    ],
    plugins: [
      scss({
        fileName: "theme.css",
        failOnError: true,
        outputStyle: "compressed",
      }),
      external(),
      terser(),
    ],
    external: ["react", "react-dom", "next/image"],
  },
];
