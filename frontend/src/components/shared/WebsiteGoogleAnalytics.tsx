"use client";
import { GoogleAnalytics } from "nextjs-google-analytics";

function WebsiteGoogleAnalytics() {
  return (
    <div>
      <GoogleAnalytics trackPageViews />
    </div>
  );
}

export default WebsiteGoogleAnalytics;
