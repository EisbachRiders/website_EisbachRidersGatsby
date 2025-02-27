import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/styles"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Container from "../ui/Container"
import FeatureDetail from "./FeatureDetail"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    [theme.breakpoints.up("md")]: {
      flexWrap: "nowrap",
    },
    [theme.breakpoints.up("lg")]: {
      alignItems: "center",
    },
  },
  title: {
    textTransform: "uppercase",
    textAlign: "center",
    paddingTop: 15,
    [theme.breakpoints.up("sm")]: {
      paddingTop: 15,
      paddingBottom: 15,
    },
  },
  containerInfo: {
    flexBasis: "100%",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      marginLeft: 30,
      flexBasis: "30%",
    },
  },
  containerImg: {
    flexBasis: "30%",
  },
  detailText: {
    fontSize: 12,
    marginBottom: 15,
    [theme.breakpoints.up("md")]: {
      fontSize: 14,
    },
  },
  detailTitle: {
    fontFamily: "secondary",
    fontSize: 22,
    marginBottom: 15,
    [theme.breakpoints.up("md")]: {
      fontSize: 32,
    },
  },
  img: {
    width: "60%",
    margin: "0 auto",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
  },
  button: {
    color: theme.color.black,
  },
}))

function FeaturedProduct() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Container background="grayLt">
      <div className={classes.container}>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <FeatureDetail />
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block", md: "none" } }}>
          <div className={classes.containerImg}>
            <StaticImage
              src="../../assets/websiteImages/single-tab-honeycomb-fin-green.png"
              alt="featured product"
              placeholder="blurred"
              className={classes.img}
            />
          </div>
        </Box>
        <div className={classes.containerInfo}>
          <Typography className={classes.detailTitle}>Honeycomb Fin</Typography>
          <Typography className={classes.detailText}>
            {t("homepage.featured")}
          </Typography>
          <Button
            color="primary"
            variant="outlined"
            alt="more information"
            className={classes.button}
            href="https://shop.eisbach-riders.com/shop/single-tab-fiberglass-honeycomb-fins/"
          >
            {t("common.more")}
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default FeaturedProduct
