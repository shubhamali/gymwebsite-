import img1 from "../../assests/services.png";

import "./services.css";

const Services = () => {
  return (

    <>
      <div className="container-fluid services">
        <div className="container">
          <div className="row gx-0">
            <div className="col-md-6">
              <div className="services_col1">
                <h1 className="main_heading">
                The best Programs We Offers For You
                </h1>
                {/******************************************************* */}
                <div className="services_main pt-3 pb-5">
                  {/************************************ */}
                <div className="form-check py-4">
                    <input
                      className="form-check-input"
                      type="checkbox" value=""
                      id="defaultCheck1"

                      />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      <h5 className="ps-1">Personal Training</h5>
                    </label>
                  </div>
                  <p>Elevate your fitness with personalized training. Tailored workouts, expert guidance, and dedicated support for a transformative journey to a healthier, fitter you.
                  </p>

                  {/***************************************************** */}
                  <div className="form-check py-4">
                    <input
                      className="form-check-input"
                      type="checkbox" value=""
                      id="defaultCheck1"

                      />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      <h5 className="ps-1">Expert Trainer</h5>
                    </label>
                  </div>
                  <p>personalized guidance, and motivational expertise to achieve your health and wellness goals effectively and efficientlyFlexile Time</p>
                  {/********************************************************* */}
                  <div className="form-check py-4">
                    <input
                      className="form-check-input"
                      type="checkbox" value=""
                      id="defaultCheck1"

                      />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      <h5 className="ps-1">Flexible Time</h5>
                    </label>
                  </div>
                  <p>Enjoy flexibility with your schedule through Flexile Time,a versatile approach to managing work and life, allowing for adaptability and balance..</p>
                  {/********************************************************** */}
                </div>
                {/****************'***************************************** */}
                <button className="btn1 btn0">Join Today</button>

                {/************************************************************ */}

              </div>



            </div>
            <div className="col-md-6">
                <div className="services_col2">
                <img src={img1} alt="" className="img-fluid"/>
              </div>
              </div>
         </div>
        </div>
     </div>

    </>
  )
}





export default Services



