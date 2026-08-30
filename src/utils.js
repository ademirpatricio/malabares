/**
 * Retorna true para links externos (http, https, //).
 * Use para decidir entre <a> e React Router <Link>.
 */
export const isExternal = (url) => url?.startsWith("http") || url?.startsWith("//");
