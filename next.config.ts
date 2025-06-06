import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: [
    "antd",
    "@ant-design/cssinjs",
    "@ant-design/icons",
    "rc-util",
    "rc-pagination",
    "rc-picker",
    "rc-tree",
    "rc-table",
  ],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        "rc-util": "commonjs rc-util",
        "rc-util/es": "commonjs rc-util/es",
      });
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      "rc-util/es/utils/get": "rc-util/lib/utils/get",
      "rc-util/es/utils/set": "rc-util/lib/utils/set",
      "rc-util/es": "rc-util/lib",
    };

    return config;
  },
};

export default nextConfig;
