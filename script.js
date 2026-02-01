//toggles the navigation menu on smaller screens
let menuState = "closed";
let nav2 = document.getElementById("nav2");

const menuIcon = document.getElementById("menu-icon");
menuIcon.addEventListener("click", () => {
  if (menuState == "closed") {
    nav2.style.display = "flex";
    menuIcon.innerHTML = "✖";
    menuState = "opened";
  } else {
    nav2.style.display = "none";
    menuIcon.innerHTML = "☰";
    menuState = "closed";
  }
});


//variables required to connect to Supabase
const supabaseUrl = "https://xcgzdeupoteayfiorscj.supabase.co";
const supabaseKey = "sb_publishable_2B60fPIaI1PiLYcvCfgGYA_KveaLaEv";
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);


//attempts to use the Arkesel SMS service API to send an SMS notification to the admin's phone number
        async function sendSMS(name) {
            const url = "https://sms.arkesel.com/api/v2/sms/send";
            // let phoneNumber = "233547144715";

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "api-key": "a3l2cVNJTUV1d3pQYnlTZnZpSlo", // ⚠️
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    sender: "Hi-Tech E E",
                    message: `New service request received from ${name}. Log in to view details: https://hi-tech-e-eng.vercel.app/sign-in.html`,
                    recipients: ["233547144715", "233201328530"],
                }),
            });

            const result = await response.json();
            console.log(result);
            console.log("Response: " + JSON.stringify(result));
        }