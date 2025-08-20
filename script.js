document.getElementById('year').textContent = new Date().getFullYear();

function toggleMenu() {
  document.querySelector("nav ul").classList.toggle("show");
}

const faculty = [
  {
    name: "Dr. Rahat Hossain Faisal",
    role: "Associate Professor & Chairman",
    phone: "+8801733977761",
    email: ["rhfaisal@gmail.com", "rhfaisal@bu.ac.bd"],
    image: "rahatfaisalsir.jpg"  
  },
  {
    name: "Dr. Md Manjur Ahmed",
    role: "Associate Professor",
    phone: "01851924944",
    email: ["mmahmed@bu.ac.bd", "manjur_39@yahoo.com"],
    image: "manjursir.jpg"
  },
  {
    name: "Md Samsuddoha",
    role: "Assistant Professor",
    phone: "+8801737-349075",
    email: ["sams.csebu@gmail.com", "msamsuddoha@bu.ac.bd"],
    image: "samsuddohasir.jpg"
  }
];

function renderFaculty() {
  const root = document.getElementById("facultyList");
  root.innerHTML = "";
  faculty.forEach(f => {
    const card = document.createElement("div");
    card.className = "faculty-card";
    card.innerHTML = `
      <img src="${f.image}" alt="${f.name}" class="faculty-img">
      <h5>${f.name}</h5>
      <p>${f.role}</p>
      <p>Cell: ${f.phone}</p>
      <p>Email: ${f.email.map(e => `<a href="mailto:${e}">${e}</a>`).join(", ")}</p>
    `;
    root.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderFaculty);

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  
  if(name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
  } else if(!email.includes("@")) {
    alert("Please enter a valid email.");
  } else {
    alert("Message sent successfully!");
    this.reset();
  }
});
