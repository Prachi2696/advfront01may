import React from "react";
import { useTranslation } from "react-i18next";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Grid, Typography } from "@mui/material";
import { useTheme } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { typeApiActionforStatic } from "../store/authslice";
export default function Copyrightpolicy() {
    const theme = useTheme();
    let dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('type',"s")
        dispatch(typeApiActionforStatic());
    }, []);


    // const { t } = useTranslation();
    return (
        <>
            <div style={{ marginLeft: '50px', marginRight: '50px', marginTop: '0px' ,paddingBottom:'500px'}}>

                <Typography variant="subtitle2" style={{ color: theme.typography.primary.mainheading }}>
                    <a href="/">Home</a>&nbsp; <span>&gt;&gt;</span>&nbsp;
                    <a href="/adv/coprightpolicy">Copyright Policy</a>
                </Typography>
                <br></br>
                <div>
                    <b>
                        <Typography variant="h4" style={{ fontWeight: '5px', color: theme.typography.primary.mainheading }}>Copyright Policy  </Typography>
                    </b>
                    <Typography variant="body1" style={{ color: theme.typography.primary.paragraphbody }}>
                        <p>
                            Material featured on this Portal may be reproduced free of charge after taking permission by sending a mail to us. However, the material has to be reproduced accurately and not be used in a derogatory manner or in a misleading context. Wherever the material is being published or issued to others, the source must be prominently acknowledged. However, the permission to reproduce this material shall not extend to any material which is identified as being copyright of a third party. Authorization to reproduce such material must be obtained from the departments/copyright holders concerned.
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