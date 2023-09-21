

import './App.css';
////import {ReactToPrint} from 'react-to-print';
import React,{useRef} from "react";
import downloadpdf from './downloadpdf';

//import{useReactToPrint} from 'react-to-print';

function App() {
     //const printRef = useRef();

    //const handlePrint =useReactToPrint({
     //content:() => printRef.current,
    //});
    //
  return (
      
    
    <div className="App">
      
     <div id="text" > 
    <div class="head" >
      <div>
      <form class="addcontent, addcontent1" >
        <label htmlFor='addcontent'></label>
        <input
        autoFocus
        id="addcontent"
        type='text'
        placeholder='Aman Agarwal'
        required
        />
      </form>
      </div>
      <div>
      <form class="addcontent2">
        <label htmlFor='addcontent'></label>
        <input
        autoFocus
        id="addcontent"
        type='text'
        placeholder='Ashok Bhawan BPPC'
        required
        />
      </form>
      </div>
    </div>
    <main class="body">
    <div>
      <div class="point">
        PROFESSIONAL SUMMARY
      </div>
      </div>
      <div>
      <form class="addcontent">
        <label htmlFor='addcontent'></label>
        <input
        autoFocus
        id="addcontent"
        type='text'
        placeholder='Organized and hard-working professional \n
        with two years of retail experience. Outgoing and 
        supportive worker with skills in communication and 
        time management. Recognized for dynamic work ethic 
        and team player attitude. Looking for a 
        growth-oriented position in an administrative role.'
        required
        />
      </form>
      </div>
      <div>
      <div class="point">
        SKILLS
      </div>
      </div>
      <div>
      <form class="addcontent">
        <label htmlFor='addcontent'></label>
        <input
        autoFocus
        id="addcontent"
        type='text'
        placeholder='Organizational Communication Problem-solving Time management'
        required
        />
      </form>
      </div>
      <div>
      <div class="point">
        PROFESSIONAL SKILLS
      </div>
      </div>
      <div>
      <form class="addcontent">
        <label htmlFor='addcontent'></label>
        <input
        autoFocus
        id="addcontent"
        type='text'
        placeholder='Communications
        Product knowledge Interpersonal Team leadership
        Retail software
        • Greeted customers, helped locate merchandise and suggested suitable options.
        • Increased sales 15% by offering advice on purchases and promoting additional products.
        Interacted with about 50 customers per day by phone or in-person to provide information and directed to desired staff members.
        Organization
        • Contributed to design and setup of merchandise displays promoting key products, creating aesthetically pleasing arrangements to attract customer attention.
        • Balanced and organized cash register by handling cash, counting change and storing coupons.
        • Managed promotional in-store signage and displays and re-stocked merchandise from returns or dressing rooms
        Problem-solving
        • Lowered theft 40% by watching customers, noticing security risks and reporting to manager/security team.
        • Approached each problem with fresh mind and analytical strategies to quickly resolve concerns.
        • Pursued resolutions to achieve complete customer satisfaction, including tracking down hard-to-find merchandise at diverse locations.'
        required
        />
      </form>
      </div>
      <div>
      <div class="point">
        WORK HISTORY
      </div>
      </div>
      <div>
      <form class="addcontent">
        <label htmlFor='addcontent'></label>
        <input
        autoFocus
        id="addcontent"
        type='text'
        placeholder='Sales Associate. Walmart
        Charleston, SC
        •
        September 2019 to Current
        Retail Sales Associate Dick Sporting Goods Charleston SC 
        
        Cashier Target
        
        Charlestond SCdf May' 
        required
        />
      </form>
      </div>
      <div>
      <div class="point">
        EDUCATION
      </div>
      </div>
      <div>
      <form class="addcontent">
        <label htmlFor='addcontent'></label>
        <input
        autoFocus
        id="addcontent"
        type='text'
        placeholder='High School Diploma Cincinnati, OH
        Mercy McAulet Highschool'
        required
        />
      </form>
      </div>
      
      
    
  
  
    </main>
    <footer>
      <button id="downloadpdf" onclick="downloadpdf()">
        PRINT IT
      </button>
      
    </footer>

    
    
  </div>
  </div>
  );
};



export default App;



