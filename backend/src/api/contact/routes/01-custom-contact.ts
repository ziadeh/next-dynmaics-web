export default {
  routes: [
    {
      method: "GET",
      path: "/contact/email",
      handler: "contact.sendLatestEmail",
    },
  ],
};
