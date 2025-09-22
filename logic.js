let main = document.getElementsByTagName('main')[0]
let logincard = document.getElementsByClassName('login-card')[0]
let logout = document.getElementsByClassName('logout')[0]
logout.style.display = 'none'
let logout1 = document.getElementById('logout1')
logout1.style.display = 'none'
let navlink = document.getElementsByClassName('navlink')[0]
navlink.style.display = 'none'
let challanfee = document.getElementById('challanfee')
let section1 = document.getElementById('section1')
section1.style.display = 'none'
let section2 = document.getElementsByClassName('section2')[0]
section2.style.display = 'none'
let RSA = document.getElementsByClassName('RSA')[0]
RSA.style.display = 'none'

let home = document.getElementsByClassName('home')[0]
let home2 = document.getElementsByClassName('home2')[0]
let atnsect=document.getElementById('attendance-sec')
atnsect.classList.add('atnsec')
let atnbtn=document.getElementById('attendance-btn')


if (logincard) {
    let Ln = document.getElementsByClassName('Ln')[0]
    Ln.style.display = 'none'

    let sup = document.getElementsByClassName('sup')[0]
    sup.style.display = 'none'

    // let logform = document.getElementsByClassName('logform')[0]
    // logform.style.display = 'none'

} else {
    console.log('erro');

}
home.addEventListener('click', function (h) {
    h.preventDefault;
    navlink.style.display = 'block'
    document.body.style.backgroundColor = 'black'
    let section1 = document.getElementById('section1')
    section1.style.display = 'none'
    let content = document.getElementById('content')
    content.style.display = 'none'
    let sidebar = document.getElementById('sidebar')
    sidebar.style.display = 'block'
    let sigform = document.getElementsByClassName('sigform')[0]
            sigform.style.display = 'none'
let sup = document.getElementsByClassName('sup')[0]
        sup.style.display = 'block'
        sup.addEventListener('click', function () {
            let sigform = document.getElementsByClassName('sigform')[0]
            sigform.style.display = 'block'
            let RSA = document.getElementsByClassName('RSA')[0]
            RSA.style.display = 'flex'
            atnsect.classList.add('atnsec')
        })
        document.getElementById("allUsersData").style.display = "none";
atnsect.classList.add('atnsec')

})

home2.addEventListener('click', function (h) {
    h.preventDefault;
    navlink.style.display = 'block'
    let section1 = document.getElementById('section1')
    section1.style.display = 'none'
    let content = document.getElementById('content')
    content.style.display = 'none'
    let sidebar = document.getElementById('sidebar')
    sidebar.style.display = 'flex'
    sidebar.style.marginTop = '10px'
    atnsect.classList.add('atnsec')
    let sigform = document.getElementsByClassName('sigform')[0]
            sigform.style.display = 'none'
    challanfee.disabled = false;
    challanfee.addEventListener('click', (e) => {
    e.preventDefault();
    challanfee.disabled = true;
    let section1 = document.getElementById('section1');
    section1.style.display = 'none';
    let section2 = document.getElementsByClassName('section2')[0];
    section2.style.display = 'none';
    home2.addEventListener('click', function (hh) {
    hh.preventDefault;
     let section2 = document.getElementsByClassName('section2')[0];
    section2.style.display = 'block';
})

    let userKey = localStorage.getItem("loggedInUserKey");
    let savedData = JSON.parse(localStorage.getItem(userKey));

    if (savedData) {
        let chalno = document.getElementById('chalno');
        let feeamount = document.getElementById('feeamount');
        let duedate = document.getElementById('duedate');

        // Challan generate
        chalno.textContent = Date.now();
        feeamount.textContent = 2000;
        duedate.textContent = new Date().toLocaleString();

        // Screen pe data show karo
        let stnm = document.getElementById('stnm');
        let Ftn = document.getElementById('Ftn');
        stnm.textContent = `${savedData.Firstname} ${savedData.Midname}`;
        Ftn.textContent = savedData.Fathername;

        section1.style.display = 'block';

        //  Download button pe PDF download hoga
        let downloadBtn = document.getElementById('downloadChallan');
        downloadBtn.onclick = () => {
            let challanElement = document.querySelector("#section1 .challan");

            html2canvas(challanElement, { scale: 2 }).then(canvas => {
                const imgData = canvas.toDataURL("image/png");
                const { jsPDF } = window.jspdf;
                const pdf = new jsPDF("p", "mm", "a4");

                let imgWidth = 210;
                let pageHeight = 297;
                let imgHeight = (canvas.height * imgWidth) / canvas.width;
                let position = 0;

                pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
                pdf.save("Challan.pdf");
            });
        };

    } else {
        alert("No data found!");
    }
});

})

