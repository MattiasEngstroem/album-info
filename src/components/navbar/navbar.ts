import "./navbar.scss";

export const navbarListeners = (): void => {
  const searchLink = document.getElementById(
    "link-search"
  ) as HTMLAnchorElement;
  const releasesLink = document.getElementById(
    "link-releases"
  ) as HTMLAnchorElement;
  const infoLink = document.getElementById("link-info") as HTMLAnchorElement;

  const searchSection = document.getElementById(
    "search-section"
  ) as HTMLDivElement;
  const releasesSection = document.getElementById(
    "releases-section"
  ) as HTMLDivElement;
  const infoSection = document.getElementById("info-section") as HTMLDivElement;

  searchLink?.addEventListener("click", () => {
    searchSection?.scrollIntoView({ behavior: "smooth" });
  });

  releasesLink?.addEventListener("click", () => {
    releasesSection?.scrollIntoView({ behavior: "smooth" });
  });

  infoLink?.addEventListener("click", () => {
    infoSection?.scrollIntoView({ behavior: "smooth" });
  });
};
