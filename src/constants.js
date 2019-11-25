const GITHUB_API_TOKEN = `${process.env.REACT_APP_GITHUB_API_TOKEN}`;
const GITHUB_API_USER = `${process.env.REACT_APP_GITHUB_API_USER}`;

export const GITHUB_DEFAULT_HEADER = new Headers({
  'Authorization': 'Basic ' + btoa(`${GITHUB_API_USER}:${GITHUB_API_TOKEN}`)
});

export const GITHUB_BASE_URL = "https://api.github.com/"