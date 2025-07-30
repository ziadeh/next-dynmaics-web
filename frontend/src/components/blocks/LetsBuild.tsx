import classes from "@/styles/stars.module.css";
import { Button } from "../ui/button";
import Link from "next/link";
import { StarsBackground } from "../animate-ui/backgrounds/stars";
import { LiquidButton } from "@/components/animate-ui/buttons/liquid";

interface LetsBuildProps {
  title: string;
  content: string;
  subContent: string;
  buttonText: string;
}

const LetsBuild = ({
  title,
  content,
  subContent,
  buttonText,
}: LetsBuildProps) => {
  return (
    <div className="mx-auto">
      <div className="cta-box-gradient bg-dark lg:py-25 z-999 relative overflow-hidden px-4 py-24">
        <span className="-z-1 absolute bottom-0 left-0 right-0">
          <img src="/images/grid.svg" className="mx-auto" />
        </span>
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <span className="-z-1 absolute bottom-0 left-1/2 -translate-x-1/2">
            <img src="/images/blur-23.svg" alt="blur" className="max-w-none" />
          </span>
          <span className="-z-1 absolute bottom-0 left-1/2 -translate-x-1/2">
            <img src="/images/blur-24.svg" alt="blur" className="max-w-none" />
          </span>
        </div>
        <div className="relative z-10 text-center">
          <h2 className="mb-4.5 xl:text-heading-2 text-2xl font-semibold text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mb-9 mt-5 max-w-[714px] text-sm text-nd-primary-100">
            {content}
          </p>
          <p className="mx-auto mt-4 max-w-[714px] text-xs text-nd-primary-100">
            {subContent}
          </p>
          <Button
            asChild
            className="mx-auto mt-8 inline-block h-full items-center justify-center gap-2 whitespace-nowrap rounded-md border-2 border-nd-primary-600 bg-transparent px-12 py-4 text-lg font-medium text-white shadow-sm transition-colors duration-300 hover:bg-nd-primary-600 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:bg-nd-primary-700 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none"
          >
            <Link href="/contact-us">{buttonText}</Link>
          </Button>
        </div>
        <div className="-z-1 absolute -bottom-0 left-1/2 h-60 w-full max-w-[482px] -translate-x-1/2 overflow-hidden">
          <StarsBackground className="w-full opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default LetsBuild;
