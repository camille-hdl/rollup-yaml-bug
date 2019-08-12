import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";

export default () => {
    const bundle = {
        input: "./index.js",
        output: {
            file: "./dist/yaml.min.js",
            format: "iife",
            name: "YAML",
        },
        plugins: [
            nodeResolve({
                mainFields: ["module", "main", "browser"],
                preferBuiltins: true,
            }),
            commonjs({
                include: "node_modules/**",
                namedExports: {
                    "./node_modules/process/browser.js": ["nextTick"],
                    "./node_modules/events/events.js": ["EventEmitter"],
                },
            }),
        ]
    };
    return bundle;
};
