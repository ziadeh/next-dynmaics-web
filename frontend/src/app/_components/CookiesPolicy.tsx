import React from "react";

const policy = {
  title: "Cookie Consent Policy for Next Dynamics Website",
  introduction:
    "At Next Dynamics, we value your privacy and are committed to providing transparency regarding our use of cookies. This Cookie Consent Policy explains how we use cookies and allows you to make an informed choice about your cookie preferences.",
  sections: {
    whatAreCookies: {
      title: "What Are Cookies?",
      description:
        "Cookies are small text files stored on your device when you visit a website. They serve various purposes, including enabling website functionality, enhancing user experience, and providing analytical insights.",
    },
    typesOfCookies: {
      title: "Types of Cookies We Use",
      categories: [
        {
          type: "Essential Cookies (Required)",
          description:
            "These cookies are necessary for the website to function properly. They enable basic features like page navigation and security and cannot be turned off in our systems.",
        },
        {
          type: "Analytics and Performance Cookies",
          description:
            "We use cookies like those from Google Analytics to collect anonymized data about how visitors interact with our website. This helps us improve functionality and user experience.",
        },
        {
          type: "Functional Cookies",
          description:
            "These cookies remember your preferences and settings, such as language or region, to provide a personalized experience.",
        },
        {
          type: "Marketing Cookies (Optional)",
          description:
            "These cookies track browsing behavior and may be used to deliver targeted advertisements on other platforms.",
        },
      ],
    },
    yourChoices: {
      title: "Your Choices",
      options: [
        {
          option: "Accept All Cookies",
          description:
            "Enable all cookies, including analytics, functional, and marketing cookies.",
        },
        {
          option: "Customize Preferences",
          description:
            "Choose which types of cookies you wish to allow. You can manage your preferences at any time by clicking the 'Cookie Settings' link in the website footer.",
        },
        {
          option: "Decline Non-Essential Cookies",
          description:
            "Opt out of non-essential cookies while continuing to access the core functionality of the website.",
        },
      ],
    },
    managingCookies: {
      title: "Managing Cookies in Your Browser",
      description:
        "In addition to managing cookies on our website, you can control cookies through your browser settings. You can block or delete cookies; however, this may impact certain features of our website.",
    },
    thirdPartyCookies: {
      title: "Third-Party Cookies",
      description:
        "We may use third-party services like Google Analytics. These third parties may set their own cookies. For more information, please review their privacy policies.",
      links: [
        {
          service: "Google Analytics",
          privacyPolicyUrl: "https://policies.google.com/privacy",
        },
      ],
    },
    consentAndUpdates: {
      title: "Consent and Updates",
      description:
        "By clicking 'Accept All' or managing your preferences in the Cookie Consent Banner, you agree to our use of cookies as outlined in this policy. This policy may be updated periodically to reflect changes in regulations or our practices. Please check this page regularly for updates.",
    },
  },
};

function CookiesPolicy() {
  return (
    <div className="container max-w-[1222px] py-32">
      <div className="rounded-lg bg-white p-10">
        <div>
          <h1 className="mb-5 text-2xl font-semibold">{policy.title}</h1>
          <p className="mb-8">{policy.introduction}</p>

          {Object.entries(policy.sections).map(([key, section], index) => (
            <section key={index}>
              <h2 className="mb-4 mt-8 text-lg font-semibold">
                {section.title}
              </h2>
              {"description" in section && section.description && (
                <p>{section.description}</p>
              )}
              {"categories" in section &&
                section.categories?.map((category, idx) => (
                  <div className="ml-4" key={idx}>
                    <h3 className="my-4 font-semibold"> - {category.type}</h3>
                    <p>{category.description}</p>
                  </div>
                ))}
              {/* Handle options */}
              {"options" in section &&
                section.options?.map((option, idx) => (
                  <div className="my-4" key={idx}>
                    <p className="mb-4 font-semibold">{option.option}</p>
                    <p>{option.description}</p>
                  </div>
                ))}
              {/* Handle links */}
              {"links" in section &&
                section.links?.map((link, idx) => (
                  <p className="my-4" key={idx}>
                    <a
                      href={link.privacyPolicyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {link.service} Privacy Policy
                    </a>
                  </p>
                ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CookiesPolicy;
