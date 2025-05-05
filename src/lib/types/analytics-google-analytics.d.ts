declare module "@analytics/google-analytics" {
  import { AnalyticsPlugin } from "analytics";

  interface GoogleAnalyticsPluginConfig {
    measurementIds: string[];
    debug?: boolean;
    dataLayerName?: string;
    gtagName?: string;
    gtagConfig?: {
      anonymize_ip?: boolean;
      cookie_domain?: string;
      cookie_expires?: number;
      cookie_prefix?: string;
      cookie_update?: boolean;
      cookie_flags?: string;
    };
    customScriptSrc?: string;
    nonce?: string;
  }

  const googleAnalytics: (
    config: GoogleAnalyticsPluginConfig
  ) => AnalyticsPlugin;
  export default googleAnalytics;
}
