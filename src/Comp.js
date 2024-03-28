import React, { Component, useState } from "react";
// import { Typeahead } from 'react-bootstrap-typeahead'
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Navbar from "./Navbar";
import Select from "react-select";
import { IdcardOutlined } from "@ant-design/icons";
// import { Button } from 'bootstrap';
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import zIndex from "@material-ui/core/styles/zIndex";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

// import { DialogContent } from '@material-ui/core';

function Comp() {
  /* styles.css */
  const styles = {
    universalmargin: {
      zIndex: -1,
      marginLeft: "20px" /* Adjust the value as needed */,
      // marginRight:"0px"
    },
  };

  //mui
  const options = [
    { value: "Teaching", label: "Teaching" },
    { value: "Non teaching", label: "Non teaching" },
    { value: "Research", label: "Research" },
  ];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    // setPop(!pop)
  };

  const handleClose = () => {
    setOpen(false);
  };

  // mui
  // const [pop, setPop] = useState(true);
  const [pop, setPop] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");
  const [inputtext, setInputtext] = useState("");
  const [inputnum, setInputnum] = useState("");
  const constants = {
    yes: "yes",
    no: "no",
    onhold: "onhold",
  };
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };
  function handelinput(event) {
    setInputnum(event.target.value);
    //  console.log(setInputtext);
  }
  function handeltext(event) {
    setInputtext(event.target.value);
  }
  function clear() {
    setInputnum("");
    setInputtext("");
    setApplications(prevState => ({
      ...prevState,
      applicationName: "",
      applicationNumber: ''
    }));
  }

  // inpuut text val
   // Application numbers and names data
   const applicationNumbers = ['123', '456', '789'];
   const applicationNames = ['Roronoa zoro', 'Monkey d luffy', 'Vinsmoke sanji'];
     // State with object containing application number and application name
  const [applications, setApplications] = useState({
    applicationNumber: '',
    applicationName: ''
  });

  // Function to handle changes in application number input
  const handleApplicationNumberChange = (event) => {
    const value = event.target.value;
    setInputnum(value)
    const nameIndex = applicationNumbers.indexOf(value);
    console.log(nameIndex)
    if (nameIndex !== -1) {
      setApplications(prevState => ({
        ...prevState,
        applicationNumber: value,
        applicationName: applicationNames[nameIndex]
      }));
    } else {
      setApplications(prevState => ({
        ...prevState,
        applicationNumber: value,
        applicationName: ''
      }));
    }
  };

  // Function to handle changes in application name input
  const handleApplicationNameChange = (event) => {
    const value = event.target.value;
    setInputtext(value)
    const numberIndex = applicationNames.indexOf(value);

    if (numberIndex !== -1) {
      setApplications(prevState => ({
        ...prevState,
        applicationName: value,
        applicationNumber: applicationNumbers[numberIndex]
      }));
    } else {
      setApplications(prevState => ({
        ...prevState,
        applicationName: value,
        applicationNumber: ''
      }));
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div style={styles.universalmargin}>
        <div className="containerg d-flex ">
          <div style={{ height: "10vh", width: "40%", marginLeft: "0px" }}>
            <strong>
              <span style={{ color: "red" }} className="p-3">
                *
              </span>
              Application number
            </strong>
            <input
              type="number"
              className="form-control"
              style={{ width: "45%" }}
              // value={inputnum}
              // onChange={(e) => handelinput(e)}
              onChange={handleApplicationNumberChange}
              value={applications.applicationNumber}
              disabled={applications.applicationName !== ''}
            ></input>
          </div>
          <div className="d-flex">
            <span>
              <strong style={{ margin: "50px 0 " }}>
                <span style={{ color: "red" }} className="p-3 ">
                  *
                </span>
                Applicant&apos;s name
              </strong>
              <input
                type="text"
                className="form-control"
                // onChange={(e) => handeltext(e)}
                // value={inputtext}
                value={applications.applicationName}
                onChange={handleApplicationNameChange}
                disabled={applications.applicationNumber !== ''}
              ></input>
            </span>

            <Button
              variant="contained"
              size="large"
              style={{ width: "45%", height: "50px" }}
              startIcon={<IdcardOutlined />}
              className="bg-primary text-white mx-5 mt-3"
            >
              Stage 1 inteview score
            </Button>
          </div>
        </div>
        <div>
          {inputnum && inputtext ? (
            <div
              style={{
                display: "flex",
                marginBottom: "40px",
                marginTop: "40px",
              }}
            >
              <strong className="col-2">
                <span className="text-danger ">*</span>Selected
              </strong>

              <form>
                <label className="px-3">
                  <input
                    type="radio"
                    value="yes"
                    checked={selectedOption === "yes"}
                    onClick={handleRadioChange}
                  />{" "}
                  Yes
                </label>
                <label className="px-3">
                  <input
                    type="radio"
                    value="no"
                    checked={selectedOption === "no"}
                    onClick={handleRadioChange}
                  />{" "}
                  No
                </label>

                <label className="px-3">
                  <input
                    type="radio"
                    value="onhold"
                    checked={selectedOption === "onhold"}
                    onClick={handleRadioChange}
                  />{" "}
                  Onhold
                </label>
              </form>
            </div>
          ) : (
            ""
          )}

          {selectedOption == constants.no && inputnum && inputtext ? (
            <div>
              <table style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>
                      <p>Employee category</p>
                    </th>
                    <th>
                      <p>Subject</p>
                    </th>
                    <th>
                      <p>Applied Subject</p>
                    </th>
                    <th>
                      <p>Applied specialization</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Test new</td>
                    <td> chemistry </td>
                    <td></td>
                    <td> Environmental chemistry</td>
                  </tr>
                </tbody>
              </table>
              <strong>
                {" "}
                <span className="text-danger">*</span>Comments
              </strong>
              <br></br>
              <input
                type="text-area"
                minLength={0}
                maxLength={200}
                style={{ width: "400px", height: "200px" }}
              ></input>
            </div>
          ) : (
            ""
          )}
          {selectedOption == constants.yes && inputnum && inputtext ? (
            <div>
              <div className="pb-3 d-flex">
                <div className="col">
                  <div className="row ">
                    <div className="form-group col-md-2">
                      <label id="withPFLable" className="pe-2 radio-label ">
                        <span className="text-danger">* </span>
                        With PF{" "}
                      </label>
                    </div>

                    <div className="col-md-5">
                      <div className="form-check form-check-inline">
                        <input
                          // ref={(withPFRef) => (this.withPFRefId = withPFRef)}
                          type="radio"
                          name="withPF"
                          value={true}
                          id="withPF"
                          // onChange={(event) => { this.handleOnChange(event); }}
                          // checked={this.state.data?.withPF === true}
                          className="form-check-input me-2"
                        />
                        <label className="form-check-label me-2">Yes</label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          type="radio"
                          name="withPF"
                          value={false}
                          id="withPF"
                          // onChange={(event) => { this.handleOnChange(event); }}
                          // checked={this.state.data?.withPF === false}
                          className="form-check-input me-2"
                        />
                        <label className="form-check-label me-2">No</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-3">
                <div className="col">
                  <div className="row">
                    <div className="form-group col-md-2">
                      <label id="withPFLable" className="pe-2 radio-label">
                        <span className="text-danger">* </span>
                        With Gratuity{" "}
                      </label>
                    </div>

                    <div className="col-md-5">
                      <div className="form-check form-check-inline">
                        <input
                          // ref={(withPFRef) => (this.withPFRefId = withPFRef)}
                          type="radio"
                          name="withgratuity"
                          value={true}
                          id="withPF"
                          // onChange={(event) => { this.handleOnChange(event); }}
                          // checked={this.state.data?.withPF === true}
                          className="form-check-input me-2"
                        />
                        <label className="form-check-label me-2">Yes</label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          type="radio"
                          name="withgratuity"
                          value={false}
                          id="withPF"
                          // onChange={(event) => { this.handleOnChange(event); }}
                          // checked={this.state.data?.withPF === false}
                          className="form-check-input me-2"
                        />
                        <label className="form-check-label me-2">No</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-3">
                <div className="col">
                  <div className="row">
                    <div className="form-group col-md-2">
                      <label id="withPFLable" className="pe-2 radio-label">
                        <span className="text-danger">* </span>
                        ESI{" "}
                      </label>
                    </div>

                    <div className="col-md-5">
                      <div className="form-check form-check-inline">
                        <input
                          // ref={(withPFRef) => (this.withPFRefId = withPFRef)}
                          type="radio"
                          name="esi"
                          value={true}
                          id="withPF"
                          // onChange={(event) => { this.handleOnChange(event); }}
                          // checked={this.state.data?.withPF === true}
                          className="form-check-input me-2"
                        />
                        <label className="form-check-label me-2">Yes</label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          type="radio"
                          name="esi"
                          value={false}
                          id="withPF"
                          // onChange={(event) => { this.handleOnChange(event); }}
                          // checked={this.state.data?.withPF === false}
                          className="form-check-input me-2"
                        />
                        <label className="form-check-label me-2">No</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="col">
                  <div className="row">
                    <div className="form-group col-md-2">
                      <label id="recognisedExpLable">
                        <span className="text-danger">* </span>
                        Recognized Experience{" "}
                      </label>
                    </div>
                    <div className="col-md-9 d-flex align-items-center">
                      <div className="form-check form-check-inline ps-0">
                        <input
                          //   ref={(recognisedExpYearRef) => (this.recognisedExpYearRefId = recognisedExpYearRef)}
                          style={{ width: "auto" }}
                          size="2"
                          placeholder="Year"
                          name="recognisedExpYear"
                          className="form-control"
                          maxLength="2"
                          autoComplete="off"
                          //   value={this.state.data?.recognisedExpYear || ""}
                          // onKeyDown={this.onKeyPress}
                          //   onChange={(event) => { this.onChangeRecognisedExpYear(event); }}
                        />
                      </div>
                      <div className="form-check form-check-inline ps-0">
                        <input
                          // ref={(recognisedExpMonthRef) => (this.recognisedExpMonthRefId = recognisedExpMonthRef)}
                          size="2"
                          placeholder="Month"
                          name="recognisedExpMonth"
                          className="form-control"
                          maxLength="2"
                          style={{ width: "auto" }}
                          autoComplete="off"
                          //   value={this.state.data?.recognisedExpMonth || ""}
                          // onKeyDown={this.onKeyPress}
                          //   onChange={(event) => { this.onChangeRecognisedExpMonth(event); }}
                        />
                      </div>
                      <div className="form-check form-check-inline ps-0">
                        <FontAwesomeIcon
                          icon={faEye}
                          onClick={() => {
                            setPop(!pop);
                            handleClickOpen();
                          }}
                          className="text-primary"
                        ></FontAwesomeIcon>
                        {pop == true ? (
                          <div>
                            {/* <Button
                              variant="outlined"
                              color="primary"
                              onClick={handleClickOpen}
                            >
                              Open alert dialog
                            </Button> */}

                            <Dialog
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="alert-dialog-title"
                              aria-describedby="alert-dialog-description"
                              maxWidth="lg"
                              fullWidth
                            >
                              <DialogTitle id="alert-dialog-title"></DialogTitle>
                              <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                  <table
                                    style={{
                                      width: "100%",
                                      borderCollapse: "collapse",
                                    }}
                                  >
                                    <thead
                                      style={{
                                        border: " 1px solid grey",
                                        padding: "8px",
                                        borderRight: "1px solid grey",
                                      }}
                                    >
                                      <tr>
                                        <th
                                          style={{
                                            borderRight: "1px solid grey",
                                            padding: "8px",
                                          }}
                                        >
                                          Employee type
                                        </th>
                                        <th
                                          style={{
                                            borderRight: "1px solid grey",
                                            padding: "8px",
                                          }}
                                        >
                                          Function area
                                        </th>
                                        <th
                                          style={{
                                            borderRight: "1px solid grey",
                                            padding: "8px",
                                          }}
                                        >
                                          Designation
                                        </th>
                                        <th
                                          style={{
                                            borderRight: "1px solid grey",
                                            padding: "8px",
                                          }}
                                        >
                                          From date
                                        </th>
                                        <th
                                          style={{
                                            borderRight: "1px solid grey",
                                            padding: "8px",
                                          }}
                                        >
                                          To date
                                        </th>
                                        <th
                                          style={{
                                            borderRight: "1px solid grey",
                                            padding: "8px",
                                          }}
                                        >
                                          Year
                                        </th>
                                        <th
                                          style={{
                                            borderRight: "1px solid grey",
                                            padding: "8px",
                                          }}
                                        >
                                          Month
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody
                                      style={{
                                        border: " 1px solid grey",
                                        padding: "8px",
                                        borderRight: "1px solid grey",
                                      }}
                                    >
                                      <tr>
                                        <td
                                          style={{
                                            borderRight: "1px solid grey",
                                            padding: "8px",
                                          }}
                                        >
                                          Full time
                                        </td>
                                        <td
                                          style={{
                                            borderRight: "1px solid grey",
                                            padding: "8px",
                                          }}
                                        >
                                          Function
                                        </td>
                                        <td
                                          style={{
                                            borderRight: "1px solid grey",
                                            padding: "8px",
                                          }}
                                        >
                                          sde
                                        </td>
                                        <td
                                          style={{
                                            borderRight: "1px solid grey",
                                            padding: "8px",
                                          }}
                                        >
                                          8th march 2021
                                        </td>
                                        <td
                                          style={{
                                            borderRight: "1px solid grey",
                                            padding: "8px",
                                          }}
                                        >
                                          14th july 2023
                                        </td>
                                        <td
                                          style={{
                                            borderRight: "1px solid grey",
                                            padding: "8px",
                                          }}
                                        >
                                          2000
                                        </td>
                                        <td
                                          style={{
                                            borderRight: "1px solid grey",
                                            padding: "8px",
                                          }}
                                        >
                                          july
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </DialogContentText>
                              </DialogContent>

                              <DialogActions></DialogActions>
                            </Dialog>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border mb-2 ">
                <div className="row pt-2">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <span className="text-danger">* </span>
                        Employee Category
                      </label>
                      <Select options={options}></Select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <span className="text-danger">* </span>
                        Employee Category
                      </label>
                      <Select options={options}></Select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <span className="text-danger">* </span>
                        Designation
                      </label>
                      <Select options={options}></Select>
                    </div>
                  </div>
                  <div className="row pt-3">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>
                          <span className="text-danger">* </span>
                          Title
                        </label>
                        <Select options={options}></Select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>
                          <span className="text-danger">* </span>
                          Subject
                        </label>
                        <Select options={options}></Select>
                      </div>
                    </div>
                  </div>

                  <div className="row pt-3 pb-3">
                    <div className="col-md-4">
                      <div className="form-group pt-2">
                        <label>Applied Subject: </label>
                        <div className="row">
                          <div className="col-sm">none</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group pt-2">
                        <label>Applied specialization: </label>
                        <div className="row">
                          <div className="col-sm">none</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border mb-3">
                <div className="row p-2">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label id="campusLable">
                        <span className="text-danger">* </span>
                        Campus
                      </label>
                      <Select options={options}></Select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <span className="text-danger">* </span>
                        Department
                      </label>
                      <Select options={options}></Select>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="row p-2">
                <span className="text-danger">*</span>
              </div> */}
              <div className="row p-3 pb-1">
                <div className="col-xl-2 col-lg-3 col-md-3 pb-2">
                  <div className="form-group">
                    <label id="sclaePayLable"> Scale pay</label>
                    &nbsp;&nbsp;
                    <input
                      type="radio"
                      name="data:selectedPayScaleType"
                      className="form-check-input"
                    />
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3 pb-2">
                  <div className="form-group">
                    <label id="sclaePayLable"> Consolidated</label>
                    &nbsp;&nbsp;
                    <input
                      type="radio"
                      name="data:selectedPayScaleType"
                      className="form-check-input"
                    />
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3 pb-2">
                  <div className="form-group">
                    <label id="sclaePayLable"> Daily</label>
                    &nbsp;&nbsp;
                    <input
                      type="radio"
                      name="data:selectedPayScaleType"
                      className="form-check-input"
                    />
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3 pb-2">
                  <div className="form-group">
                    <label id="sclaePayLable"> Per hour </label>
                    &nbsp;&nbsp;
                    <input
                      type="radio"
                      name="data:selectedPayScaleType"
                      className="form-check-input"
                    />
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3 pb-2">
                  <div className="form-group">
                    <label id="sclaePayLable"> Per course </label>
                    &nbsp;&nbsp;
                    <input
                      type="radio"
                      name="data:selectedPayScaleType"
                      className="form-check-input"
                    />
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3 pb-2">
                  <div className="form-group">
                    <label id="sclaePayLable"> No pay</label>
                    &nbsp;&nbsp;
                    <input
                      type="radio"
                      name="data:selectedPayScaleType"
                      className="form-check-input"
                    />
                  </div>
                </div>


              </div>
            </div>
          ) : (
            ""
          )}
          {selectedOption == "onhold" && inputnum && inputtext ? (
            <div>
              <div>
                <table style={{ borderSpacing: "15px", width: "100%" }}>
                  <div></div>
                  <thead>
                    <tr>
                      <th>
                        <p>Employee category</p>
                      </th>
                      <th>
                        <p>Subject</p>
                      </th>
                      <th>
                        <p>Applied Subject</p>
                      </th>
                      <th>
                        <p>Applied specialization</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Test new</td>
                      <td> chemistry </td>
                      <td></td>
                      <td> Environmental chemistry</td>
                    </tr>
                  </tbody>
                </table>
                <span>
                  <strong>
                    {" "}
                    <span className="text-danger">*</span>Comments
                  </strong>
                  <br></br>
                  <input
                    type="text-area"
                    minLength={0}
                    maxLength={200}
                    style={{ width: "400px", height: "200px" }}
                  ></input>
                </span>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button style={{ backgroundColor: "green" }}>submit</Button>
        <Button style={{ backgroundColor: "red" }} onClick={() => clear()}>
          clear
        </Button>
      </div>
    </div>
  );
}

export default Comp;
