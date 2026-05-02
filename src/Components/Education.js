import React from 'react'

export default function Education(prop) {
    return (
            <div className={`container-fluid min-vh-100 justify-content-evenly ${prop.Mode} text-${prop.text} d-flex flex-wrap `} >
                <div class="card align-content-center my-3 p-3 " data-bs-theme={`${prop.Mode}`} >
                    <img src="https://ik.imagekit.io/syustaging/SYU_PREPROD/COVER-IMAGE_7sqwtu7bG.webp?tr=w-3840"  class="card-img-top" height="200vh" alt="Acharya Institute of Technology" />
                    <div class="card-body">
                        <h5 class="card-title">Acharya Institute of Technology, Bangoluru</h5>
                            <p class="card-text">Master of Computer Applications</p>
                            <p class="card-text "><small>2025-2026</small></p>
                    </div>
                </div>
                <div class="card align-content-center my-3 p-3 " data-bs-theme={`${prop.Mode}`} >
                    <img src="https://lvdcollege.com/wp-content/uploads/2025/05/COLLEGE-FRONT-wp-1320x600.jpg" width="90vh" class="card-img-top" height="200vh" alt="Acharya Institute of Technology" />
                    <div class="card-body">
                        <h5 class="card-title">LAXMI VENKATESH DESAI COLLEGE, RAICHUR</h5>
                        <p class="card-text">Bachelor of Computer Applications</p>
                        <p class="card-text"><small class="text-body-secondary">2022-2025</small></p>
                    </div>
                </div>
                <div class="card align-content-center my-3 p-3" data-bs-theme={`${prop.Mode}`} >
                    <img src="" width="90vh" class="card-img-top" height="200vh" alt="Sri Venkateshwara College ( Optime Academy)" />
                    <div class="card-body">
                        <h5 class="card-title">Sri Venkateshwara College ( Optime Academy)</h5>
                        <p class="card-text">Commerce</p>
                        <p class="card-text"><small class="text-body-secondary">2020-2022</small></p>
                    </div>
                </div>
                <div class="card align-content-center my-3 p-3" data-bs-theme={`${prop.Mode}`} >
                    <img src="" width="90vh" class="card-img-top" height="200vh" alt="Blessed Alphonse school" />
                    <div class="card-body">
                        <h5 class="card-title">Blessed Alphonse school,Shaktinag</h5>
                        <p class="card-text">SSLC Board</p>
                        <p class="card-text"><small class="text-body-secondary">-2020</small></p>
                    </div>
                </div>
            </div>
    )
}