let Createaccount = document.getElementsByName('Createaccount')[0];
Createaccount.addEventListener('click', function (d) {
    d.preventDefault();

    let logform = document.getElementsByClassName('logform')[0]
    logform.style.display = 'none'
    let Firstname = document.getElementsByName('Firstname')[0];
    let midname = document.getElementsByName('midname')[0];
    let Fathername = document.getElementsByName('Fathername')[0];
    let profileImage = document.getElementsByName('profileImage')[0]
    let dob = document.getElementsByName('dob')[0]
    let gender = document.getElementsByName('gender')[0]
    let program = document.getElementsByName('program')[0]
    let address = document.getElementsByName('address')[0]
    let cnic = document.getElementsByName('cnic')[0]
    let email = document.getElementsByName('email')[0];
    let passField = document.getElementsByName('passField')[0];
    let repassword = document.getElementsByName('repassword')[0];
    let Contactnumber = document.getElementsByName('Contactnumber')[0];
    let id = document.getElementsByName('id')[0];
      let lastSixCNIC = cnic.value.slice(6,11);
    

    let imagePath = profileImage.files.length > 0 ? URL.createObjectURL(profileImage.files[0]) : "";
    let data = {
        Firstname: Firstname.value,
        Midname: midname.value,
        Fathername: Fathername.value,
        email: email.value,
        passField: passField.value,
        repassword: repassword.value,
        Contactnumber: Contactnumber.value,
        id: lastSixCNIC,
        profileImage: imagePath,
        dob: dob.value,
        gender: gender.value,
        program: program.value,
        address: address.value,
        cnic: cnic.value,
    };
    let newKey = "UserData" + (localStorage.length + 1);
    localStorage.setItem(newKey, JSON.stringify(data));
    Firstname.value = "";
    midname.value = "";
    Fathername.value = "";
    email.value = "";
    passField.value = '';
    repassword.value = "";
    Contactnumber.value = "";
    id.value = "";
    profileImage.value = "";
    dob.value = "";
    gender.value = "";
    program.value = "";
    address.value = "";
    cnic.value = "";
     alert('Account create successful')
});




