export function getHubspotUtkCookie(): string | null {
  const cookieName = 'hubspotutk';
  const cookieValues = document.cookie.split(';');
  for (let cookieValue of cookieValues) {
    while (cookieValue.charAt(0) === ' ') {
      cookieValue = cookieValue.substring(1, cookieValue.length);
    }
    if (cookieValue.indexOf(`${cookieName}=`) === 0) {
      return cookieValue.substring(cookieName.length + 1, cookieValue.length);
    }
  }
  return null;
}