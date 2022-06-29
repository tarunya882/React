import React from 'react';
import { Grid, Stack, Box } from "@mui/material";
import Typography from "../../atoms/Typography";
import Image from '../../atoms/Image';
import { footerData } from '../../../mockdata/footerData';
import logo from '../../../images/Blinkist.png';

const Footer = () => {
  return (
    <Box
      data-testid="footer"
      sx={{
        bgcolor: "background.paper",
        width: "100%",
        height: "370px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: '120px',
      }}
    >
      <Grid container spacing={6} width="100%" ml="290px">
        <Grid item lg={3.9} textAlign="left">
          <Image src={logo} alt="Logo" />
          <Box mt="32px">
            <Typography
              children={footerData.content[0]}
              variant="h5"
              color="#0365F2"
              fontFamily='CeraProBold'
            />
            <Typography
              children={footerData.content[1]}
              variant="h5"
              color="#0365F2"
              fontFamily='CeraProBold'
            />
          </Box>
        </Grid>
        <Grid item lg={7} >
          <Stack spacing={8} direction="row">
            {footerData.options.map((content, index) => (
              <Stack spacing={2} alignItems="flex-start" key={index}>
                <Typography
                  variant="body1"
                  children={content.heading}
                  color="#033160"
                  fontFamily='CeraProBold'
                />
                {content.content.map((item) => (
                  <Typography
                    variant="body2"
                    color="#85878C"
                    children={item}
                    fontFamily='CeraProMedium'
                  />
                ))}
              </Stack>
            ))}
          </Stack>
        </Grid>
        <Grid item lg={4.5} ml={-5}>
          <Typography
            variant="caption"
            children={footerData.copyright}
            color="#6D787E"
            fontFamily='CeraProMedium'
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