let admin = 'admin'
let adminPassword = 'admin123'
let admindata = {
    admin: admin,
    adminPassword: adminPassword
};
localStorage.setItem('admindata', JSON.stringify(admindata))
window.addEventListener("load", () => {
    let loginStatus = localStorage.getItem("isLoggedIn");

    if (loginStatus === "admin") {
        document.body.style.backgroundColor = 'white';
        main.style.display = 'none';
        logout.style.display = 'none';
        logout1.style.display = 'block';
        navlink.style.display = 'block';
        section1.style.display = 'none';
        section2.style.display = 'none';
        
        // atnsect.classList.remove('atnsec')
        home2.style.display = 'none';
        let sup = document.getElementsByClassName('sup')[0]
        sup.style.display = 'block'
        sup.addEventListener('click', function () {
            let sigform = document.getElementsByClassName('sigform')[0]
            sigform.style.display = 'block'
            let RSA = document.getElementsByClassName('RSA')[0]
            RSA.style.display = 'flex'
            atnsect.classList.add('atnsec')

        })
 atnbtn.addEventListener('click',function () {
    atnsect.classList.remove('atnsec')
 let RSA = document.getElementsByClassName('RSA')[0]
            RSA.style.display = 'none'
 })

    }
    else if (loginStatus === "true") {
        // document.body.style.backgroundColor = 'white';
        main.style.display = 'none';
        logout.style.display = 'block';
        navlink.style.display = 'block';
        section1.style.display = 'none';
        atnbtn.classList.add('atnsec')
         document.getElementById("allUsersData").style.display = "none";
        section2.style.display = 'block';
        let content = document.getElementById('content')
        content.style.display = 'none'
        let sidebar = document.getElementById('sidebar')
        sidebar.style.display = 'flex'
        let sup = document.getElementsByClassName('sup')[0]
        sup.style.display = 'none'
        home.style.display = 'none';
        let showUsersBtn = document.getElementById("showUsersBtn");
        showUsersBtn.style.display='none'
    challanfee.disabled = false;
    challanfee.addEventListener('click', (e) => {
    e.preventDefault();
    challanfee.disabled = true;
    let section1 = document.getElementById('section1');
    section1.style.display = 'none';
    let section2 = document.getElementsByClassName('section2')[0];
    section2.style.display = 'none';
    home2.addEventListener('click', function (hh) {
    hh.preventDefault;
     let section2 = document.getElementsByClassName('section2')[0];
    section2.style.display = 'block';
})

    let userKey = localStorage.getItem("loggedInUserKey");
    let savedData = JSON.parse(localStorage.getItem(userKey));

    if (savedData) {
        let chalno = document.getElementById('chalno');
        let feeamount = document.getElementById('feeamount');
        let duedate = document.getElementById('duedate');

        // Challan generate
        chalno.textContent = Date.now();
        feeamount.textContent = 2000;
        duedate.textContent = new Date().toLocaleString();

        // Screen pe data show karo
        let stnm = document.getElementById('stnm');
        let Ftn = document.getElementById('Ftn');
        stnm.textContent = `${savedData.Firstname} ${savedData.Midname}`;
        Ftn.textContent = savedData.Fathername;

        section1.style.display = 'block';

        // Download button pe PDF download hoga
        let downloadBtn = document.getElementById('downloadChallan');
        downloadBtn.onclick = () => {
            let challanElement = document.querySelector("#section1 .challan");

            html2canvas(challanElement, { scale: 2 }).then(canvas => {
                const imgData = canvas.toDataURL("image/png");
                const { jsPDF } = window.jspdf;
                const pdf = new jsPDF("p", "mm", "a4");

                let imgWidth = 210;
                let pageHeight = 297;
                let imgHeight = (canvas.height * imgWidth) / canvas.width;
                let position = 0;

                pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
                pdf.save("Challan.pdf");
            });
        };

    } else {
        alert("No data found!");
    }
});
  let userKey = localStorage.getItem("loggedInUserKey");
    let DashData = JSON.parse(localStorage.getItem(userKey));
if (DashData) {
    // Profile pic
    document.getElementById("profilePic").src = DashData.profileImage ;

    // Name
    document.getElementById("studentName").textContent = DashData.Firstname + " " + (DashData.Midname || "");

    // Email
    document.getElementById("studentEmail").textContent = DashData.email;
}
    }
    else {
        // agar login nahi hai
        document.body.style.backgroundColor = 'white';
        main.style.display = 'block';
        logout.style.display = 'none';
        navlink.style.display = 'none';
        section1.style.display = 'none';
        section2.style.display = 'none';
    }
});





