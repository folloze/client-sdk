import * as esbuild from "esbuild";

// Automatically exclude all node_modules from the bundled version
// const { nodeExternalsPlugin } = require('esbuild-node-externals')

esbuild
    .build({
        // minify: true,
        // sourcemap: true,

        format: "esm",
        target: "es2017",
        entryPoints: [
            // The whole shebang
            "./src/index.ts",
            "./src/sdk.ts",
            "./src/analytics/Analytics.ts",
            "./src/designer/Designer.ts",
            "./src/liveboard/Liveboard.ts",
            "./src/common/common.ts",
            "./src/common/interfaces/types.ts",
        ],
        outdir: "dist",
        chunkNames: "chunks/[name].[hash]",
        incremental: false,
        define: {
            "process.env.NODE_ENV": '"production"',
        },
        //watch: true,
        treeShaking: true,
        bundle: true,
        external: [],
        splitting: false,
        minify: true,
    })
    .catch(() => process.exit(1));
