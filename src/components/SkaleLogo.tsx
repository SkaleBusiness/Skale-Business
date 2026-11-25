import React from "react";

interface SkaleLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * Logomarca oficial enviada pela Skale (/assets/aistudio/4_cce2e3ea.png).
 * Aplica recorte matemático preciso sobre o canvas 1920x1080 (bbox 1530x453)
 * para eliminar margens transparentes sem distorcer nem redesenhar o arquivo original.
 */
export const SkaleLogo: React.FC<SkaleLogoProps> = ({
  className = "",
  size = "md",
}) => {
  const heightClass =
    size === "sm" ? "h-8" : size === "lg" ? "h-12" : "h-9 sm:h-10";

  return (
    <div
      className={`relative overflow-hidden select-none shrink-0 aspect-[1530/453] ${heightClass} ${className}`}
      aria-label="Skale Internet Marketing"
    >
      <img
        src="/assets/aistudio/4_cce2e3ea.png"
        alt="Skale Internet Marketing"
        referrerPolicy="no-referrer"
        draggable={false}
        className="pointer-events-none absolute max-w-none select-none"
        style={{
          width: "125.4902%",
          height: "238.4106%",
          left: "-11.9608%",
          top: "-71.3024%",
        }}
      />
    </div>
  );
};
