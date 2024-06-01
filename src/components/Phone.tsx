import { HTMLAttributes } from "react";
import { cn } from "~/lib/utils";
import phoneTemplateDark from "~/assets/phone-template-dark-edges.png";
import phoneTemplateWhite from "~/assets/phone-template-white-edges.png";
import Image, { StaticImageData } from "next/image";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: StaticImageData;
  dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        src={dark ? phoneTemplateDark : phoneTemplateWhite}
        className="pointer-events-none z-50 select-none"
        alt="phone image"
      />

      <div className="absolute -z-10 inset-0">
        <Image
          className="object-cover min-w-full min-h-full"
          src={imgSrc}
          alt="overlaying phone image"
        />
      </div>
    </div>
  );
};

export default Phone;
