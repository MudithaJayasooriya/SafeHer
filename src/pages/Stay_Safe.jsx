import React from "react";
import Footer from '../components/Footer';
import { FaSeedling, FaBookOpen, FaHandshake, FaUtensils } from "react-icons/fa";
import "./Stay_Safe.css";

const Stay_Safe = () => {
  return (
    <>
      <div className="stay-safe-page">
        <header className="stay-safe-header">
          <h1>Stay Safe with SafeHer</h1>
          <p>Your safety matters - at school, online, and everywhere in between.</p>
        </header>

        <section className="safety-section school-safety">
          <img src="/images/img5.jpeg" alt="School Safety" />
          <div>
            <h2>📚 School & Campus Safety</h2>
            <ul>
              
<li>Use well-lit and populated paths when walking across campus, especially at night.</li>
<li>Avoid walking alone after dark - opt for a buddy system or call a trusted friend.</li>
<li>Keep emergency contacts saved on speed dial or pinned on your phone screen.</li>
<li>Utilize campus escort services if your school provides them for night-time walks.</li>
<li>Stay alert in social situations - never leave your drink unattended.</li>
<li>Lock your dorm room and valuables even if you're stepping out briefly.</li>
<li>Attend campus safety workshops and encourage your friends to join too.</li>
<li>Install safety apps like "Guardians," “bSafe,” or your campus alert app.</li>
<li>Inform trusted friends of your whereabouts - especially before going to parties.</li>
<li>Speak up about harassment or bullying - report it to authorities or SafeHer.</li>


            </ul>
          </div>
        </section>

        <section className="safety-section online-safety">
          <img src="/images/img6.jpg" alt="Online Safety" />
          <div>
            <h2>🌐 Online Safety</h2>
            <ul>
              <li>Avoid posting real-time location updates on social media.</li>
              <li>Use a separate email for signups (like contests or non-personal use).</li>
              <li>Keep your personal photos private - avoid sharing 
                them in public forums or DMs.</li>
              <li>Review your privacy settings regularly on all social apps.</li>
              <li>Be cautious of online friends - don’t share sensitive info or meet them alone.</li>
              <li>Don’t click suspicious links even if they’re from friends - accounts get hacked.</li>
              <li>Use strong passwords and change them every 3–6 months.</li>
              <li>Cover your webcam when not in use.</li>
              <li>Report abusive or creepy behavior immediately to platform support.</li>
              <li>Educate yourself about cybercrime tactics like phishing, catfishing, and doxing.</li>
             
            </ul>
          </div>
        </section>

        <section className="safety-section public-safety">
          <img src="/images/img7.jpg" alt="Public Safety" />
          <div>
            <h2>🚶 Public Spaces</h2>
            <ul>
              <li>Walk confidently and with purpose — awareness can discourage unwanted attention.</li>
              <li>Keep your phone accessible, but don't be distracted while walking.</li>
              <li>Carry a whistle, pepper spray, or personal alarm in your bag or keychain.</li>
              <li>Avoid getting into unmarked vehicles or unverified ride shares.</li>
              <li>Check the license plate and driver info before getting into a cab or ride-hailing car.</li>
              <li>Sit near exits in public transport, especially when alone.</li>
              <li>Avoid isolated ATM booths or withdrawing money late at night.</li>
              <li>Trust your gut instinct — if something feels off, leave or call for help.</li>
              <li>Inform someone before heading out and share live location if possible</li>
              <li>Know self-defense basics or attend a self-defense workshop for women.</li>
              


            </ul>
          </div>
        </section>

        <section className="emergency-contacts">
          <h2>📞 Emergency Helplines</h2>
          
            
            
              <li><strong>Police:</strong> 100</li>
              <li><strong>Women Helpline:</strong> 1091</li>
              <li><strong>Child Helpline:</strong> 1098</li>
              <li><strong>Cyber Crime:</strong> 155260</li>
              <li><strong>SafeHer Support:</strong> +91-9999-000-000</li>
            
          
        </section>

        <section className="resources-section">
          <h2>📂 Downloadable Resources</h2>
          <p>Click below to download our safety guides:</p>
          <ul>
            <li><a href="/pdfs/school_safety_tips.pdf" download>School Safety Tips PDF</a></li>
            <li><a href="/pdfs/online_safety_guide.pdf" download>Online Safety Guide PDF</a></li>
            <li><a href="/pdfs/travel_safety_tips.pdf" download>Travel Safety Tips PDF</a></li>
          </ul>
        </section>
      </div>

      
    </>
  );
};

export default Stay_Safe;
