import React from 'react'
import Header from './Header'

const About = () => {
  return (
    <div>
      <header><Header/></header>
      <section>
        <table>
          <tbody>
            <tr>
              <td>Created By</td>
              <td>Mohamed Shahul Hameed</td>
            </tr>
            <tr>
              <td>Education</td>
              <td>BSC IT</td>
            </tr>
            <tr>
              <td>Skills</td>
              <td>Html, Css, JavaScript, React js, Bootstrap</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default About
