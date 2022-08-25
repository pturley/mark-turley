import React from 'react';
import initials from './images/initials.png';
import mark from './images/mark.jpg';
import leatta from './images/leatta.jpg';

function goToGoogleMaps() {
  window.location.href = "https://www.google.com/maps/place/401+N+Rolla+St+Suite+3/@37.9472257,-91.7727631,17z/data=!3m1!4b1!4m2!3m1!1s0x87da54bf7aa692ad:0xbd74f74da034b97c";
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="masthead">
          <img src={initials} className="logo pull-left" alt="Mark's Initials"/>
          <div className="business-card pull-left">
            <div className="name">
              Mark Turley
            </div>
            <div className="title">
              Attorney at law
            </div>
          </div>
          <div className="phone-numbers pull-right">
            <div className="office-phone">
              office: (573) 612-1408
            </div>
            <div className="fax">
              fax: (573) 303-5869
            </div>
          </div>
        </div>
      </header>
      <div className="content">
        <section>
          <div className="person">
            <img src={mark} alt="Mark's Headshot"/>
            <div className="bio without-business-card">
              <p>Mark has 30 years of experience trying lawsuits in state and federal courts through out Missouri.</p>
              <p>He has successfully represented people, families and small businesses in more than 500 cases ranging from motor vehicle crashes to complex insurance and breach of business contracts.</p>
              <p>Mark has handled cases in every appellate court in Missouri including the Supreme Court.</p>
            </div>
          </div>
          <div className="person">
            <img src={leatta} className="pull-left" alt="Leatta's Headshot"/>
            <div className="bio">
              <div className="business-card">
                <div className="name">Leatta Nichols</div>
                <div className="title">Paralegal</div>
              </div>
              <p>Leatta is an advanced certified paralegal with more than 13 years of experience in management of civil cases.</p>
              <p>She has shared responsibility with Mark in hundreds of cases from start to finish and provided lead technical support for legal teams in numerous jury and nonjury trials.</p>
              <p>Leatta has experience in every phase of case development from initial investigation through trial and appeal.</p>
            </div>
          </div>
        </section>
        <section className="map" onClick={goToGoogleMaps}>
          <div className="map-image"></div>
          <div className="contact-us">
            <h2>Contact Us</h2>
            <div className="address">
              Smith & Turley
              <br/>
              401 N Rolla St.
              <br/>
              Suite #3
              <br/>
              P.O. Box 860
              <br/>
              Rolla, MO 65402
            </div>
            <div className="phone-numbers">
              <div className="phone-number">
                <span className="phone-number-label">office:</span>
                <span className="phone-number-number">(573) 612-1408</span>
              </div>
              <div className="phone-number">
                <span className="phone-number-label">fax:</span>
                <span className="phone-number-number">(573) 303-5869</span>
              </div>
            </div>
          </div>
        </section>
        <section className="practice-areas">
          <h1>Our Practice Areas</h1>
          <div className="practice">
            <div className="title">Injuries & Death</div>
            <div className="sub-practices">
              Truck & Auto Accidents, Dangerous Premises, Dangerous Products, Dangerous Roads & Bridges, Malpractice, Workers' Compensation
            </div>
            <div className="description">
              <p>Every year, millions of Americans are needlessly injured and killed as a result of violations of recognized safety rules. Many others suffer on the job injuries that threaten the financial well being of workers and their families.  Mark Turley represents people and families who have suffered harms and losses caused by violators of safety rules and work related injuries.</p>
            </div>
          </div>
          <div className="practice">
            <div className="title">Insurance & Breach of Contract</div>
            <div className="description">
              <p>Unfortunately, insurance companies and other big businesses do not always keep their promises.  Mark Turley represents people and small business that have suffered financial harm because an insurance company or corporation has refused to honor its obligation under an insurance policy or contract.</p>
            </div>
          </div>
          <div className="practice">
            <div className="title">Constitutional Rights</div>
            <div className="sub-practices">
              Condemnation, Civil Rights
            </div>
            <div className="description">
              <p>Federal and state constitutions create and limit the power of government.  The government can take private property for a public purpose but not without paying fair compensation.  Under certain circumstances the police can arrest a citizen but may never use more force than reasonably necessary.  Mark Turley represents citizens who have been harmed when the government or its officers have abused their authority.</p>
            </div>
          </div>
        </section>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
