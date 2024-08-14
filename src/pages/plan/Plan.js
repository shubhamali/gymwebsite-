import "./bestplan.css";
import tick from "../../assests/tick.png";


const Plan=() =>{
  return (
    <>
      <div className="container-fluid BestPlan">
        <h1 className="main_heading">Choose The Best Plan</h1>
        <div className="conatainer pt-5">
          <div className="row align-items-center">
            <div className="col-4">
              <div className="bestplan_col1">
                <h5>discover</h5>
                <h1 className="pt-4">$99 <span> /Per Month</span>
                </h1>
                <div className="bestplan_detail py-3">
                  <p>
                    <img src={tick} alt="" /> 5 Classes Per Month
                  </p>
                  <p>
                    <img src={tick} alt="" /> 4 group class monthly
                  </p>
                  <p>
                    <img src={tick} alt="" /> Online class access
                  </p>
                  <p>
                    <img src={tick} alt="" /> E-book fitness guide
                  </p>

                </div>
                <button className="btn3">Choose Plan</button>
              </div>
            </div>
      {/********************************** ***********************************************************/}
            <div className="col-4">
              <div className="bestplan_col1 bestplan_col2">
                <h3 className="BestPlan_h3">Most Popular</h3>
                <h5>enterprise</h5>
                <h1 className="pt-4">$299 <span> /Per Month</span>
                </h1>
                <div className="bestplan_detail py-3">
                  <p>
                    <img src={tick} alt="" /> 10 Classes per Month
                  </p>
                  <p>
                    <img src={tick} alt="" /> 8 group class monthly
                  </p>
                  <p>
                    <img src={tick} alt="" /> Online class access
                  </p>
                  <p>
                    <img src={tick} alt="" /> E-book fitness guide
                  </p>
                  <p>
                    <img src={tick} alt="" />7 Extra fitness training
                  </p>
                </div>
                <button className="btn4">Choose Plan</button>
              </div>
            </div>
  {/************************************************************************************************************************* */}
             <div className="col-4">
              <div className="bestplan_col1">
                <h5>professional</h5>
                <h1 className="pt-4">$199<span> /Per Month</span>
                </h1>
                <div className="bestplan_detail py-3">
                  <p>
                    <img src={tick} alt="" /> 7 Classes per Month
                  </p>
                  <p>
                    <img src={tick} alt="" /> 6 group class monthly
                  </p>
                  <p>
                    <img src={tick} alt="" /> Online class access
                  </p>
                  <p>
                    <img src={tick} alt="" />E-book fitness guide
                  </p>

                </div>
                <button className="btn3">Choose Plan</button>
              </div>
            </div>


        </div>
      </div>



      </div>


    </>
  )
}

export default Plan;