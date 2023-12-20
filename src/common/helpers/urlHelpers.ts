export function appendParamsToUrl(targetUrl: string): string {
    const currentQueryString = removeQueryParams(window.location.search, "query");
    const params = new URLSearchParams(currentQueryString);

    const urlWithQuery = new URL(targetUrl);
    params.forEach((value, key) => {
        urlWithQuery.searchParams.append(key, value);
    });

    return urlWithQuery.toString();
}

export function removeQueryParams(url: string, paramToRemove: string): string {
    if (!url) {
        return url;
    }
    const urlObject = new URL(url);
    urlObject.searchParams.delete(paramToRemove);
    return urlObject.toString();

    /* what the hell is that? - keeping it in to see if my solution is working
  const queryString = url.replace("?", "&");
  const result = queryString.replace(new RegExp(`&${paramToRemove}=[^&]*`), "" );
  return result.replace("&", "?");
   */
}
