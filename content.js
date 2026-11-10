/* START HERE — replace the demo details with your own.
 * Keep quotes around text and commas between entries.
 * Images and résumé paths are relative to index.html.
 * Demo projects and experience below are fictional examples.
 */
window.portfolio = {
  name: "Roboman",
  initials: "Roboman",
  role: "Discord creator & developer",
  headline: ["Better communities.", "Built", "together."],
  introduction: "I’m roboman. I build Discord communities, custom bots, and visual identities that make your server feel like somewhere people belong.",
  availability: "Hi ~",
  location: "BASED IN MELBOURNE · WORKING EVERYWHERE",
  // Replace YOUR_USER_ID with your Discord user ID; YOUR_INVITE with an invite code.
  discordUsername: "@yourusername",
  discordProfileUrl: "https://discord.com/users/YOUR_USER_ID",
  discordServerName: "Your community",
  discordServerUrl: "https://discord.gg/YOUR_INVITE",
  discordServerRole: "Server Designer",
  discordServerDescription: "You’ll usually find me here. Mention me in the general channel and say hi.",
  aboutTitle: "Good work starts with a curious mind.",
  bio: "I work at the intersection of strategy, design, and code. My approach is simple: ask better questions, sweat the small things, and make something that feels unmistakably you. Outside the screen, you’ll find me collecting books, chasing good coffee, and noticing the details.",
  skills: ["Server setups", "Discord bots", "Community design", "Automation"],
  resumeUrl: "", // Example: "./assets/resume.pdf". Empty hides the link.
  theme: "sage", // paper, sage, or night
  showCustomiser: false, // Set false for your published portfolio.
  sections: { projects: true, about: true, experience: false, contact: true },
  // EASY CARD EDITING: open card-editor.html, click Add card, then download content.js.
  // Replace this file with the downloaded version. Your other settings are preserved.
  // You can also duplicate an object below. Only title is required. Empty links are hidden.
  // All examples are fictional. Replace screenshots with your own work.
  projects: [
    {
      title: "Orbit Community", category: "Server setups", status: "DEMO CONCEPT",
      description: "A welcoming community layout with clear onboarding, organised channels, and a role system that makes sense.",
      image: "./assets/images/discord-server.svg", imageAlt: "Illustrative Discord server setup with organised channel groups",
      client: "Orbit · demo community", role: "Server design & configuration",
      tags: ["Onboarding", "Roles & permissions", "Channel layout"],
      year: "2026", liveUrl: "", linkLabel: "View showcase ↗", discordUrl: "", sourceUrl: ""
    },
    {
      title: "Atlas Assistant", category: "Discord bots", status: "DEMO CONCEPT",
      description: "A custom bot concept for moderation, support tickets, and useful slash commands. Built around a calmer staff workflow.",
      image: "./assets/images/discord-bot.svg", imageAlt: "Illustrative Discord bot response with a support ticket panel",
      client: "Atlas · demo project", role: "Bot development & interaction design",
      tags: ["Slash commands", "Tickets", "Moderation"],
      year: "2026", liveUrl: "", linkLabel: "View bot demo ↗", discordUrl: "", sourceUrl: ""
    },
    {
      title: "Bloom Identity", category: "Design & graphics", status: "DEMO CONCEPT",
      description: "A coordinated server identity with a banner, role colours, and announcement graphics that feel like one community.",
      image: "./assets/images/discord-brand.svg", imageAlt: "Illustrative Bloom community banner and matching role colour palette",
      client: "Bloom · demo community", role: "Visual identity & server graphics",
      tags: ["Server banners", "Role colours", "Branding"],
      year: "2026", liveUrl: "", linkLabel: "View designs ↗", discordUrl: "", sourceUrl: ""
    },
    {
      title: "Support, simplified", category: "Discord bots", status: "DEMO CONCEPT",
      description: "A reusable ticket flow concept with clear categories, helpful prompts, and a private space for each support request.",
      image: "./assets/images/discord-bot.svg", imageAlt: "Illustrative support bot panel with a create ticket button",
      client: "Personal · demo project", role: "Automation & support workflow",
      tags: ["Automation", "Support", "Private channels"],
      year: "2025", liveUrl: "", linkLabel: "View workflow ↗", discordUrl: "", sourceUrl: ""
    }
  ],
  experience: [
    { period: "2024 — NOW", role: "Independent designer", company: "Self-employed", description: "Partnering with thoughtful people to build brands and digital experiences." },
    { period: "2021 — 2024", role: "Digital designer", company: "Example Studio", description: "Brand-led websites, visual systems, and creative development." }
  ],
  socials: [
    { label: "GitHub", url: "" },
    { label: "LinkedIn", url: "" },
    { label: "Instagram", url: "" }
  ] // Empty URLs hide links. Add your own real profile URLs.
};
