import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"

const typography = new Typography({
  ...fairyGateTheme,
  // overrideThemeStyles: ({rhythm}, options, styles) => ({
  //   a: {
  //     textShadow: "none",
  //   },
  // }),
})

export const { scale, rhythm, options } = typography
export default typography
