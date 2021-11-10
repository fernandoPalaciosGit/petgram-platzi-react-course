export const useQueryParam = (param) => {
  const urlParam = new window.URLSearchParams(window.location.search)
  return { param: urlParam.get(param) }
}
