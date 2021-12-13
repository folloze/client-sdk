import * as esbuild from "esbuild";

// Automatically exclude all node_modules from the bundled version
// const { nodeExternalsPlugin } = require('esbuild-node-externals')

esbuild.build({
    // minify: true,
    // sourcemap: true,

    format: "esm",
    target: "esnext",
    entryPoints: [
        "./src/index.ts",
    ],
    outdir: "dist",
    chunkNames: "chunks/[name].[hash]",
    incremental: false,
    define: {
        "process.env.NODE_ENV": '"production"'
    },
    //watch: true,
    bundle: true,
    external: [],
    splitting: true,
}).catch(() => process.exit(1))
