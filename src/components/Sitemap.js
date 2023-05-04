import React from "react";
import { useTranslation } from "react-i18next";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CircleIcon from '@mui/icons-material/Circle';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { Grid } from '@mui/material'
import { Typography } from "@mui/material";
import { useTheme } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";
import { typeApiActionforStatic } from "../store/authslice";
import { useEffect } from "react";

export default function Sitemap() {
    // const { t } = useTranslation();
    let dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('type',"s")
        dispatch(typeApiActionforStatic());
    }, []);
    const theme = useTheme();
    return (
        <>
            <div style={{ marginLeft: '50px', marginRight: '50px', marginTop: '0px', paddingBottom: '200px' }}>

                <Typography variant="subtitle2" style={{ color: theme.typography.primary.mainheading }}>
                    <a href="/">Home</a>&nbsp; <span>&gt;&gt;</span>&nbsp;
                    <a href="/adv/sitemap">Sitemap</a>
                </Typography>
                <br></br>
                {/* <div>
                    <b>
                        <Typography variant="h4" style={{ fontWeight: '5px', color: theme.typography.primary.mainheading }}>Sitemap</Typography>
                    </b>
                    <br></br>
                    <Typography variant="body1" style={{ color: theme.typography.primary.paragraphbody }}>

                        <h3><CircleIcon style={{ width: '10px' }} />&nbsp;Home</h3><br></br>
                        <h3><CircleIcon style={{ width: '10px' }} />&nbsp;About us</h3>
                        <h3>&nbsp;&nbsp;&nbsp;&nbsp;<PanoramaFishEyeIcon style={{ width: '10px' }} />&nbsp;Aadhaar Data Vault (ADV)</h3>
                        <br></br>
                        <h3><CircleIcon style={{ width: '10px' }} />&nbsp;Services</h3>
                        <h3>&nbsp;&nbsp;&nbsp;&nbsp;<PanoramaFishEyeIcon style={{ width: '10px' }} />&nbsp;Aadhaar Data Vault as a Service</h3>
                        <h3>&nbsp;&nbsp;&nbsp;&nbsp;<PanoramaFishEyeIcon style={{ width: '10px' }} />&nbsp;Aadhaar Data Vault as a Solution</h3>
                        <br></br>
                        <h3><CircleIcon style={{ width: '10px' }} />&nbsp;Contact Us</h3>
                        <h3>&nbsp;&nbsp;&nbsp;&nbsp;<PanoramaFishEyeIcon style={{ width: '10px' }} />&nbsp;Contacts</h3>
                        <h3>&nbsp;&nbsp;&nbsp;&nbsp;<PanoramaFishEyeIcon style={{ width: '10px' }} />&nbsp;Resources</h3>
                        <br></br>
                        <h3><CircleIcon style={{ width: '10px' }} />&nbsp;Login</h3>
                        <h3>&nbsp;&nbsp;&nbsp;&nbsp;<PanoramaFishEyeIcon style={{ width: '10px' }} />&nbsp;Department</h3>
                    </Typography>



                </div> */}

                <Grid container spacing={1} style={{ paddingBottom: '200px' }}>
                    <Grid item lg={12} xs={12} sm={12} md={12} align="center">
                        <b>
                            <Typography variant="h4"  style={{ fontWeight: '5px', color: theme.typography.primary.mainheading }}>Sitemap</Typography>
                            <br></br>
                        </b>

                    </Grid>

                    <Grid item lg={5} xs={0} md={0} sm={0}>

                    </Grid>
                    <Grid item lg={1} xs={12} md={6}  sm={12}align='left'>
                        <h3 style={{color:theme.typography.primary.paragraphbody}}><CircleIcon style={{ width: '10px',color:theme.typography.primary.paragraphbody }} />&nbsp;Home</h3><br></br>
                        <h3 style={{color:theme.typography.primary.paragraphbody}}><CircleIcon style={{ width: '10px' ,color:theme.typography.primary.paragraphbody}} />&nbsp;About us</h3>
                        <h3 style={{color:theme.typography.primary.paragraphbody}}>&nbsp;&nbsp;&nbsp;&nbsp;<PanoramaFishEyeIcon style={{ width: '10px' ,color:theme.typography.primary.paragraphbody}} />&nbsp;Aadhaar Data Vault (ADV)</h3>
                        <br></br>
                        <h3 style={{color:theme.typography.primary.paragraphbody}}><CircleIcon style={{ width: '10px' }} />&nbsp;Services</h3>
                        <h3 style={{color:theme.typography.primary.paragraphbody}}>&nbsp;&nbsp;&nbsp;&nbsp;<PanoramaFishEyeIcon style={{ width: '10px',color:theme.typography.primary.paragraphbody }} />&nbsp;Aadhaar Data Vault as a Service</h3>
                        <h3 style={{color:theme.typography.primary.paragraphbody}}>&nbsp;&nbsp;&nbsp;&nbsp;<PanoramaFishEyeIcon style={{ width: '10px',color:theme.typography.primary.paragraphbody }} />&nbsp;Aadhaar Data Vault as a Solution</h3>
                        <br></br>

                    </Grid>
                    <Grid item lg={2}  xs={12}  md={6} sm={12} align='left'>
                        <h3 style={{color:theme.typography.primary.paragraphbody}}><CircleIcon style={{ width: '10px' }} />&nbsp;Contact Us</h3>
                        <h3 style={{color:theme.typography.primary.paragraphbody}}>&nbsp;&nbsp;&nbsp;&nbsp;<PanoramaFishEyeIcon style={{ width: '10px',color:theme.typography.primary.paragraphbody }} />&nbsp;Contacts</h3>
                        <h3 style={{color:theme.typography.primary.paragraphbody}}>&nbsp;&nbsp;&nbsp;&nbsp;<PanoramaFishEyeIcon style={{ width: '10px' ,color:theme.typography.primary.paragraphbody}} />&nbsp;Resources</h3>
                        <br></br>
                        <h3 style={{color:theme.typography.primary.paragraphbody}}><CircleIcon style={{ width: '10px' }} />&nbsp;Login</h3>
                        <h3 style={{color:theme.typography.primary.paragraphbody}}>&nbsp;&nbsp;&nbsp;&nbsp;<PanoramaFishEyeIcon style={{ width: '10px',color:theme.typography.primary.paragraphbody}} />&nbsp;Department</h3>
                    </Grid>
                    <Grid item lg={4} xs={0} md={0} sm={0}>

                    </Grid>
                </Grid>


                <br></br>
                <br></br>
                <br></br>
            </div>
        </>
    );

}