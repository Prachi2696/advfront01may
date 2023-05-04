import React from "react";
import { useTranslation } from "react-i18next";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Grid, Typography } from "@mui/material";
import { useTheme } from '@material-ui/core/styles';
import { useEffect } from "react";
import { typeApiActionforStatic } from "../store/authslice";
import { useDispatch } from "react-redux";
export default function Disclaimer() {
    const theme = useTheme();
    // const { t } = useTranslation();
    let dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('type',"s")
        dispatch(typeApiActionforStatic());
    }, []);

    return (
        <>
            <div style={{ marginLeft: '50px', marginRight: '50px', marginTop: '0px' ,paddingBottom:'600px'}}>

                <Typography variant="subtitle2" style={{ color: theme.typography.primary.mainheading }}>
                    <a href="/">Home</a>&nbsp; <span>&gt;&gt;</span>&nbsp;
                    <a href="/adv/disclaimer">Disclaimer</a>
                </Typography>
                <br></br>
                <div>
                    <b>
                        <Typography variant="h4" style={{ fontWeight: '5px', color: theme.typography.primary.mainheading }}>Disclaimer</Typography>
                    </b>
                    <Typography variant="body1" style={{ color: theme.typography.primary.paragraphbody }}>
                        <p>
                            This website is brought to you by the Aadhaar Data Vault. While visiting through this site, you will come across directories and links to Government and Private organizations. The contents of these sites are not to be construed as a responsibility of or endorsement by the authority and are owned by the respective organizations, which may be contacted for any further information or suggestion.
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