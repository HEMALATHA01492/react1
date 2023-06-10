import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const  App=() => {
  return (
    <div>
    <h1 class="text-center m-4">Bootstrap Cards</h1>
    <div class="container p-5 m-5 bg-primary rounded">
    <div class="row d-flex p-2">
      {/* First Card */}

      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0 d-flex">
          <div class="card-body">
            <h5 class="text-muted text-center">FREE</h5>
            <h4 class="text-center">$0/month</h4>
            <hr></hr>
            <ul class="p-2 m-3">
              <li class="p-2"><b>Single User</b></li>
              <li class="p-2"><b>5GB Storage</b></li>
              <li class="p-2"><b>Unlimited Public Projects</b></li>
              <li class="p-2"><b>Community Access</b></li>
              <li class="p-2 text-muted">Unlimited Private Projects</li>
              <li class="p-2 text-muted">Dedicated Phone Support</li>
              <li class="p-2 text-muted">Free Subdomain</li>
              <li class="p-2 text-muted">Monthly Status Reports</li>
           </ul>
            <div class="d-grid">
              <button type="button" class="btn btn-primary btn-lg">Subscribe</button>
            </div>
          </div>

        </div>

      </div>
      {/* Second Card */}

      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0 d-flex">
          <div class="card-body">
            <h5 class="text-muted text-center">PLUS</h5>
            <h4 class="text-center">$9/month</h4>
            <hr></hr>
            <ul class="p-2 m-3">
              <li class="p-2"><b>5 User</b></li>
              <li class="p-2"><b>50GB Storage</b></li>
              <li class="p-2"><b>Unlimited Public Projects</b></li>
              <li class="p-2"><b>Community Access</b></li>
              <li class="p-2"><b>Unlimited Private Projects</b></li>
              <li class="p-2"><b>Dedicated Phone Support</b></li>
              <li class="p-2"><b>Free Subdomain</b></li>
              <li class="p-2 text-muted">Monthly Status Reports</li>
           </ul>
            <div class="d-grid">
              <button type="button" class="btn btn-primary btn-lg">Subscribe</button>

            </div>
          </div>

        </div>

      </div>
{/* Third Card */}
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0 d-flex">
          <div class="card-body">
            <h5 class="text-muted text-center">PRO</h5>
            <h4 class="text-center">$49/month</h4>
            <hr></hr>
            <ul class="p-2 m-3">
              <li class="p-2"><b><em><strong>Unlimited</strong></em> User</b></li>
              <li class="p-2"><b>150GB Storage</b></li>
              <li class="p-2"><b>Unlimited Public Projects</b></li>
              <li class="p-2"><b>Community Access</b></li>
              <li class="p-2"><b>Unlimited Private Projects</b></li>
              <li class="p-2"><b>Dedicated Phone Support</b></li>
              <li class="p-2"><b><em><strong>Unlimited</strong></em> Free Subdomain</b></li>
              <li class="p-2"><b>Monthly Status Reports</b></li>
           </ul>
            <div class="d-grid">
              <button type="button" class="btn btn-primary btn-lg">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
   </div>
  )
}

export default App;