let loginaccount = document.getElementsByClassName('loginaccount')[0];
loginaccount.addEventListener('click', function (e) {
    e.preventDefault();
    let username = document.getElementsByName('username')[0].value;
    let Lpassword = document.getElementsByName('Lpassword')[0].value;
    let admindata = JSON.parse(localStorage.getItem('admindata'));

    if (username === admindata.admin && Lpassword === admindata.adminPassword) {
        localStorage.setItem("isLoggedIn", "admin");
        main.style.display = 'block';
        logout.style.display = 'none';
        logout1.style.display = 'block';
        let logincard = document.getElementsByClassName('login-card')[0]
        logincard.style.display = 'none'
        navlink.style.display = 'block';
        let logform = document.getElementsByClassName('logform')[0]
        logform.style.display = 'block'
        let sup = document.getElementsByClassName('sup')[0]
        sup.style.display = 'block'
        atnbtn.addEventListener('click',function () {
    atnsect.classList.remove('atnsec')
 let RSA = document.getElementsByClassName('RSA')[0]
            RSA.style.display = 'none'
 })
home2.style.display='none'
alert('Admin ACC')
        return;
    }
    let loginSuccess = false;

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);


        if (key.startsWith("UserData")) {
            let user = JSON.parse(localStorage.getItem(key));

            if (user.email === username && user.passField === Lpassword || user.id === username && user.passField === Lpassword ) {
                loginSuccess = true;
                localStorage.setItem("loggedInUserKey", key);
                let section2 = document.getElementsByClassName('section2')[0]
                section2.style.display = 'block'
                let content = document.getElementById('content')
                content.style.display = 'none'
                home.style.display='none'
                document.getElementById("allUsersData").style.display = "none";
                let showUsersBtn = document.getElementById("showUsersBtn");
                showUsersBtn.style.display = "none";
atnsect.classList.add('atnsec')
atnbtn.classList.add('atnsec')
                
let userKey = localStorage.getItem("loggedInUserKey");
    let DashData = JSON.parse(localStorage.getItem(userKey));
if (DashData) {
    // Profile pic
    document.getElementById("profilePic").src = DashData.profileImage ;

    // Name
    document.getElementById("studentName").textContent = DashData.Firstname + " " + (DashData.Midname || "");

    // Email
    document.getElementById("studentEmail").textContent = DashData.email;
}
                
                break;
            }
        }
    }

    if (loginSuccess) {

        localStorage.setItem("isLoggedIn", "true");
        // document.body.style.backgroundColor = 'black';
        main.style.display = 'none'
        let logout = document.getElementsByClassName('logout')[0]
        logout.style.display = 'block'
        let navlink = document.getElementsByClassName('navlink')[0]
        navlink.style.display = 'block'
        let logout1 = document.getElementById('logout1')
        logout1.style.display = 'none'
        let sup = document.getElementsByClassName('sup')[0]
        sup.style.display = 'none'
home.style.display = 'none'


challanfee.addEventListener('click', (e) => {
    e.preventDefault();
    challanfee.disabled = true;
    let section1 = document.getElementById('section1');
    section1.style.display = 'none';
    let section2 = document.getElementsByClassName('section2')[0];
    section2.style.display = 'none';

    let userKey = localStorage.getItem("loggedInUserKey");
    let savedData = JSON.parse(localStorage.getItem(userKey));

    if (savedData) {
        let chalno = document.getElementById('chalno');
        let feeamount = document.getElementById('feeamount');
        let duedate = document.getElementById('duedate');

        // Challan generate
        chalno.textContent = Date.now();
        feeamount.textContent = 2000;
        duedate.textContent = new Date().toLocaleString();

        // Screen pe data show karo
        let stnm = document.getElementById('stnm');
        let Ftn = document.getElementById('Ftn');
        stnm.textContent = `${savedData.Firstname} ${savedData.Midname}`;
        Ftn.textContent = savedData.Fathername;

        section1.style.display = 'block';

        //  Download button pe PDF download hoga
        let downloadBtn = document.getElementById('downloadChallan');
        downloadBtn.onclick = () => {
            let challanElement = document.querySelector("#section1 .challan");

            html2canvas(challanElement, { scale: 2 }).then(canvas => {
                const imgData = canvas.toDataURL("image/png");
                const { jsPDF } = window.jspdf;
                const pdf = new jsPDF("p", "mm", "a4");

                let imgWidth = 210;
                let pageHeight = 297;
                let imgHeight = (canvas.height * imgWidth) / canvas.width;
                let position = 0;

                pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
                pdf.save("Challan.pdf");
            });
        };

    } else {
        alert("No data found!");
    }
});


    } else {
        alert("Invalid username or password");
    }
});

let sigform = document.getElementsByClassName('sigform')[0]
sigform.style.display = 'none'

let sup = document.getElementsByClassName('sup')[0]
sup.style.display = 'block'
sup.addEventListener('click', function () {
    let sigform = document.getElementsByClassName('sigform')[0]
    sigform.style.display = 'block'
    let RSA = document.getElementsByClassName('RSA')[0]
    RSA.style.display = 'flex'
    document.getElementById("allUsersData").style.display = "none";
    atnsect.classList.add('atnsec')
})


logout.addEventListener('click', function (f) {
    f.preventDefault();
    localStorage.removeItem("isLoggedIn");
    main.style.display = 'block'
    let username = document.getElementsByName('username')[0];
    let Lpassword = document.getElementsByName('Lpassword')[0];
    username.value = ''
    Lpassword.value = ''
    navlink.style.display = 'none';
    logout.style.display = 'none';
    let section1 = document.getElementById('section1')
    section1.style.display = 'none'
    let section2 = document.getElementsByClassName('section2')[0]
    section2.style.display = 'none'
let sup = document.getElementsByClassName('sup')[0]
sup.style.display = 'none'
document.getElementById("allUsersData").style.display = "none";
atnsect.classList.add('atnsec')
})


