import React from "react";
import { useTranslation } from "react-i18next";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Grid, Typography } from "@mui/material";
import { useTheme } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { typeApiActionforStatic } from "../store/authslice";
export default function Privacypolicy() {
    const theme = useTheme();
    // const { t } = useTranslation();

    let dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('type',"s")
        dispatch(typeApiActionforStatic());
    }, []);

    return (
        <>
            <div style={{ marginLeft: '50px', marginRight: '50px', marginTop: '0px' ,position:'relative',paddingBottom:'600px'}}>

                <Typography variant="subtitle2" style={{ color: theme.typography.primary.mainheading }}>
                    <a href="/">Home</a>&nbsp; <span>&gt;&gt;</span>&nbsp;
                    <a href="/adv/privacypolicy">Privacy Policy</a>
                </Typography>
                <br></br>
                <div>
                    <b>
                        <Typography variant="h4" style={{ fontWeight: '5px', color: theme.typography.primary.mainheading }}>Privacy Policy</Typography>
                    </b>
                    <p>
                        As a general rule, this website does not collect Personal Information about you when you visit the site. You can generally visit the site without revealing Personal Information unless you choose to provide such information.
                    </p>

                    <br></br>
                    <b>
                        <Typography variant="h6" style={{ fontWeight: '5px', color: theme.typography.primary.mainheading }}>Site Visit data</Typography>
                    </b>
                    <Typography variant="body1" style={{ color: theme.typography.primary.paragraphbody }}>
                        <p>
                            This website records your visit and logs the following information for statistical purposes your server's address; the name of the top-level domain from which you access the Internet (for example, .gov, .com, .in, etc.); the type of browser you use; the date and time you access the site; the pages you have accessed, the documents downloaded and the previous Internet address from which you linked directly to the site. We will not identify users or their browsing activities, except when a law enforcement agency may exercise a warrant to inspect the service provider's logs.
                        </p>
                    </Typography>
                    <br></br>
                    <b>
                        <Typography variant="h6" style={{ fontWeight: '5px', color: theme.typography.primary.mainheading }}>Cookies</Typography>
                    </b>
                    <Typography variant="body1" style={{ color: theme.typography.primary.paragraphbody }}>
                        <p>
                            A cookie is a piece of software code that an Internet website sends to your browser when you access information on that site. This site does not use cookies.
                        </p>
                    </Typography>
                    <br></br>

                    <b>
                        <Typography variant="h6" style={{ fontWeight: '5px', color: theme.typography.primary.mainheading }}>E-mail Management</Typography>
                    </b>
                    <Typography variant="body1" style={{ color: theme.typography.primary.paragraphbody }}>
                        <p>
                            Your e-mail address will only be recorded if you choose to send a message. It will exclusively be used for the purpose for which you have provided it and will not be added to a mailing list. Your e-mail address will not be used for any other purpose, and will not be disclosed without your consent.
                        </p>
                    </Typography>
                    <br></br>

                    <b>
                        <Typography variant="h6" style={{ fontWeight: '5px', color: theme.typography.primary.mainheading }}>Collection of Personal Information</Typography>
                    </b>
                    <Typography variant="body1" style={{ color: theme.typography.primary.paragraphbody }}>
                        <p>
                            If you are asked for any other Personal Information, you will be informed how it will be used if you choose to give it. If at any time you believe the principles referred to in this privacy statement have not been followed, or have any other comments on these principles, please notify the webmaster through the Contact Us page.
                        </p>
                        <br></br>
                        <p>
                            Note: The use of the term Personal Information in this privacy statement refers to any information from which your identity is apparent or can be reasonably ascertained.
                        </p>
                    </Typography>
                </div>
                {/* <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br> */}
            </div>

        </>

    )
}