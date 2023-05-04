import { Box, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { saveAs } from 'file-saver';
import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import ReactLoading from "react-loading";
import { useHistory } from 'react-router-dom';
import Baseurl from "../components/Baseurl";
import BaseLocal from '../components/BaseLocal';
import { Slide, toast, ToastContainer } from 'react-toastify';

const Report = () => {
  let history = useHistory();
  var decryptedText = "";
  let [username, setusername] = useState("");
  let [appcode, setappcode] = useState();

  const [applist, setapplist] = useState([]);


  useEffect(() => {
    if (localStorage.getItem("LsdItped") === null) {
      window.location.replace(BaseLocal + "Logout");
    }
    else {

    }
    /////////////////////////////get lc
    var CryptoJS = require("crypto-js");
    var base64Key = "QWJjZGVmZ2hpamtsbW5vcA==";
    var key = CryptoJS.enc.Base64.parse(base64Key);
    var plaintText = "x";
    var encryptedData = CryptoJS.AES.encrypt(plaintText, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    if (localStorage.getItem("LsdItped")) {
      var decryptedData = CryptoJS.AES.decrypt(
        localStorage.getItem("LsdItped").replace("slashinurl", "/").replace("plusinurl", "+"),
        key,
        {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7,
        }
      );
      decryptedText = decryptedData.toString(CryptoJS.enc.Utf8);
    }
    setusername(decryptedText)
    /////////////////////////////get username

     // -----------------------------------------code to check wheather user is logout or not----------------------------------------------

     if (localStorage.getItem("LsdItped") === null) { }
     else {
 
       fetch(BaseLocal + "isSessNull", {
         method: "POST",
         body: decryptedText,
         headers: {
           "Content-Type": "application/json",
         },
       })
         .then((response) => {
           return response;
         })
         .then((response) => {
           return response;
         })
         .then((actualData) => {
           console.log(actualData)
           console.log(actualData.status)
           if (actualData.status === 400) {
             window.location.replace(BaseLocal + "Logout");
 
           }
         })
         .catch((err) => {
           console.log(err.message);
           if (err.message == "Failed to fetch") {
 
             history.push("/adv/LoginRequired")
           }
 
         });
     }

     

    fetch(Baseurl + "applistForReports",
      {
        method: "POST",
        body: decryptedText,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      }
    )
      .then(res => {
        return res.json()
      })
      .then(
        res => {
          console.log(res);
          setapplist(res)
        }
      )
      .catch(e => {
        console.log("error", e)
      })

  }, []);


  const handlecuststart = (e) => {
    setCuststart(e.target.value)
  }

  const handlecustlast = (e) => {
    setCustlast(e.target.value)
  }




  const [startDate, setStartDate] = useState(new Date());
  const [LastDate, setLastDate] = useState(new Date());

  const [custstart, setCuststart] = useState();
  const [custlast, setCustlast] = useState();

  let [MonthlyMonth, setMonthlyMonth] = useState();
  let [MonthlyYear, setMonthlyYear] = useState();
  let [quarterlyQuarter, setQuarterlyQuarter] = useState();
  let [quarterlyYear, setQuarterlyYear] = useState();
  let [yearlyYear, setyearlyYear] = useState();
  let [customfdate, setcustomfdate] = useState();
  let [customtdate, setcustomtdate] = useState();

  let [monthlycsvdata, setMonthlycsvdata] = useState([[]]);

  let [monthlypdfdataflag, setmonthlypdfdataflag] = useState(true);
  let [quaterlypdfdataflag, setquaterlypdfdataflag] = useState(true);
  let [yearlycsvdataflag, setYearlycsvdataflag] = useState(true);
  let [customcsvdataflag, setCustomcsvdataflag] = useState(true);

  const monthlyreportsummary = (event) => {
    if (appcode == undefined) {
      toastAlertWarning("Please select Application name!")
      return false;
    }


    if (MonthlyMonth == undefined) {
      toastAlertWarning("Please select month first!")
      return false;
    }


    if (MonthlyYear == undefined) {
      toastAlertWarning("Please select year first!")
      return false;
    }
    setSpinner(true);
    const datedata = ["month", MonthlyMonth, MonthlyYear, appcode];
    setmonthlypdfdataflag(false)
    const monthly = () => {
      fetch(Baseurl + "summaryreportappwise",
        {
          method: "POST",
          body: JSON.stringify(datedata),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        }
      )
        .then(res => {
          if (res.status == "204") {
            throw new Error('Data not found for Application.');
          }

          if (res.status == "500") {
            throw new Error('Something went wrong.');
          }
          return res.blob();
        })
        .then((blob) => {
          const file = new Blob([blob], { type: 'application/pdf' })
          saveAs(file, "summary");
          setmonthlypdfdataflag(true)
        })
        .catch(e => {
          toastAlertWarning(e.message)
          setmonthlypdfdataflag(true)
        })
    }
    monthly();
    event.preventDefault();
  }





  const quaterlyreportsummary = (event) => {
    if (appcode == undefined) {
      toastAlertWarning("Please select Application name!")
      return false;
    }

    if (quarterlyQuarter == undefined) {
      toastAlertWarning("Please select quarter!")
      return false;
    }
    if (quarterlyYear == undefined) {
      toastAlertWarning("Please select year!")

      return false;
    }
    setSpinner(true);
    const datedata = ["quarter", quarterlyQuarter, quarterlyYear, appcode];
    setquaterlypdfdataflag(false);
    const quarterly = () => {
      fetch(Baseurl + "summaryreportappwise",
        {
          method: "POST",
          body: JSON.stringify(datedata),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        }
      )
        .then(res => {
          if (res.status == "204") {
            throw new Error('Data not found for Application.');
          }

          if (res.status == "500") {
            throw new Error('Something went wrong.');
          }
          return res.blob();
        })
        .then((blob) => {
          const file = new Blob([blob], { type: 'application/pdf' })
          saveAs(file, "summary");
          setquaterlypdfdataflag(true)
        })
        .catch(e => {
          toastAlertWarning(e.message)
          setquaterlypdfdataflag(true)
        })
    }
    quarterly();
    event.preventDefault();
  }



  const yealryreportsummary = (event) => {

    if (appcode == undefined) {
      toastAlertWarning("Please select Application name!")
      return false;
    }


    if (yearlyYear == undefined) {
      toastAlertWarning("Please select year!")
      return false;
    }
    setSpinner(true);
    setYearlycsvdataflag(false);
    const datedata = ["year", yearlyYear, "", appcode];
    const yearly = () => {
      fetch(Baseurl + "summaryreportappwise",
        {
          method: "POST",
          body: JSON.stringify(datedata),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        }
      ).then(res => {
        if (res.status == "204") {
          throw new Error('Data not found for Application.');
        }
        if (res.status == "500") {
          throw new Error('Something went wrong.');
        }
        return res.blob();
      })
        .then((blob) => {
          const file = new Blob([blob], { type: 'application/pdf' })
          saveAs(file, "summary");
          setYearlycsvdataflag(true)
        })
        .catch(e => {
          toastAlertWarning(e.message)
          setYearlycsvdataflag(true)
        })
    }
    yearly();
    event.preventDefault();
  }


  const customreportsummarynew = (event) => {
    if (appcode == undefined) {
      toastAlertWarning("Please select Application name!")
      return false;
    }

    
    if (custlast == undefined) {
      toastAlertWarning("please select  date!")
      return false;
    }
    if (custstart == undefined) {
      toastAlertWarning("please select  date!")
      return false;
    }
    if (new Date(custstart) > new Date(custlast)) {
      toastAlertWarning("please select proper date!")
      return false
    }
    const datedata = ["custom", custstart, custlast, appcode];
    setSpinner(true);
    setCustomcsvdataflag(false);
    const custom = () => {
      fetch(Baseurl + "summaryreportappwise",
        {
          method: "POST",
          body: JSON.stringify(datedata),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        }
      ).then(res => {
        if (res.status == "204") {
          throw new Error('Data not found for Application.');
        }

        if (res.status == "500") {
          throw new Error('Something went wrong.');
        }
        return res.blob();
      })
        .then((blob) => {
          const file = new Blob([blob], { type: 'application/pdf' })
          saveAs(file, "summary");
          setCustomcsvdataflag(true)
        })
        .catch(e => {
          toastAlertWarning(e.message)
          setCustomcsvdataflag(true)
          console.log("error", e)
        })
    }
    custom();
    event.preventDefault();
  }



  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  }
  const [spinner, setSpinner] = useState(false);

  const year = (new Date()).getFullYear();
  const years = Array.from(new Array(30), (val, index) => year - index);
  const [flag, setFlag] = useState("Monthly");
  const handleflag = (e) => {
    setFlag(e.target.value)
  }

  let dateFormateFortMui = formatDate();
  function formatDate() {
    var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + (d.getDate() - 5),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  const handleChange = (e) => {
    setappcode(e.target.value)
  }

  const toastAlertWarning = (message) => {
    toast.warn(message, {
      position: "top-center",
      autoClose: 5000,
      transition: Slide,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }




  return (
    <div>
      <ToastContainer />

      <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '80%', height: 'auto', minHeight: '510px' }}>

        <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Reports</div>
        <hr />
        <br />
        <div align="left">
          <Box sx={{ minWidth: 180 }}>
            <FormControl style={{ minWidth: 180 }} >
              <InputLabel id="demo-simple-select-label">Application List</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Application List"
                onChange={handleChange}
                style={{ height: '43px' }}
              >
                {applist.map((item, index) => (
                  <MenuItem key={index} value={item?.appcode} >
                    {item?.appname}
                  </MenuItem>
                ))
                }
              </Select>

            </FormControl>
          </Box>
        </div>
        {/* ------------------------------------code for choice-------------------------------------------------- */}

        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue="Monthly"
          >
            <FormControlLabel size="small" value="Monthly" onClick={handleflag} control={<Radio />} label="Month" />
            <FormControlLabel value="Quarterly" onClick={handleflag} control={<Radio />} label="Quarter" />
            <FormControlLabel value="Yearly" onClick={handleflag} control={<Radio />} label="Year" />
            <FormControlLabel value="Custom" onClick={handleflag} control={<Radio />} label="Custom" />
          </RadioGroup>
        </FormControl>
        <br />
        <br />

        {flag === "Monthly" && <>
          <Grid container spacing={1}>
            <Grid item xs={13} sm={8} md={3} className="flex flex-col lg:flex-row justify-between"  >
              <div>
                <FormControl style={{ minWidth: 190 }} >
                  <InputLabel id="demo-simple-select-label">Month</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Month"
                    onChange={e => setMonthlyMonth(e.target.value)}
                    style={{ height: '43px' }}
                  >
                    <MenuItem value="01">January</MenuItem>
                    <MenuItem value="02">February</MenuItem>
                    <MenuItem value="03">March</MenuItem>
                    <MenuItem value="04">April</MenuItem>
                    <MenuItem value="05">May</MenuItem>
                    <MenuItem value="06">June</MenuItem>
                    <MenuItem value="07">July</MenuItem>
                    <MenuItem value="08">August</MenuItem>
                    <MenuItem value="09">September</MenuItem>
                    <MenuItem value="10">October</MenuItem>
                    <MenuItem value="11">November</MenuItem>
                    <MenuItem value="12">December</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Grid>

            <Grid item xs={13} sm={8} md={3}  >
              <div style={{ display: 'inline-block' }}>
                <FormControl style={{ minWidth: 190 }} >
                  <InputLabel id="demo-simple-select-label">Year</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Year"
                    onChange={e => setMonthlyYear(e.target.value)}
                    style={{ height: '43px' }}
                  >
                    {
                      years.map((year, index) => {
                        return <MenuItem key={`year${index}`} value={year}>{year}</MenuItem>
                      })
                    }
                  </Select>
                </FormControl>

              </div>


            </Grid>

            <Grid item xs={13} sm={8} md={3} >
              <div>
                {monthlypdfdataflag ?
                  <>
                    <Button size="normal" color="info" variant="outlined" onClick={monthlyreportsummary}>Download&nbsp;</Button>
                  </>
                  :
                  < >
                    {spinner ?
                      (
                        <ReactLoading type="balls" color="#0000FF"
                          height={10} width={40} />)
                      :
                      (
                        <></>
                      )
                    }
                  </>
                }</div>

            </Grid>
          </Grid>
        </>
        }

        {flag === "Quarterly" && <>
          <Grid container spacing={1}>
            <Grid item xs={13} sm={8} md={3} >
              <div>
                <FormControl style={{ minWidth: 190 }} >
                  <InputLabel id="demo-simple-select-label">Quarter</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Quarter"
                    onChange={e => setQuarterlyQuarter(e.target.value)}
                    style={{ height: '43px' }} >
                    <MenuItem value="01">January-March</MenuItem>
                    <MenuItem value="04">April-June</MenuItem>
                    <MenuItem value="07">July-September</MenuItem>
                    <MenuItem value="10">October-December</MenuItem>
                  </Select>
                </FormControl>
              </div>

            </Grid>
            <Grid item xs={13} sm={8} md={3}   >
              <div>
                <FormControl style={{ minWidth: 190 }} >
                  <InputLabel id="demo-simple-select-label">Year</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Year"
                    onChange={e => setQuarterlyYear(e.target.value)}
                    style={{ height: '43px' }}
                  >
                    {
                      years.map((year, index) => {
                        return <MenuItem key={`year${index}`} value={year}>{year}</MenuItem>

                      })
                    }
                  </Select>
                </FormControl>
              </div>
            </Grid>

            <Grid item xs={13} sm={8} md={3} >
              <div>
                {quaterlypdfdataflag ? <>
                  <Button size="normal" color="info" variant="outlined" onClick={quaterlyreportsummary}>Download</Button> </> :
                  <>
                    {spinner ?
                      (
                        <ReactLoading type="balls" color="#0000FF"
                          height={10} width={40} />)
                      :
                      (
                        <></>
                      )
                    }
                  </>
                }
              </div>

            </Grid>
          </Grid>
        </>}

        {flag === "Yearly" && <>
          <Grid container spacing={1}>
            <Grid item xs={13} sm={8} md={3} >
              <div>
                <FormControl style={{ minWidth: 190 }} >
                  <InputLabel id="demo-simple-select-label">Year</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Year"
                    onChange={e => setyearlyYear(e.target.value)}
                    style={{ height: '43px' }}
                  >
                    {
                      years.map((year, index) => {
                        return <MenuItem key={`year${index}`} value={year}>{year}</MenuItem>
                      })
                    }
                  </Select>
                </FormControl>
              </div>
            </Grid>



            <Grid item xs={13} sm={8} md={3} >
              <div>
                {yearlycsvdataflag ? <>
                  <Button size="normal" color="info" variant="outlined" onClick={yealryreportsummary}>Download</Button>

                </> :
                  < >
                    {spinner ?
                      (
                        <ReactLoading type="balls" color="#0000FF"
                          height={10} width={40} />)

                      :
                      (
                        <></>
                        // <Button color="success" variant="contained" onClick={(e) => setYearlycsvdataflag(true)}>Download</Button>
                      )
                    }

                  </>
                }

              </div>

            </Grid>
          </Grid>
        </>}



        {flag === "Custom" && <>
          <Grid container spacing={1}>
            <Grid item xs={13} sm={8} md={3}   >
              <TextField
                id="date"
                label="From"
                type="date"
                inputFormat="dd-MM-yyyy"
                defaultValue={dateFormateFortMui}
                onChange={handlecuststart}
                size="small"
                sx={{ width: 190 }}
                style={{ height: '33px' }}
                inputProps={{
                  max: dateFormateFortMui,
                  // min: "1993-01-01"
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />

            </Grid>
            <Grid item xs={13} sm={8} md={3}   >

              <TextField
                id="date"
                label="To"
                type="date"
                inputFormat="dd-MM-yyyy"
                defaultValue={dateFormateFortMui}
                onChange={handlecustlast}
                size="small"
                sx={{ width: 190 }}
                inputProps={{
                  max: dateFormateFortMui,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />


            </Grid>
            <Grid item xs={13} sm={8} md={3}  >
              <div >
                {customcsvdataflag ? <>
                  <Button size="normal" color="info" variant="outlined" onClick={customreportsummarynew}>Download</Button>

                </> :
                  < >
                    {spinner ?
                      (
                        <ReactLoading type="balls" color="#0000FF"
                          height={10} width={40} />)

                      :
                      (
                        <></>
                        // <Button color="success" variant="contained" onClick={(e) => setCustomcsvdataflag(true)}>Download</Button>
                      )
                    }
                  </>
                }

              </div>

            </Grid>
          </Grid>
        </>}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  )
}

export default Report
