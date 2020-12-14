import React from "react"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

class Logos extends React.Component {

componentDidMount() {
AOS.init();
}
componentDidUpdate() {
AOS.refresh();
}
render () {

  return (

<section className="content_31 bg-dark pb-5 text-center color-white mb-3 mt-30 p-5">
  <div className="container px-xl-0">
    <div className="row justify-content-center">

      <div className="col-lg-3 col-md-5 col-sm-6 aos-init aos-animate mb-3" data-aos-duration="600" data-aos="fade-down" data-aos-delay="0">
        <div className="mx-auto mb-30 mw-270 h-160 d-flex justify-content-center align-items-center radius6 block">
          <a href="https://beta.fitz.ms"><img src="https://fitz-cms-images.s3.eu-west-2.amazonaws.com/fitztht.png" alt="Fitzwilliam Museum" width="150"/></a>
        </div>
      </div>

      <div className="col-lg-3 col-md-5 col-sm-6 aos-init aos-animate mb-3" data-aos-duration="600" data-aos="fade-down" data-aos-delay="450">
        <div className="mx-auto mb-30 mw-270 h-160 d-flex justify-content-center align-items-center radius6 block">
          <a href="https://cam.ac.uk"><img src="https://fitz-cms-images.s3.eu-west-2.amazonaws.com/reversecam.png" alt="FitzVirtual Logo" width="300" className="pt-3"/></a>
        </div>
      </div>


    </div>
  </div>
</section>

)}
}
export default Logos
