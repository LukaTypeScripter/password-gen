import React, { useState } from 'react'
import Header from '../header/Header';
import Length from '../length/Length';
import CheckBoxs from '../Checkboxes/CheckBoxs';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Level from '../levels/level';
import SubmitBtn from '../SubmitBtn/SubmitBtn';

export default function Main() {
    {
        /**difficulties logic */
      }
      const [range, setRange] = useState<number>(20);
      const [levels, setLevels] = useState("");
    
      const passwordDificultie = (e: React.ChangeEvent<HTMLInputElement>) => {
        const range = parseInt(e.target.value);
    
        if (range > 0 && range <= 6) {
          setLevels("TOO WEAK");
        } else if (range > 6 && range <= 10) {
          setLevels("");
          setLevels("WEAK");
        } else if (range > 10 && range <= 15) {
          setLevels("");
          setLevels("MEDIUM");
        } else if (range > 15 && range <= 20) {
          setLevels("");
          setLevels("STRONG");
        }
    
        setRange(range);
      };
    
      {
        /**radio button behave + logic to add some func */
      }
      const [isChecked, setIsChecked] = useState<{ [key: string]: boolean }>({
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
      });
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = e.target;
        setIsChecked({
          ...isChecked,
          [name]: !isChecked[name],
        });
      };
    
      console.log(isChecked);
      const [firstinp, setFirstInpt] = useState(false);
    
      const Lighth = () => {
        setFirstInpt(!firstinp);
      };
    
      {
        /**generate password */
      }
      const [passwords, setPasswords] = useState("");
      const handlePssword = () => {
        let char = "";
        if (isChecked.uppercase) {
          char += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (isChecked.lowercase) {
          char += "abcdefghijklmnopqrstuvwxyz";
        }
        if (isChecked.numbers) {
          char += "0123456789";
        }
        if (isChecked.symbols) {
          char += "!@#$%^&*()_+";
        }
        let password = "";
        for (let i = 0; i < range; i++) {
          password += char[Math.floor(Math.random() * char.length)];
        }
    
        setPasswords(password);
      };
      console.log(passwords);
    
      const ClipBoard = () => {
        navigator.clipboard.writeText(passwords);
        toast("password copied");
      };
  return (
    <>
        {/**header*/}
        <Header passwords={passwords} ClipBoard={ClipBoard}/>
      {/**main */}
      <main>
       <Length range={range}/>
        <input
          type="range"
          min="0"
          max="20"
          id="range-inpt"
          onChange={passwordDificultie}
        />
        <CheckBoxs handleInputChange={handleInputChange} isChecked={isChecked}/>
        <div className="level-cont">
          <div className="difficulties">
            <p id="strength">STRENGTH</p>
            {/** i can do the logic by adding one more classname in ref,and then style in css. */}

            <p id="level">{levels ? levels : "STRONG"}</p>
            <Level range={range} />
          </div>
        </div>
      <SubmitBtn handlePssword={handlePssword}/>
      </main>
      <ToastContainer />
    </>
  )
}
