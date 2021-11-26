import './App.css';
import btspic from './btspic.PNG';


function App() {
  return (
    <div className="App">
        <div className="container" >
          <div className="app-list">
            <ul className ="lists1">
              <li className="list-item"><img src={btspic} alt="btspic" width="40" height="40"/></li>
              <li className="start-item">Start Bootstrap</li>
              <li className="list-item">Themes ></li>
              <li className="list-item">Templates ></li>
              <li className="list-item">Bundles ></li>
              <li className="list-item">Forms ></li>
              <li className="list-item">Resources ></li>
              </ul>
              <ul className ="lists2">
              <li>Blog</li>
              <li><button className="login-button">Log In</button></li>
              </ul>
          </div>
          <div className="pricingContainer">
            <h1 className="btshdr1" >Bootstrap Responsive Pricing Table Snippet</h1>
            <h4 className="btshdr2" >Pricing Table with Hover Effects and Buttons</h4>
          </div>
          <div className="pricing-items">
            <div className="prcitems">
              <h4 className="price-type">FREE</h4>
              <p className="prc-tag">$0<sub>/month</sub></p>
            
              <h2 className="sec-items">✓ Single User</h2>
              <h2 className="sec-items" >✓ 5GB Storage</h2>
              <h2 className="sec-items">✓ Unlimited Public Projects</h2>
              <h2 className="sec-items">✓ Community Access</h2>

              <h2 className="sec-items-na">⨉ Unlimited Private Projects</h2>
              <h2 className="sec-items-na">⨉ Dedicated Phone Support</h2>
              <h2 className="sec-items-na">⨉ Free Subdomain</h2>
              <h2 className="sec-items-na">⨉ Monthly Status Reports</h2>
               <button className="btn2">BUTTON</button>
            </div>
            <div className="prcitems">
            <h4 className="price-type">PRO</h4>
              <p className="prc-tag">$9<sub>/month</sub></p>
            
              <h2 className="sec-items">✓ 5 Users</h2>
              <h2 className="sec-items" >✓ 50GB Storage</h2>
              <h2 className="sec-items">✓ Unlimited Public Projects</h2>
              <h2 className="sec-items">✓ Community Access</h2>

              <h2 className="sec-items">✓ Unlimited Private Projects</h2>
              <h2 className="sec-items">✓ Dedicated Phone Support</h2>
              <h2 className="sec-items">✓ Free Subdomain</h2>
              <h2 className="sec-items-na">⨉ Monthly Status Reports</h2>
               <button className="btn2">BUTTON</button>
           
                  </div>
            <div className="prcitems">
            <h4 className="price-type">PRO</h4>
              <p className="prc-tag">$49<sub>/month</sub></p>
            
              <h2 className="sec-items">✓ Unlimited Users</h2>
              <h2 className="sec-items" >✓ 150GB Storage</h2>
              <h2 className="sec-items">✓ Unlimited Public Projects</h2>
              <h2 className="sec-items">✓ Community Access</h2>

              <h2 className="sec-items">✓ Unlimited Private Projects</h2>
              <h2 className="sec-items">✓ Dedicated Phone Support</h2>
              <h2 className="sec-items">✓ Unlimited Free Subdomains</h2>
              <h2 className="sec-items">✓ Monthly Status Reports</h2>
               <button className="btn2">BUTTON</button>
           
       
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
