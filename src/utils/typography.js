import Typography from "typography"
import altonTheme from 'typography-theme-alton'

const style = Object.assign(
    altonTheme,
    {
        bodyColor: "#2e2e2e"
    }
);

const typography = new Typography(
    style
)

export default typography;