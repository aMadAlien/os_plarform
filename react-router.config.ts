import type { Config } from "@react-router/dev/config";

const basename = process.env.BASE_PATH || "/";

export default {
  ssr: false,
  basename,
} satisfies Config;
