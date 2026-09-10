import type { NextConfig } from "next";

const config: NextConfig = {
  outputFileTracingIncludes: {
    "/*": ["./private/case-studies/**/*"],
  },
};
export default config;
