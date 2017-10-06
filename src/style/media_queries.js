const mobile_desktop_breakpoint = 868;

export default {
  // mobile: "@media only screen and (min-width: 320px) and (max-width: 868px)",
  // desktop: "@media only screen and (min-width: 869px)",
  mobile: `@media only screen and (min-width: 320px) and (max-width: ${parseInt(mobile_desktop_breakpoint)}px)`,
  desktop: `@media only screen and (min-width: ${parseInt(mobile_desktop_breakpoint) + 1}px)`,
  mobile_desktop_breakpoint: mobile_desktop_breakpoint
}
