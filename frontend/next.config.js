/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";
/** @type {import("next").NextConfig} */

const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nd-space.nyc3.digitaloceanspaces.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  assetPrefix: "https://nd-space.nyc3.digitaloceanspaces.com",
};

export default config;
