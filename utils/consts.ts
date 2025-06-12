export const SITE_TITLE = "619の工具推荐";
export const SITE_DESCRIPTION =
  "推荐一些我喜欢的特殊工具";
export const EMAIL_FROM = "619 <mail@66619.eu.org>";
export const NEWSLETTER_CONFIRM_RESEND_INTERVAL_MINUTES = 0.5;
export const CATEGORIES = [
  {
    category: null,
    slug: "/",
    title: "全部工具",
    seoTitle: "全部工具 - 619の工具推荐",
    collection: "all",
  },
  {
    category: "starter-kit",
    slug: "/starter-kit",
    title: "Starter Kit",
    seoTitle: "Starter kits - 619の工具推荐",
    collection: "starterKit",
  },
  {
    category: "design-kit",
    slug: "/design-kit",
    title: "Design Kit",
    seoTitle: "Design kits - 619の工具推荐",
    collection: "designKit",
  },
  {
    category: "ui-component",
    slug: "/ui-component",
    title: "UI Component",
    seoTitle: "UI components - 619の工具推荐",
    collection: "uiComponent",
  },
  {
    category: "ai",
    slug: "/ai",
    title: "AI Tool",
    seoTitle: "AI tools - 619の工具推荐",
    collection: "ai",
  },
  {
    category: "dev",
    slug: "/dev",
    title: "Dev Tool",
    seoTitle: "Dev tools - 619の工具推荐",
    collection: "dev",
  },
  {
    category: "post",
    slug: "/post",
    title: "Post",
    seoTitle: "Posts - 619の工具推荐",
    collection: "post",
  },
] as const;

export type CATEGORY = (typeof CATEGORIES)[number];

export type CategoryPaths =
  | "/"
  | "/starter-kit"
  | "/design-kit"
  | "/ui-component"
  | "/ai"
  | "/post"
  | "/dev";

export type CategorySlugs =
  | "starter-kit"
  | "design-kit"
  | "ui-component"
  | "ai"
  | "post"
  | "dev";

export type CategoryKeys =
  | "starterKit"
  | "designKit"
  | "uiComponent"
  | "ai"
  | "dev";

export function getCategoryTitle(category: string) {
  return CATEGORIES.find((c) => c.category === category)?.title ?? "";
}

export function getFilterLabel(filterKey: string) {
  const fixedLabels: { [key: string]: string } = {
    componentCount: "Component count",
    pageExampleCount: "Page example count",
    uiComponents: "UI Components",
    uiLibrary: "UI Library",
    api: "API",
    subCategoryAI: "AI Subcategory",
    subCategoryDev: "Dev Subcategory",
  };

  return fixedLabels[filterKey] ?? filterKey;
}
