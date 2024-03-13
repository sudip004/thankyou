/* eslint-disable react/no-unescaped-entities */
import './App.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const App = () => {
  return (
    <div className="main">
      <div className="headding">HI!, Arup This Is For You</div>
      
      {/* mmy intro */}
      <div className="my-intro">
        <img src="../sudipFb.jpg" alt="" />
        <div className='logos'>
          <p> Hi i am sudip Basak as a software developer enthusiast</p>
          <p>Social Links below press & Visit </p>
          <div className="con">
           <a href="https://www.instagram.com/sudipbasak3/"> <FaInstagram size={30} color='red'/></a>
            <a href="https://www.facebook.com/rajdip.basak.1232/"><FaFacebookF size={30} color='blue' /></a>
          </div>
        </div>
      </div>

      {/* Letter */}
      <div className="letter-box">
        <div className="arup-intro">
        <p>Hi Arup,</p>
          <img src="../arup.jpg" alt="" />
          </div>
          <div className="letter">
            <p>Thank you Arup for what ever you have done for me, I mean that UnBlocking my account with "her" acccount</p>
            <p>I know toke thank you jananor ata akta unique style but toke thank you janate je hotoi tai vablam aktu aladai kory jata amr korte valo lage.</p>
            <p>Ami chai toi ai vabe amr pase thak...& Once again thank you so much</p>
          </div>
      </div>
      <div className="tnk">Thank You ❤ so much</div>
    </div>
  )
}

export default App