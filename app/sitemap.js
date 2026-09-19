export default function sitemap() {
  const baseUrl = "https://tayyaba-sadaqat-portfolio.vercel.app";

  const serviceSlugs = [
    "web-development",
    "ai-integration",
    "frontend-development",
    "creative-design",
  ];

  const projectSlugs = [
    "nishaan",
    "cotsle",
    "luxe-by-ma",
    "corvit-course-advisor",
    "birds-classification-model",
    "protein-secondary-structure",
    "project-doctor",
    "signature-trips",
    "time-bank",
    "donation-tracker",
  ];

  const servicePages = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const projectPages = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },

    ...servicePages,
    ...projectPages,
  ];
}