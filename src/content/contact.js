// ─── CONTACT MODAL ───────────────────────────────────────────────────────────
// Update FORMSPREE_ENDPOINT after creating a free account at formspree.io.
// Sign up → New Form → copy the endpoint ID (looks like "xpwzabcd")
// Replace the placeholder below with your actual endpoint.
//
// Submissions will arrive at: hornesmc@gmail.com

export const contact = {
  heading: "Get in Touch",
  subtext: "Whether you want to connect, collaborate, or just say hello, I'd love to hear from you.",
  linkedIn: "https://www.linkedin.com/in/sunnyhorne/",

  // Replace with your Formspree endpoint after setup:
  // 1. Go to formspree.io and create a free account
  // 2. Create a new form and set the email to hornesmc@gmail.com
  // 3. Copy the form endpoint ID and paste it below
  formspreeEndpoint: "https://formspree.io/f/xwvabbbp",

  fields: {
    name: "Your Name",
    email: "Your Email",
    message: "Message",
    submit: "Send Message",
    success: "Thanks for reaching out. I'll be in touch soon.",
    error: "Something went wrong. Please try again or reach me on LinkedIn.",
  },
};
