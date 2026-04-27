import React from 'react'

export default function Education(prop) {
    return (
            <div className={`container-fluid min-vh-100 d-flex justify-content-evenly row  ${prop.Mode} text-${prop.text} `} >
                <div class="card my-3 p-3 col-5" data-bs-theme={`${prop.Mode}`} >
                    <img src="https://ik.imagekit.io/syustaging/SYU_PREPROD/COVER-IMAGE_7sqwtu7bG.webp?tr=w-3840"  class="card-img-top" height="200vh" alt="Acharya Institute of Technology" />
                    <div class="card-body">
                        <h5 class="card-title">Acharya Institute of Technology</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card my-3 p-3 col-5" data-bs-theme={`${prop.Mode}`} >
                    <img src="https://ik.imagekit.io/syustaging/SYU_PREPROD/COVER-IMAGE_7sqwtu7bG.webp?tr=w-3840" width="90vh" class="card-img-top" height="200vh" alt="Acharya Institute of Technology" />
                    <div class="card-body">
                        <h5 class="card-title">Acharya Institute of Technology</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card my-3 p-3 col-5" data-bs-theme={`${prop.Mode}`} >
                    <img src="https://ik.imagekit.io/syustaging/SYU_PREPROD/COVER-IMAGE_7sqwtu7bG.webp?tr=w-3840" width="90vh" class="card-img-top" height="200vh" alt="Acharya Institute of Technology" />
                    <div class="card-body">
                        <h5 class="card-title">Acharya Institute of Technology</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card my-3 p-3 col-5" data-bs-theme={`${prop.Mode}`} >
                    <img src="https://ik.imagekit.io/syustaging/SYU_PREPROD/COVER-IMAGE_7sqwtu7bG.webp?tr=w-3840" width="90vh" class="card-img-top" height="200vh" alt="Acharya Institute of Technology" />
                    <div class="card-body">
                        <h5 class="card-title">Acharya Institute of Technology</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
    )
}
