import React from "react"
const dayjs = require("dayjs")

const Footer = class extends React.Component {
  render() {
    return (
      <div>
        &copy; 2009-{dayjs().year()} ADRW Digital | Andrew Paradi Alexander
      </div>
    )
  }
}

export default Footer
