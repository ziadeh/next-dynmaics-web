function HomeBanner() {
  return (
    <div className="relative flex min-h-[90vh] flex-col">
      <div className="bg-nd-secondary-950/70 flex w-full flex-1 flex-col justify-center">
        <div className="container relative z-10 px-10 py-32">
          <div className="grid grid-cols-4">
            <div className="col-span-4 lg:col-span-2">
              <h1 className="text-2xl leading-tight text-white lg:text-[2.5rem]">
                Your strategic partner in crafting innovative technologies that
                translate visions into measurable success
              </h1>
              <p className="mt-10 text-sm leading-normal text-white lg:text-base">
                We believe innovation starts with a vision and thrives through
                execution. As your trusted partner, we combine strategic insight
                with cutting-edge technology to bring your ideas to life.
                Whether it’s designing intuitive solutions, engineering scalable
                platforms, or uncovering the power of your data, we deliver
                tailored tools that drive meaningful results. Together, we’ll
                turn your boldest goals into transformative outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="from-nd-secondary-950 to-nd-secondary-950/0 absolute -bottom-1 h-48 w-full bg-gradient-to-t" />
      <div className="absolute inset-0 bottom-0 -z-10 overflow-hidden">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/banner-01.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default HomeBanner;
