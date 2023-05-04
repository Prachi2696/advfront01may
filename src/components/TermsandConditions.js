import React from "react";
import { useTranslation } from "react-i18next";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Grid, Typography } from "@mui/material";
import { useTheme } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { typeApiActionforStatic } from "../store/authslice";
export default function TermsandConditions() {
    const theme = useTheme();
    // const { t } = useTranslation();
    let dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('type',"s")
        dispatch(typeApiActionforStatic());
    }, []);
    return (
        <>
            <div style={{ marginLeft: '50px', marginRight: '50px', marginTop: '0px',paddingBottom:'600px' }}>

                <Typography variant="subtitle2" style={{ color: theme.typography.primary.mainheading }}>
                    <a href="/">Home</a>&nbsp; <span>&gt;&gt;</span>&nbsp;
                    <a href="/adv/termsandconditions">Terms and Conditions</a>
                </Typography>
                <br></br>
                <div>
                    <b>
                        <Typography variant="h4" style={{ fontWeight: '5px', color: theme.typography.primary.mainheading }}>Terms of Use</Typography>
                    </b>
                    <Typography variant="body1" style={{ color: theme.typography.primary.paragraphbody }}>
                        <p>
                            This website is designed, developed, and maintained and its content is provided by Aadhaar Data Vault.
                        </p>
                        <br></br>
                        <p>
                            Though all efforts have been made to ensure the accuracy and currency of the content on this website, the same should not be construed as a statement of law or used for any legal purposes. In case of any ambiguity or doubts, users are advised to verify/check with the Department(s) and/or other sources and to obtain appropriate professional advice.
                        </p>
                        <br></br>
                        <p>
                            Under no circumstances will this Department be liable for any expense, loss or damage including, without limitation, indirect or consequential loss or damage or any expense, loss or damage whatsoever arising from use or loss of use of data, arising out of or in connection with the use of this website.
                        </p>
                        <br></br>
                        <p>
                            These terms and conditions shall be governed by and construed in accordance with the Indian Laws. Any dispute arising under these terms and conditions shall be subject to the jurisdiction of the courts of India.
                        </p>
                        <br></br>
                        <p>
                            The information posted on this website could include hypertext links or pointers to information created and maintained by non-Government/private organizations. Aadhaar Data Vault is providing these links and pointers solely for your information and convenience. When you select a link to an outside website, you are leaving the Aadhaar Data Vault website and are subject to the privacy and security policies of the owners/sponsors of the outside website. Aadhaar Data Vault does not guarantee the availability of such linked pages at all times.
                        </p>
                        <br></br>
                        <p>
                            Aadhaar Data Vault cannot authorize the use of copyrighted materials contained in linked websites. Users are advised to request such authorization from the owner of the linked website.
                        </p>
                        <br></br>
                        <p>
                            Aadhaar Data Vault does not guarantee that linked websites comply with Indian Government Web Guidelines.
                        </p>
                    </Typography>


                </div>

                {/* <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br> */}
            </div>

        </>

    )
}