logout1.addEventListener('click', function (g) {
    g.preventDefault();
     localStorage.removeItem("isLoggedIn");
    main.style.display = 'block'
    let logform = document.getElementsByClassName('logform')[0]
    logform.style.display = 'flex'
    let section1 = document.getElementById('section1')
    section1.style.display = 'none'
    let logincard = document.getElementsByClassName('login-card')[0]
    logincard.style.display = 'flex'
    let sigform = document.getElementsByClassName('sigform')[0]
sigform.style.display = 'none'
    let username = document.getElementsByName('username')[0];
    let Lpassword = document.getElementsByName('Lpassword')[0];
    username.value = ''
    Lpassword.value = ''
    navlink.style.display = 'none';
    let section2 = document.getElementsByClassName('section2')[0]
    section2.style.display = 'none'
    let sup = document.getElementsByClassName('sup')[0]
sup.style.display = 'none'
    document.getElementById("allUsersData").style.display = "none";
    atnsect.classList.add('atnsec')
})

let Dashboard = document.getElementById('Dashboard')
Dashboard.addEventListener('click', (h) => {
    h.preventDefault;
    let content = document.getElementById('content')
    content.style.display = 'block'
    let sidebar = document.getElementById('sidebar')
    sidebar.style.display = 'none'
        document.getElementById("allUsersData").style.display = "none";


})

