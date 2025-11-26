import { useEffect } from "react";
import { Meta } from "../../components/Meta";

export default function Admin() {
  useEffect(() => {
    // Load the CMS scripts
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const loadCMS = async () => {
      try {
        await loadScript(
          "https://identity.netlify.com/v1/netlify-identity-widget.js",
        );
        await loadScript(
          "https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js",
        );
      } catch (error) {
        console.error("Error loading CMS scripts:", error);
      }
    };

    loadCMS();
  }, []);

  return (
    <>
      <Meta title="Content Manager" noIndex />
      <link href="/admin/config.yml" type="text/yaml" rel="cms-config-url" />
      <div id="nc-root" />
    </>
  );
}
