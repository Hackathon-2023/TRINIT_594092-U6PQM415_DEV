import React from "react";
import "./Blogs.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Blogs() {
  return (
    <React.Fragment>
      <div class="container">
        <div class="row">
          <div class="col"><div className="card">
                <img
                  src="https://www.mytechmag.com/wp-content/uploads/2020/03/Modern-Farming-Technology.jpg"
                  className="card-img-top"
                  alt="..."
                  height="200px"
                />
                <div className="card-body">
                  <h5 className="card-title"> Agricultural Technology.</h5>
                  <p className="card-text">
                    Modern farms and agricultural operations work far
                    differently than those a few decades ago, primarily because
                    of advancements in technology, including sensors, devices,
                    machines, and information technology. Today’s agriculture
                    routinely uses sophisticated technologies such as robots,
                    temperature and moisture sensors, aerial images, and GPS
                    technology. These advanced devices and precision agriculture
                    and robotic systems allow businesses to be more profitable,
                    efficient, safer, and more environmentally friendly.
                  </p>
                  <a
                    href="https://www.nifa.usda.gov/topics/agriculture-technology"
                    className="btn btn-primary" style={{textAlign:"center"}}
                  >
                    Click Here to know more
                  </a>
                </div>
              </div></div>
          <div class="col"><div className="card">
                <img
                  src="https://www.ecoffshoots.org/wp-content/uploads/2014/01/ECO-School-Visit-4.jpg"
                  className="card-img-top"
                  alt="..."
                  height="200px"
                />
                <div className="card-body">
                  <h5 className="card-title">Farmer Education</h5>
                  <p className="card-text">
                    Farmers require ongoing education to stay aware of
                    fast-moving developments in technology, science, business
                    management, and an array of other skills and fields that
                    affect agricultural operations. NIFA initiatives increase
                    farmers’ knowledge in these areas and help them adopt
                    practices that are profitable, environmentally sound, and
                    contribute to quality of life
                  </p>
                  <a
                    href="https://www.nifa.usda.gov/topics/farmer-education"
                    className="btn btn-primary"
                  >
                    Click Here to know more
                  </a>
                </div>
              </div></div>
        </div>
        <div class="row">
          <div class="col"><div className="card">
                <img
                  src="https://m.media-amazon.com/images/I/61L7ZMJUUvL.jpg"
                  className="card-img-top"
                  alt="..."
                  height="200px"
                />
                <div className="card-body">
                  <h5 className="card-title">Schemes and Programs</h5>
                  <p className="card-text">
                    Know some best oppourtunities, schemes and programs launched
                    by the state and central governments.
                  </p>
                  <a
                    href="https://pib.gov.in/Pressreleaseshare.aspx?PRID=1496069#:~:text=The%20Government%20has%20rolled%20out,PMFBY)%20and%20Interest%20Subvention%20Scheme."
                    className="btn btn-primary"
                  >
                    Click Here to know more
                  </a>
                </div>
              </div>
            </div>
          <div class="col"><div className="card">
                <img
                  src="https://play-lh.googleusercontent.com/gmCHtumHh3mTak1aEGbG16nmGH_9AlUFEuopwhcFfmSfZ6fC6qCO84LKk9pPaos4xW8"
                  className="card-img-top"
                  alt="..."
                  height="200px"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Know Best Crop in Your Area to Grow
                  </h5>
                  <p className="card-text">
                    Know which crops is suitable for your area.
                  </p>
                  <a
                    href="D:\Coding\WebDev\farmer\src\component\CropsGrown.js"
                    className="btn btn-primary"
                  >
                    Click Here to know more
                  </a>
                </div>
              </div></div>
          <div class="col"><div className="card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzwoWe2_Y5zEHfTnTKX-WbxtyPb9r_xV0BbQ&usqp=CAU"
                  className="card-img-top"
                  alt="..."
                  height="200px"
                />
                <div className="card-body">
                  <h5 className="card-title">Chat with Expert</h5>
                  <p className="card-text">
                    If you have any query regarding the farming and agriculture
                    you can contact to our experts who can guide you many
                    government oppourtunities for horticulture.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Click Here to know more
                  </a>
                </div>
              </div></div>
        </div>
      </div>

      {/* <div className="CardBlock">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="card">
                <img
                  src="https://www.mytechmag.com/wp-content/uploads/2020/03/Modern-Farming-Technology.jpg"
                  className="card-img-top"
                  alt="..."
                  height="200px"
                />
                <div className="card-body">
                  <h5 className="card-title"> Agricultural Technology.</h5>
                  <p className="card-text">
                    Modern farms and agricultural operations work far
                    differently than those a few decades ago, primarily because
                    of advancements in technology, including sensors, devices,
                    machines, and information technology. Today’s agriculture
                    routinely uses sophisticated technologies such as robots,
                    temperature and moisture sensors, aerial images, and GPS
                    technology. These advanced devices and precision agriculture
                    and robotic systems allow businesses to be more profitable,
                    efficient, safer, and more environmentally friendly.
                  </p>
                  <a
                    href="https://www.nifa.usda.gov/topics/agriculture-technology"
                    className="btn btn-primary"
                  >
                    Click Here to know more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              
            </div>
            <div className="col-sm">
              
            </div>
            <div className="col-sm">
              
            </div>
            <div className="col-sm">
              
            </div>
          </div>
        </div>
      </div> */}
    </React.Fragment>
  );
}

export default Blogs;