function showAllUsers() {
    let tableBody = document.getElementById("usersTableBody");
    tableBody.innerHTML = ""; // purana clear karo

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);

        // sirf UserData wali entries lo
        if (key.startsWith("UserData")) {
            let user = JSON.parse(localStorage.getItem(key));

            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.Firstname}</td>
                <td>${user.Midname}</td>
                <td>${user.Fathername}</td>
                <td>${user.email}</td>
                <td>${user.Contactnumber}</td>
                <td>${user.cnic}</td>
                <td>${user.id}</td>
                <td>${user.program}</td>
                <td>${user.gender}</td>
                <td>${user.dob}</td>
            `;
            tableBody.appendChild(row);
        }
    }

    document.getElementById("allUsersData").style.display = "block";
}

let showUsersBtn = document.getElementById("showUsersBtn");
if(showUsersBtn){
    showUsersBtn.addEventListener("click", function(e){
        e.preventDefault();
        showAllUsers();
        document.getElementsByClassName("sigform")[0].style.display = "none";
        document.getElementsByClassName("RSA")[0].style.display = "none";
    });
}

let uploadInput = document.getElementById("uploadPic");

uploadInput.addEventListener("change", function (event) {
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onload = function (e) {
        let base64Image = e.target.result;

        // Save in localStorage with user data
        let userKey = localStorage.getItem("loggedInUserKey");
        let DashData = JSON.parse(localStorage.getItem(userKey)) || {};

        DashData.profileImage = base64Image;

        localStorage.setItem(userKey, JSON.stringify(DashData));

        // Show image instantly
        document.getElementById("profilePic").src = base64Image;
    };

    reader.readAsDataURL(file);  // Convert to Base64
});
let userKey = localStorage.getItem("loggedInUserKey");
let DashData = JSON.parse(localStorage.getItem(userKey));

if (DashData && DashData.profileImage) {
    document.getElementById("profilePic").src = DashData.profileImage;
}


let holidays = []; // holidays store karne ke liye

  function addHoliday() {
    let day = parseInt(document.getElementById("holidayDay").value);
    if (!isNaN(day) && day >= 1 && day <= 30 && !holidays.includes(day)) {
      holidays.push(day);
      alert("Holiday added for day " + day);
      showAttendanceTable(); // refresh after adding holiday
    }
  }

  function calculateAttendancePercentage(userId, selectedMonth) {
    let totalDays = 30 - holidays.length;
    let presentDays = 0;

    for (let day = 1; day <= 30; day++) {
      if (holidays.includes(day)) continue; // skip holidays
      let attendanceKey = `Attendance_${selectedMonth}_${userId}_day${day}`;
      if (localStorage.getItem(attendanceKey) === "present") {
        presentDays++;
      }
    }

    let percentage = totalDays > 0 ? Math.round((presentDays / totalDays) * 100) : 0;
    return percentage;
  }
// ATTENDANCE VALUE INSERT
  function updateSidebarAttendance(userId) {
    let selectedMonth = document.getElementById("monthSelect").value;
    let percentage = calculateAttendancePercentage(userId, selectedMonth);

    let atdncSpan = document.querySelector(".atdnc");
    if (atdncSpan) {
      atdncSpan.textContent = percentage + "%";
    }
  }

  function showAttendanceTable() {
    let selectedMonth = document.getElementById("monthSelect").value;
    let tableBody = document.getElementById("attendanceTableBody");
    tableBody.innerHTML = "";

    // reset header (to avoid duplicate days)
    let headerRow = document.getElementById("headerRow");
    headerRow.innerHTML = `
      <th class="header-cell">User ID</th>
      <th class="header-cell">Name</th>
    `;
    for (let day = 1; day <= 30; day++) {
      let th = document.createElement("th");
      th.textContent = day;
      if (holidays.includes(day)) {
        th.style.background = "gray"; // highlight holiday
      }
      headerRow.appendChild(th);
    }

    // LocalStorage se users uthao
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key.startsWith("UserData")) {
        let user = JSON.parse(localStorage.getItem(key));
        let row = document.createElement("tr");
        row.className = "attendance-row";

        row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.Firstname} ${user.Midname} ${user.Fathername}</td>
        `;

        for (let day = 1; day <= 30; day++) {
          let td = document.createElement("td");
          if (holidays.includes(day)) {
            td.textContent = "H"; // holiday mark
            td.style.background = "gray";
          } else {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "attendance-checkbox";

            let attendanceKey = `Attendance_${selectedMonth}_${user.id}_day${day}`;

            if (localStorage.getItem(attendanceKey) === "present") {
              checkbox.checked = true;
            }

            checkbox.addEventListener("change", () => {
              if (checkbox.checked) {
                localStorage.setItem(attendanceKey, "present");
              } else {
                localStorage.removeItem(attendanceKey);
              }
              updateSidebarAttendance(user.id); // update sidebar on change
            });

            td.appendChild(checkbox);
          }
          row.appendChild(td);
        }

        tableBody.appendChild(row);

        // Sidebar attendance update for this user
        updateSidebarAttendance(user.id);
      }
    }

    document.getElementById("attendanceSection").style.display = "block";
  }

  function generateMonthDropdown() {
    let monthSelect = document.getElementById("monthSelect");
    monthSelect.innerHTML = ""; // avoid duplicates
    let now = new Date();
    let currentYear = now.getFullYear();

    let months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    months.forEach((monthName, index) => {
      let monthValue = `${currentYear}-${String(index + 1).padStart(2, "0")}`;
      let option = document.createElement("option");
      option.value = monthValue;
      option.textContent = `${monthName} ${currentYear}`;
      if (index === now.getMonth()) {
        option.selected = true;
      }
      monthSelect.appendChild(option);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    generateMonthDropdown();
    showAttendanceTable();
  });

  document.getElementById("monthSelect").addEventListener("change", showAttendanceTable);

let showatdnc = document.getElementById('showatdnc');

showatdnc.addEventListener('click', function () {
  let content = document.getElementById('content');
  let sidebar = document.getElementById('sidebar');
  let allUsersData = document.getElementById('allUsersData');
  let cardperformance = document.getElementById('card-performance');
  let cardnotifications = document.getElementById('card-notifications');

  if (content) content.style.display = 'block';
  if (sidebar) sidebar.style.display = 'none';
  if (allUsersData) allUsersData.style.display = 'none';
  if (cardperformance) cardperformance.style.display = 'none';
  if (cardnotifications) cardnotifications.style.display = 'none';
});


// 
function showPassedStudents() {
  let selectedMonth = document.getElementById("monthSelect").value;
  let passedBody = document.getElementById("passedStudentsBody");
  passedBody.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);

    if (key.startsWith("UserData")) {
      let user = JSON.parse(localStorage.getItem(key));
      let percentage = calculateAttendancePercentage(user.id, selectedMonth);

      if (percentage >= 60) {
        let row = document.createElement("tr");
        row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.Firstname} ${user.Midname} ${user.Fathername}</td>
          <td>${percentage}%</td>
        `;
        passedBody.appendChild(row);
        document.getElementById("downloadPassedPDF").style.di
      }
    }
  }

  // Section visible 
  document.getElementById("passedStudentsSection").style.display = "block";
}
document.getElementById("downloadPassedPDF").addEventListener("click", () => {
  const a = document.createElement("a");
  a.href = "GOVERNMENT COLLEGE UNIVERSITY HYDERABAD.pdf"; // 👈 yaha apni file ka path
  a.download = "AdmitCard.pdf";  // 👈 naam jo download hote waqt show hoga
  a.click();
});

  document.getElementById("showPassedBtn").addEventListener("click", showPassedStudents);


  