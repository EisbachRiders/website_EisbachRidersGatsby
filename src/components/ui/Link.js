import * as React from "react"
import MuiLink from "@material-ui/core/Link"
import { Link as GatsbyLink } from "gatsby"

const Link = React.forwardRef(function Link(props, ref) {
  return (
    <MuiLink
      component={GatsbyLink}
      ref={ref}
      {...props}
      sx={{
        textDecoration: "none",
        "&:hover": {
          textDecoration: "none",
        },
      }}
    />
  )
})

export default Link
