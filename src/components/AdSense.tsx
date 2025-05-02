"use client";
import { useEffect } from "react";

interface AdSenseProps {
  client: string;
  slot: string;
  style?: React.CSSProperties;
}

const AdSense: React.FC<AdSenseProps> = ({ client, slot, style }) => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!(window as any).adsbygoogle) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={style || { display: "block", textAlign: "center" }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdSense;
