function AndrePage(){
    document.getElementById('app').innerHTML = 
    `

    <div class="NAVBAR2">
    <h1> THAWA'S BEDRIFT!</h>
    <button onclick="GotoMAINpage()"> HOME! </button>
    <hr>
    <img src="https://4h.no/getfile.php/136714-1576616384/Prosjektplattformen/Oppdrag/Bilder/Teknologi%20og%20mekking/sveising.jpg%20%28mobile480%29.jpg">
    </div>
 
    <div class="HVATRENGERDU"><strong>DESCRIBE WHAT YOU NEED FROM US!</strong>
    <br>
    <br>
    <input type="text"></input>
    <br>
    <br>
    <div>
    Hire <button onclick="AddThawa()">Thawa</button> for 450,- per time.
    Hire <button onclick="Addbibbo()">Bibbo</button> for 300,- per time. 
    Hire <button onclick="AddRene()">Rene</button> for 600,- per time.
    </div>
    <br>
    <br>
    <div> 
    ${personer}
    <button onclick="Fjern()">FJERN</button>
    </div>
   
    
    `;


    
}

