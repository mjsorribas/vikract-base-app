import Analytics from "analytics";
import googleAnalytics from "@analytics/google-analytics";

const googleAnalyticsTool = Analytics({
  app: "vikract-app", // Nombre de tu aplicación
  plugins: [
    googleAnalytics({
      measurementIds: [
        import.meta.env.VITE_GOOGLE_ANALYTICS_ID || "G-G9HTYNY09J",
      ],
      debug: true,
    }),
  ],
});

export default googleAnalyticsTool;
