import { MotionEffect } from "../animate-ui/effects/motion-effect";
import { WritingText } from "../animate-ui/text/writing";

function HomeBanner() {
  return (
    <div className="relative -mb-72 flex min-h-[90vh] flex-col md:-mb-0">
      <div className="flex w-full flex-1 flex-col justify-center bg-nd-secondary-950/70">
        <div className="container relative z-10 px-10 py-32">
          <div className="grid grid-cols-4">
            <div className="col-span-4 lg:col-span-2">
              <h1 className="text-2xl leading-tight text-white lg:text-[2.5rem]">
                <WritingText
                  transition={{
                    type: "tween",
                    bounce: 0,
                    duration: 0.5,
                    delay: 0.03,
                  }}
                  inViewOnce={true}
                  inView={true}
                  text="Your strategic partner in crafting innovative technologies that translate visions into measurable success"
                />
              </h1>

              <MotionEffect
                fade
                delay={0.4}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                slide={{
                  direction: "up",
                  offset: 10,
                }}
                inView
              >
                <p className="relative mt-10 overflow-hidden text-sm leading-normal text-white lg:text-base">
                  We believe innovation starts with a vision and thrives through
                  execution. As your trusted partner, we combine strategic
                  insight with cutting-edge technology to bring your ideas to
                  life. Whether it’s designing intuitive solutions, engineering
                  scalable platforms, or uncovering the power of your data, we
                  deliver tailored tools that drive meaningful results.
                  Together, we’ll turn your boldest goals into transformative
                  outcomes.
                </p>
              </MotionEffect>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-1 h-48 w-full bg-gradient-to-t from-nd-secondary-950 to-nd-secondary-950/0" />
      <div className="absolute inset-0 bottom-0 -z-10 overflow-hidden">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://nd-space.nyc3.cdn.digitaloceanspaces.com/uploads/banner-01.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default HomeBanner;
