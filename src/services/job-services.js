const api = "https://us.jobfeed.com/data/info-recent-jobs"

export const getAllJobs = () =>
  fetch(`${api}`)
    .then(res => res.json())
