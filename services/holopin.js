const base64Img = require('base64-img'),
  axios = require('axios'),
  logo = base64Img.base64Sync('./public/images/holopin-icon.png'),

  // default config for badge
  {
    DEFAULT_USERNAME,
    DEFAULT_PROFILE_URL,
    HOLOPIN_BASE_URL,
    BADGE_OPTIONS,
  } = require('../config'),
  { COLOR_A, COLOR_B, DEFAULT_STYLE, STATIC_BASE_URL } = BADGE_OPTIONS;

(getProfileUrl = (username) => {
  if (!username) return DEFAULT_PROFILE_URL;

  const profileURL = `${HOLOPIN_BASE_URL}/@${username}`;
  return profileURL;
}),
  (downloadBadge = async (badgeURL) => {
    const response = await axios.get(badgeURL),
      svgXml = response.data;

    return svgXml;
  });

module.exports = {
  /**
   *
   * Generate a static badge for your Holopin profile
   * Sample profile: https://holopin.io/@vinitshahdeo
   *
   * @param {string} username - Holopin username like `vinitshahdeo`
   * @param {style} style - possible values are `flat`, `flat-square`, `plastic`, `for-the-badge`, `social`
   * @returns Holopin README Badge
   */
   generateBadge: async (username = DEFAULT_USERNAME, style = DEFAULT_STYLE) => {
    const profileUrl = getProfileUrl(username),
      sanitizedUsername = username.replace(/[^a-zA-Z0-9 ]/g, ''), // remove special chars otherwise shields will throw an error
      qs = `link=${profileUrl}&logo=${logo}&colorA=${COLOR_A}&colorB=${COLOR_B}&style=${style}`,
      badgeURL = `${STATIC_BASE_URL}-${sanitizedUsername}-green?${qs}`;

    return downloadBadge(badgeURL);
  }
};