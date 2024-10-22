import { icons } from './images';

export const links = {
  medium: "https://medium.com/mozilla-firefox-club/tagged/mfcvit",
  facebook: "https://www.facebook.com/mfcvit/",
  instagram: "https://www.instagram.com/mfc_vit/",
  youtube: "https://www.youtube.com/c/MozillaFirefoxClubVIT",
  github: "https://github.com/MFC-VIT",
  linkedin: "https://www.linkedin.com/company/mfcvit/mycompany/",
  twitter: "https://x.com/mfc_vit"
}

export const socials = [
  { src: icons.facebook, href: links.facebook },
  { src: icons.instagram, href: links.instagram },
  { src: icons.youtube, href: links.youtube },
  { src: icons.github, href: links.github },
  { src: icons.linkedin, href: links.linkedin },
  { src: icons.twitter, href: links.twitter },
  { src: icons.medium, href: links.medium },
]


const PROD_BE_URL = import.meta.env.VITE_BE_URL;
const DEV_BE_URL = import.meta.env.VITE_DEV_URL;
const NODE_ENV = import.meta.env.VITE_NODE_ENV;
export const BE_URL = NODE_ENV === "production" ? PROD_BE_URL : DEV_BE_URL;

export const BLOGS_ENDPOINT = BE_URL + "blogs";
export const MAIL_ENDPOINT = BE_URL + "send-mail";