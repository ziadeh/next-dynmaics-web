"use client";
import React from "react";
import classes from "@/styles/stars.module.css";
import { Button } from "@/components/ui/button";
import { StarsBackground } from "@/components/animate-ui/backgrounds/stars";
import { api } from "@/trpc/react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangleIcon, CheckCircle2Icon } from "lucide-react";

function ContactUs() {
  const {
    mutateAsync: contactMutation,
    isPending,
    isError,
    isSuccess,
  } = api.contact.submitForm.useMutation();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = {
      name: formData.name ? "" : "Name is required",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ? ""
        : "Invalid email address",
      message: formData.message ? "" : "Message is required",
    };

    setFormErrors(errors);
    if (Object.values(errors).some(Boolean)) return;

    try {
      await contactMutation(formData);
      if (typeof window !== "undefined" && window.innerWidth <= 768) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setFormData({ name: "", email: "", message: "" });
      setFormErrors({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="mx-auto max-w-[1104px] px-4 py-32 sm:px-8 xl:px-0">
      <div className="bg-dark pt-25 lg:px-27.5 relative z-10 overflow-hidden rounded-[30px] px-4 sm:px-20">
        <div className="gap-7.5 -z-1 absolute -top-[16%] left-1/2 flex w-full max-w-[690px] -translate-x-1/2 justify-center opacity-40">
          <div className="nd-custom-grid nd-custom-grid-border relative bottom-12 h-[250px] w-full max-w-[50px]"></div>
          <div className="nd-custom-grid nd-custom-grid-border relative bottom-7 h-[250px] w-full max-w-[50px]"></div>
          <div className="nd-custom-grid nd-custom-grid-border relative bottom-3 h-[250px] w-full max-w-[50px]"></div>
          <div className="nd-custom-grid nd-custom-grid-border relative h-[250px] w-full max-w-[50px]"></div>
          <div className="nd-custom-grid nd-custom-grid-border relative h-[250px] w-full max-w-[50px]"></div>
          <div className="nd-custom-grid nd-custom-grid-border relative h-[250px] w-full max-w-[50px]"></div>
          <div className="nd-custom-grid nd-custom-grid-border relative bottom-2 h-[250px] w-full max-w-[50px]"></div>
          <div className="nd-custom-grid nd-custom-grid-border relative bottom-5 h-[250px] w-full max-w-[50px]"></div>
          <div className="nd-custom-grid nd-custom-grid-border relative bottom-8 h-[250px] w-full max-w-[50px]"></div>
          <StarsBackground factor={0} className="absolute z-40 opacity-100" />
        </div>
        <div className="absolute -top-32 left-1/2 -z-10 h-64 w-full max-w-[482px] -translate-x-1/2 overflow-hidden">
          <div className={classes.stars}></div>
          <div className={classes.stars2}></div>
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-30">
          <span className="-z-1 absolute left-1/2 top-0 -translate-x-1/2">
            <img src="/images/blur-19.svg" alt="blur" className="max-w-none" />
          </span>
          <span className="-z-1 absolute left-1/2 top-0 -translate-x-1/2">
            <img src="/images/blur-20.svg" alt="blur" className="max-w-none" />
          </span>
          <span className="-z-1 absolute left-1/2 top-0 -translate-x-1/2">
            <img src="/images/blur-21.svg" alt="blur" className="max-w-none" />
          </span>
        </div>
        <div className="mx-auto mt-20 max-w-[1222px] px-10 text-center">
          <h1 className="mb-4.5 xl:text-heading-2 text-2xl font-extrabold text-white sm:text-4xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-[714px] text-white">
            We’re here to help you achieve your business goals with our
            custom-built solutions. Contact us today to learn how we can help
            you optimize your operations and drive success.
          </p>
        </div>
        <div className="form-box-gradient bg-dark xl:p-15 relative mt-12 overflow-hidden rounded-[25px] p-6 sm:p-8">
          <div className="min-h-[600px]">
            {isError && (
              <Alert
                variant="default"
                className="mb-4 border-red-400 bg-red-300/30 text-white"
              >
                <AlertTriangleIcon stroke="#f87171" />
                <AlertTitle className="">Submission Failed</AlertTitle>
                <AlertDescription>
                  Sorry, something went wrong while sending your message. Please
                  try again later.
                </AlertDescription>
              </Alert>
            )}
            {isSuccess && (
              <Alert
                variant="default"
                className="mb-4 border-green-400 bg-green-300/30 text-white"
              >
                <CheckCircle2Icon stroke="#4ade80" />
                <AlertTitle className="">Message Sent!</AlertTitle>
                <AlertDescription>
                  Thank you for contacting us. We’ve received your message and
                  will get back to you shortly.
                </AlertDescription>
              </Alert>
            )}
            <form onSubmit={handleSubmit} className="relative z-10 lg:p-10">
              <div className="-mx-4 flex flex-wrap xl:-mx-10">
                <div className="w-full px-4 md:w-1/2 xl:px-5">
                  <div className="mb-9.5">
                    <label
                      htmlFor="name"
                      className="mb-2.5 block font-medium text-white"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="w-full rounded-lg border border-white/[0.12] bg-white/[0.05] px-6 py-3 text-nd-primary-50 outline-none focus:border-nd-primary-900"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    {formErrors.name && (
                      <p className="text-red-500">{formErrors.name}</p>
                    )}
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2 xl:px-5">
                  <div className="mb-9.5">
                    <label
                      htmlFor="email"
                      className="mb-2.5 block font-medium text-white"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      className="w-full rounded-lg border border-white/[0.12] bg-white/[0.05] px-6 py-3 text-nd-primary-50 outline-none focus:border-nd-primary-900"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    {formErrors.email && (
                      <p className="text-red-500">{formErrors.email}</p>
                    )}
                  </div>
                </div>
                <div className="mt-6 w-full px-4 xl:px-5">
                  <div className="mb-10">
                    <label
                      htmlFor="message"
                      className="mb-2.5 block font-medium text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Type your message"
                      rows={6}
                      className="w-full rounded-lg border border-white/[0.12] bg-white/[0.05] px-6 py-3 text-nd-primary-50 outline-none focus:border-nd-primary-900"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                    {formErrors.message && (
                      <p className="text-red-500">{formErrors.message}</p>
                    )}
                  </div>
                </div>
                <div className="w-full px-4 xl:px-5">
                  <div className="text-center">
                    <Button className="mx-auto mt-8 block h-full items-center justify-center gap-2 whitespace-nowrap rounded-md border border-nd-primary-600 bg-transparent px-12 py-4 text-lg font-medium text-white shadow-sm transition-colors duration-300 hover:bg-nd-primary-600 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:bg-nd-primary-700 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none">
                      {isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
