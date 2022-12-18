export function appendParamsToUrl(targetUrl) {
  const currentQueryString = removeQueryParams(window.location.search, "query");
  const params = new URLSearchParams(currentQueryString);

  const urlWithQuery = new URL(targetUrl);
  params.forEach((value, key) => {
    urlWithQuery.searchParams.append(key, value);
  });

  return urlWithQuery.toString();
}

export function removeQueryParams(url:string, paramToRemove: string) {
  const queryString = url.replace("?", "&");
  const result = queryString.replace(new RegExp(`&${paramToRemove}=[^&]*`), "" );
  return result.replace("&", "?");
}
