import React from "react";
import { useTranslation } from "react-i18next";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import pdf1 from '../assets/pdf/FAQs_Aadhaar_Data_Vault_v1_0_13122017.pdf';
import pdf2 from '../assets/pdf/Circular_Reference_Key_02082017.pdf';
import pdf3 from '../assets/pdf/Indent_1628_PDF_1671186395.4666.pdf'
import { useState } from "react";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { SiAdobeacrobatreader } from "react-icons/si";
import { Typography } from "@mui/material";
import { useTheme } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { typeApiActionforStatic } from "../store/authslice";

export default function Help() {
    let dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('type',"s")
        dispatch(typeApiActionforStatic());
    }, []);


    const [hover1, setHover1] = useState(false);

    const [hover2, setHover2] = useState(false);

    const [hover3, setHover3] = useState(false);

    const [hover4, setHover4] = useState(false);
    const theme = useTheme();

    // const { t } = useTranslation();
    return (
        <>
            <div style={{ marginLeft: '50px', marginRight: '50px', marginTop: '0px',paddingBottom:'100px' }}>

                <Typography variant="subtitle2" style={{ color: theme.typography.primary.mainheading }}>
                    <a href="/">Home</a>&nbsp; <span>&gt;&gt;</span>&nbsp;
                    <a href="/adv/help">Help</a>
                </Typography>
                <br></br>
                <div>
                    <b>
                        <Typography variant="h4" style={{ fontWeight: '5px', color: theme.typography.primary.mainheading }}>Help</Typography>
                    </b>
                    <br></br>

                    <b>
                        <Typography variant="h6" style={{ fontWeight: '5px', color: theme.typography.primary.mainheading }}>Sections of this website</Typography>
                    </b>
                    {/* <br></br> */}
                    <Typography variant="body1" style={{ color: theme.typography.primary.paragraphbody }}>
                        <p>
                            This section provides summary of how to access, various file format supported, etc on Aadhaar Data Vault Portal.
                        </p>
                    </Typography>
                    <br></br>
                    <b>
                        <Typography variant="h6" style={{ fontWeight: '5px', color: theme.typography.primary.mainheading }}>Using the Search Facility</Typography>
                    </b>
                    <Typography variant="body1" style={{ color: theme.typography.primary.paragraphbody }}>
                        <p>
                            Provides tips on searching information on this website in an effective way.
                        </p>
                    </Typography>
                    <br></br>
                    <b>
                        <Typography variant="h6" style={{ fontWeight: '5px', color: theme.typography.primary.mainheading }}>Viewing Information in Various File Formats</Typography>
                    </b>
                    <Typography variant="body1" style={{ color: theme.typography.primary.paragraphbody }}>
                        <p>
                            The information provided by this portal is available in various file formats, such as Portable Document Format (PDF), Word, Excel and PowerPoint. To view the information properly, your browser need to have the required plug-ins or software. For example, the Adobe Flash software is required to view the Flash files. In case your system does not have this software, you can download it from the Internet for free. The table lists the required plug-ins needed to view the information in various file formats.
                        </p>
                    </Typography>
                </div>
                <br></br>

                <Grid container spacing={1} >
                    <Grid item xs={12} >

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 'auto' }} aria-label="simple table" style={{backgroundColor:theme.grid.backgroundColor}}>
                                <TableHead>
                                    <TableRow style={{ backgroundImage: 'linear-gradient(to right,  rgba(194, 87, 155, 0.1),rgba(66, 141, 203, 0.1))' }}>
                                        <TableCell align="center">
                                            <Typography variant="h6" style={{ fontWeight: '5px', color: theme.typography.primary.mainheading }}>
                                                Document Type
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant="h6" style={{ fontWeight: '5px', color: theme.typography.primary.mainheading }}>
                                                Download
                                            </Typography>
                                        </TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)}  >
                                        <TableCell align="center"  >
                                            <Typography variant="body1" style={{ color: theme.typography.primary.paragraphbody }}>
                                                PDF Content
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">

                                            <a href={"https://get.adobe.com/uk/reader/"} target="_blank" style={{ color: '#337ab7' }}>

                                                {/* <SiAdobeacrobatreader style={{ color: 'red',right:'0px' }} /> */}
                                                Adobe Acrobat Reader
                                            </a>
                                        </TableCell>

                                    </TableRow>

                                    <TableRow onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)} >
                                        <TableCell align="center">
                                            <Typography variant="body1" style={{ color: theme.typography.primary.paragraphbody }}>
                                                Word files
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">

                                            <a href={"https://www.microsoft.com/en-us/download/"} target="_blank" style={{ color: '#337ab7' }}>
                                                {/* <PictureAsPdfIcon style={{ color: 'red' }} /> &nbsp; */}
                                                Word Viewer (in any version till 2003)Microsoft Office Compatibility Pack for Word (for 2007 version)
                                            </a>
                                        </TableCell>

                                    </TableRow>

                                    <TableRow onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)}  >
                                        <TableCell align="center">
                                            <Typography variant="body1" style={{ color: theme.typography.primary.paragraphbody }}>
                                                PowerPoint presentations
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">

                                            <a href={"https://www.microsoft.com/en-us/download/"} target="_blank" style={{ color: '#337ab7' }}>
                                                {/* <PictureAsPdfIcon style={{ color: 'red' }} /> &nbsp; */}
                                                PowerPoint Viewer 2003 (in any version till 2003)Microsoft Office Compatibility Pack for PowerPoint (for 2007 version)
                                            </a>
                                        </TableCell>

                                    </TableRow>

                                    <TableRow onMouseEnter={() => setHover4(true)} onMouseLeave={() => setHover4(false)}  >
                                        <TableCell align="center">
                                            <Typography variant="body1" style={{ color: theme.typography.primary.paragraphbody }}>
                                                Flash content
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">

                                            <a href={"https://www.adobe.com/products/flashplayer/end-of-life-alternative.html"} target="_blank" style={{ color: '#337ab7' }}>
                                                {/* <PictureAsPdfIcon style={{ color: 'red' }} /> &nbsp; */}
                                                Adobe Flash Player
                                            </a>
                                        </TableCell>

                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Grid>
                </Grid>



                <br></br>
                <br></br>
                <br></br>
            </div>

        </>

    )
}