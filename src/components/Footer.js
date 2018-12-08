import React from "react"
const dayjs = require("dayjs")

const Footer = class extends React.Component {
  render() {
    return (
      <footer class="footer">
        <div class="content has-text-centered">
          &copy; 2009-{dayjs().year()} [ADRW Digital](https://adrw.xyz/) |
          [Andrew Paradi Alexander](https://andrew.fm)
        </div>
      </footer>
    )
  }
}

export default Footer
