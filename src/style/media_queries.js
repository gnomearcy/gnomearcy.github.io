const old_mobile_bp = 320;
const mobile_desktop_bp = 868;

const query_old = `(max-width: ${old_mobile_bp - 1}px)`
const query_mobile = `(min-width: ${old_mobile_bp}px) and (max-width: ${parseInt(mobile_desktop_bp)}px)`
const query_desktop = `(min-width: ${parseInt(mobile_desktop_bp) + 1}px)`

export default {
  // mobile: "@media only screen and (min-width: 320px) and (max-width: 868px)",
  // desktop: "@media only screen and (min-width: 869px)",
  old: `@media only screen and ${query_old}`,
  mobile: `@media only screen and ${query_mobile}`,
  desktop: `@media only screen and ${query_desktop}`,

  old_query : query_old,
  mobile_query: query_mobile,
  desktop_query: query_desktop,

  old_mobile_breakpoint: old_mobile_bp,
  mobile_desktop_breakpoint: mobile_desktop_bp
}
