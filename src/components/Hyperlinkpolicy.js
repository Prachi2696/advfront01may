import React from "react";
import { useTranslation } from "react-i18next";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Grid, Typography } from "@mui/material";
import { useTheme } from '@material-ui/core/styles';
import { useEffect } from "react";
import { typeApiActionforStatic } from "../store/authslice";
import { useDispatch } from "react-redux";
export default function Hyperlinkpolicy() {
    const theme = useTheme();
    // const { t } = useTranslation();
    let dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('type',"s")
        dispatch(typeApiActionforStatic());
    }, []);
    return (
        <>
            <div style={{ marginLeft: '50px', marginRight: '50px', marginTop: '0px',paddingBottom:'600px'  }}>

                <Typography variant="subtitle2" style={{ color: theme.typography.primary.mainheading }}>
                    <a href="/">Home</a>&nbsp; <span>&gt;&gt;</span>&nbsp;
                    <a href="/adv/hyperlinkpolicy">Hyperlink Policy</a>
                </Typography>
                <br></br>
                <div>
                    <b>
                        <Typography variant="h4" style={{ fontWeight: '5px', color: theme.typography.primary.mainheading }}>Hyperlink Policy</Typography>
                    </b>
                    <br></br>
                    <b>
                        <Typography variant="h6" style={{ fontWeight: '5px', color: theme.typography.primary.mainheading }}>Links to external websites/portals</Typography>
                    </b>
                    <Typography variant="body1" style={{ color: theme.typography.primary.paragraphbody }}>
                        <p>
                            At many places on this website, you shall find links to other websites/portals. The links have been placed for your convenience. Aadhaar Data Vault is not responsible for the contents and reliability of the linked websites and does not necessarily endorse the views expressed in them. The mere presence of the link or its listing on this Portal should not be assumed as an endorsement of any kind. We cannot guarantee that these links will work all the time, and we have no control over the availability of linked pages.
                        </p>
                    </Typography>
                    <br></br>
                    <b>
                        <Typography variant="h6" style={{ fontWeight: '5px', color: theme.typography.primary.mainheading }}>Links to Aadhaar Data Vault-Website by other websites</Typography>
                    </b>
                    <Typography variant="body1" style={{ color: theme.typography.primary.paragraphbody }}>
                        <p>
                            We do not object to you linking directly to the information that is hosted on this site, and no prior permission is required for the same. However, we would like you to inform us about any links provided to this Portal so that you can be informed of any changes or updates therein. Furthermore, we do not permit our pages to be loaded into frames on your site. The pages belonging to this site must load into a newly opened browser window of the user.
                        </p>
                    </Typography>

                </div>


                <br></br>
                <br></br>
                <br></br>
            </div>

        </>

    )
}