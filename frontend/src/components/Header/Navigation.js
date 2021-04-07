import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div id="navBar" className="hide collapse d-md-block bg-white pb-3">
            <div className="container d-md-none">
            <div className="position-static mx-0 ml-md-auto my-4 mt-md-0 w-100 w-md-50 mr-4">
                  <div className="border rounded p-0">
                    <div className="form-row align-items-center flex-nowrap">
                      <div className="col-sm">
                        <div className="input-group input-group-merge input-group-borderless">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="fas fa-search"></i>
                            </div>
                          </div>

                          <input type="text" className="form-control" name="buyAddress" placeholder="Search here..." aria-label="Search here..." />
                        </div>
                      </div>

                      <div className="col-sm-auto input-group-flush pr-3">
                        <select id="exampleFormControlSelect1" className="form-control " defaultValue={{label: "All", value: 0}} style={{ border:0, textAlignLast: 'right' }}>
                          <option value="0">All</option>
                          <option>Shirts</option>
                          <option>Jeans</option>
                          <option>Electronics</option>
                          <option>Appliances</option>
                        </select>
                      </div>
                      <div className="input-group-append">
                        <Link to="/listings" type="submit" className="rounded-0 btn btn-block btn-primary">Search</Link>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="container d-md-flex align-items-center">

                <Link className="dropdown-nav-link d-block" href="#!" to="/listings">
                    Bestsellers
                </Link>
                <Link className="dropdown-nav-link ml-0 ml-md-4 mt-2 mt-md-0 d-block" href="#!" to="/listings">
                    Category 1
                </Link>
                <Link className="dropdown-nav-link ml-0 ml-md-4 mt-2 mt-md-0 d-block" href="#!" to="/listings">
                    Category 2
                </Link>
                <Link className="dropdown-nav-link ml-0 ml-md-4 mt-2 mt-md-0 d-block" href="#!" to="/listings">
                    Category 3
                </Link>
                <Link className="dropdown-nav-link ml-0 ml-md-4 mt-2 mt-md-0 d-block" href="#!" to="/listings">
                    Category 4
                </Link>
            </div>
        </div>
    );
}

export default Navigation;