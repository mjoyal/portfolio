import "../styles/Footer.scss";
import {useRef} from 'react';
import {motion} from 'framer-motion'; 

export default function Footer (props) {
  const emailText = useRef(null); 

  const copyEmail = function (e) {
    emailText.current.select();
    document.execCommand('copy'); 
    props.showCopied();
  };

  return (
    <footer id="contact">
      <input ref={emailText} readOnly className="email-hide" type="text" value={'mackenzie.joyal@gmail.com'}/>
      <h2>say_hi()!</h2>
      <div>
        <a href={"https://github.com/mjoyal"} target="_blank">
          <motion.img whileHover={{ scale: 1.1 }} src="images/github-white.png" alt="github icon"/>
        </a>
        <a href={"https://www.linkedin.com/in/mackenziejoyal/"} target="_blank">
        <motion.img whileHover={{ scale: 1.1 }} src="images/linkedin-white.png" alt="linkedin icon"/>
        </a>
        <motion.img whileHover={{ scale: 1.1 }} src="images/email-white.png" alt="email icon" onClick={copyEmail}/>
      </div>
    </footer>
  );
}