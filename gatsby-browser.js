/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (typeof window !== "undefined") {
    const locationHash = window.location.hash.split("#")[1];
    if (locationHash) {
      return false;
    }
  }
  return true;
};
