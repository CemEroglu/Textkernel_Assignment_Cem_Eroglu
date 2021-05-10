import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import * as JobServices from './services/job-services'//It can be used whenever Cors issue on the backend service fixed.
import Jobs from './data/jobs.json'
import JobFrame from './components/jobframe'
const App = () => {
  const [jobdata, setjobdata] = useState([]);
  const [searchJT, setsearchJT] = useState("");
  const [searchON, setsearchON] = useState("");
  useEffect(() => {
    setjobdata(Jobs)
  }, [])
  const filter = (jobdata) => {
    if (searchON) {
      jobdata = jobdata.filter(item => item.job_title.toLowerCase().includes(searchJT.toLowerCase())).filter(item => {
        if (item.organization_name != undefined) {
          return true
        }
        else {
          return false
        }
      }).filter(item => item.organization_name.toLowerCase().includes(searchON.toLowerCase()))
    }
    else {
      jobdata = jobdata.filter(item => item.job_title.toLowerCase().includes(searchJT.toLowerCase()))
    }
    return jobdata
  }
  const deleteJob = (job_title) => {
    let tempArray = [...jobdata]
    tempArray = tempArray.filter(item => item.job_title != job_title)
    setjobdata(tempArray)
  }
  return (
    <div className="list">
      <div className="list-title">
        <h1>Texkernel Job Zone</h1>
      </div>
      <div className="list-content">
        <div>
          <div className="shelf">
            <h2 className="shelf-title">Available Jobs</h2>
            <div className="row mx-3 my-3">
              <div className="ml-5 col-4">
                <label className="mx-4">Job Title:</label>
                <input onChange={(event) => {
                  setsearchJT(event.target.value)
                }}></input>
              </div>
              <div className="col-6">
                <label className="mx-4">Organisation Name:</label>
                <input onChange={(event) => {
                  setsearchON(event.target.value)
                }}></input>
              </div>
              <div className="col-2">
                <label className="mx-4">{filter(jobdata).length} results found</label>
              </div>
            </div>
            <div className="shelf-jobs">
              <ol className="jobs-grid">
                {filter(jobdata).map((item, index) => {
                  return (
                    <div className="d-flex justify-content-center">
                      <JobFrame key={index} showMap={true} job_title={item.job_title} organization_name={item.organization_name} location_coordinates={item.location_coordinates} deleteJob={deleteJob.bind(this)}></JobFrame>
                    </div>
                  )
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
