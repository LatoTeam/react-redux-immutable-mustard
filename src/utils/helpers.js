export function cleanUrl(url) {
  // Remove unwanted characters, only accept alphanumeric and space
  let startUrl = url.replace(/[^A-Za-z0-9 ]/g, '');
  // Replace multi spaces with a single space
  startUrl = startUrl.replace(/\s{2,}/g, ' ');
  // Replace space with a '-' symbol */
  startUrl = startUrl.replace(/\s/g, "-");
  return startUrl.toLowerCase();
}
