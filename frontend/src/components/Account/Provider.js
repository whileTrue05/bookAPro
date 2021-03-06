import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import BookAProContext from "../Context/BookAProContextProvider";
import breadcrumbBg from "../../assets/svg/components/abstract-shapes-20.svg";
import avatar_img from "../../assets/img/160x160/img39.jpg";
import avatar_status from "../../assets/svg/illustrations/top-vendor.svg";
import no_orders_img from "../../assets/svg/components/empty-state-no-data.svg";


const User = () => {

  const userContext = useContext(BookAProContext);
  const categories = userContext.categories;
  const [providerData, setProviderData] = useState({});
  const [serviceName, setServiceName] = useState("");
  const [serviceCategory, setServiceCategory] = useState(0);
  const [servicePrice, setServicePrice] = useState(0);
  const [serviceLocation, setServiceLocation] = useState("");
  const [serviceImage, setServiceImage] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [serviceNameError, setServiceNameError] = useState("");
  const [serviceCategoryError, setServiceCategoryError] = useState("");
  const [servicePriceError, setServicePriceError] = useState("");
  const [serviceLocationError, setServiceLocationError] = useState("");
  const [serviceImageError, setServiceImageError] = useState("");
  const [serviceDescriptionError, setServiceDescriptionError] = useState("");
  const [serviceCreationError, setServiceCreationError] = useState("");
  const [globalMessage, setGlobalMessage] = useState({});

  const resetTabs = () => {
    let tabs = document.querySelectorAll('[data-toggle="tab"]');
    tabs.forEach((tab)=>{
      tab.classList.remove('active');
    })
    setGlobalMessage({});
  }

  const validateCreation = () => {
    let isValidated = true;

    if (serviceName === "") {
      setServiceNameError("Please enter a service name");
      isValidated = false;
    } else {
      setServiceNameError("");
    }

    if (serviceCategory === 0) {
      setServiceCategoryError("Please select a category");
      isValidated = false;
    } else {
      setServiceCategoryError("");
    }


    if (servicePrice === 0) {
      setServicePriceError("Please enter a price");
      isValidated = false;
    } else {
      setServicePriceError("");
    }

    if (serviceLocation === "") {
      setServiceLocationError("Please enter a location");
      isValidated = false;
    } else {
      setServiceLocationError("");
    }

    if (serviceImage === "") {
      setServiceImageError("Please enter an image url");
      isValidated = false;
    } else {
      setServiceImageError("");
    }
    
    if (serviceDescription === "") {
      setServiceDescriptionError("Please enter a service description");
      isValidated = false;
    } else {
      setServiceDescriptionError("");
    }

    return isValidated;
  }

  const submitCreateForm = (event) => {
    event.preventDefault();
    if(validateCreation()){
      fetch('https://whiletrue-bookapro.herokuapp.com:8878/createService', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: serviceName,
          description: serviceDescription,
          image: serviceImage,
          location: serviceLocation,
          pricePerHour: servicePrice,
          categoryId: serviceCategory,
          userId: userContext.user.userId
        })
      }).then(function(res) {
        return res.json();
      }).then(function(res){
        if(res.result){
            setServiceCreationError("")
            fetchProviderData();
            document.getElementById('list-services-tab').click();
            setGlobalMessage({message: res.message, type: 'success'})
            event.target.reset();
        }else{
            setServiceCreationError(res.message.message)
        }
      });
    }
  }

  const logout = () => {
    localStorage.setItem('token', '');
    userContext.setUser([]);
    window.location.reload();
  }

  useEffect(() => {
    fetchProviderData();
  }, []);

  const fetchProviderData = () => {
    fetch("https://whiletrue-bookapro.herokuapp.com:8878/providerData?userId="+userContext.user.userId)
    .then((res) => res.json())
    .then((response) => {
      setProviderData(response[0]);

    })
    .catch((err) => console.log(`Error ${err}`));
  }

  return (
    <div>
      <div class="bg-dark" style={{ backgroundImage: 'url(' + breadcrumbBg + ')' }}>
        <div class="container space-1 space-top-lg-4 space-bottom-lg-3">
          <div class="row align-items-center">
            <div class="col">
              <div class="d-none d-lg-block">
                <h1 class="h2 text-white">Your Account</h1>
              </div>

            </div>

            <div class="col-auto">
              <div class="d-none d-lg-block">
                <a class="btn btn-sm btn-soft-light" href="#!" onClick={logout}>Log out</a>
              </div>

              <button type="button" class="navbar-toggler btn btn-icon btn-sm rounde-circle d-lg-none"
                aria-label="Toggle navigation"
                aria-expanded="false"
                aria-controls="sidebarNav"
                data-toggle="collapse"
                data-target="#sidebarNav">
                <span class="navbar-toggler-default">
                  <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M17.4,6.2H0.6C0.3,6.2,0,5.9,0,5.5V4.1c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,5.9,17.7,6.2,17.4,6.2z M17.4,14.1H0.6c-0.3,0-0.6-0.3-0.6-0.7V12c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,13.7,17.7,14.1,17.4,14.1z" />
                  </svg>
                </span>
                <span class="navbar-toggler-toggled">
                  <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="container space-1 space-top-lg-0 space-bottom-lg-2 mt-lg-n10">
        <div class="row">
          <div class="col-lg-3">
            <div class="navbar-expand-lg navbar-expand-lg-collapse-block navbar-light">
              <div id="sidebarNav" class="collapse navbar-collapse navbar-vertical">
                <div class="card mb-5">
                  <div class="card-body">
                    <div class="d-none d-lg-block text-center mb-5">
                      <div class="avatar avatar-xxl avatar-circle mb-3">
                        <img class="avatar-img" src={avatar_img} alt="Image Description" />
                        <img class="avatar-status avatar-lg-status" src={avatar_status} alt="Image Description" data-toggle="tooltip" data-placement="top" title="Verified user" />
                      </div>

                      <h4 class="card-title">{userContext.user.fname} {userContext.user.lname}</h4>
                      <p class="card-text font-size-1">{userContext.user.email}</p>
                    </div>



                    <h6 class="text-cap small">Manage</h6>

                    <ul class="nav nav-sub nav-sm nav-tabs nav-list-y-2 mb-4">
                      <li class="nav-item">
                        <a onClick={resetTabs} class="nav-link" id="all-orders-tab" data-toggle="tab" href="#all-orders" role="tab">
                          <i class="fas fa-shopping-basket nav-icon"></i> Your reservations
                          </a>
                      </li>

                    </ul>

                    <h6 class="text-cap small">Services</h6>

                    <ul class="nav nav-sub nav-sm nav-tabs nav-list-y-2 mb-4">

                      <li class="nav-item">
                        <a onClick={resetTabs} class="nav-link" id="list-services-tab" data-toggle="tab" href="#list-services" role="tab">
                          <i class="fas fa-list nav-icon"></i> List services
                          </a>
                      </li>

                      <li class="nav-item">
                        <a onClick={resetTabs} class="nav-link" id="create-service-tab" data-toggle="tab" href="#create-service" role="tab">
                          <i class="fas fa-plus-circle nav-icon"></i> Create service
                          </a>
                      </li>

                    </ul>



                    <div class="d-lg-none">
                      <div class="dropdown-divider"></div>

                      <ul class="nav nav-sub nav-sm nav-tabs nav-list-y-2">
                        <li class="nav-item">
                          <a class="nav-link text-primary" href="#">
                            <i class="fas fa-sign-out-alt nav-icon"></i> Log out
                            </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-9">
            <div class="card">

              <div class="card-body">
              {globalMessage.message &&
                              <div className={"alert alert-soft-"+globalMessage.type+"  mt-2"} role="alert">
                                {globalMessage.message}
                              </div>
                            }
                <div class="tab-content" id="editUserTabContent">
                  <div class="tab-pane fade show active" id="all-orders" role="tabpanel" aria-labelledby="all-orders-tab">
                    {Object.keys(providerData).length && providerData.Reservations.length > 0
                    ? <ul class="list-unstyled">
                        {providerData.Reservations.map((reservation) => {
                          let total = 0;
                          const reservationAddress = reservation.Address;
                          const reservationUser = reservationAddress.User;
                          const reservationItems = reservation.Items;


                          reservationItems.map((item)=>{
                            total += item.total_price;
                          })
                        return (
                        <li class="card card-bordered shadow-none mb-3">
                          <div class="card-body">
                            <div class="row">

                              <div class="col-6 col-md mb-3 mb-md-0">
                                <small class="text-cap">Total</small>
                                <small class="text-dark font-weight-bold">${total}/hr</small>
                              </div>
                              <div class="col-6 col-md mb-3 mb-md-0">
                                <small class="text-cap">Customer</small>
                                <small class="text-dark font-weight-bold">{reservationUser.fname} {reservationUser.lname}</small>
                              </div>
                              <div class="col-6 col-md">
                                <small class="text-cap">Order no.</small>
                                <small class="text-dark font-weight-bold">{reservation.reservationId}</small>
                              </div>
                              <div class="col-6 col-md">
                                <small class="text-cap">Booking date:</small>
                                <small class="text-dark font-weight-bold">{reservation.booking_date}</small>
                              </div>
                            </div>

                            <hr />

                            <div class="row">
                              <div class="col-md-8">
                                
                                
                              <div class="row mx-n1">
                                  {reservationItems.map((item)=>{
                                    const itemService = providerData.Services.filter(obj => {return obj.serviceId == item.reservationServiceId})[0];
                                    return (
                                  <div class="col px-1">
                                    <img class="img-fluid" style={{maxHeight: '150px', minHeight: '150px', objectFit: 'cover'}} src={itemService.image} alt={itemService.name} />
                                  </div>
                                 )
                                  })}
                                   </div>
                                
                              </div>

                              <div class="col-md-4">
                              <a class="btn btn-sm btn-block btn-white" href="#">
                                <i class="fas fa-eye fa-sm mr-2"></i> View</a>
                              <a class="btn btn-sm btn-block btn-danger" href="#">
                                <i class="fas fa-times fa-sm mr-2"></i> Refuse</a>
                                <a class="btn btn-sm btn-block btn-success" href="#">
                                <i class="fas fa-check fa-sm mr-2"></i> Accept</a>
                              </div>
                            </div>
                          </div>
                        </li>
                        )
                        })}
                      </ul>
                    : <div class="text-center space-1">
                    <img class="avatar avatar-xl mb-3" src={no_orders_img} alt="Image Description" />
                    <p class="card-text">No data to show</p>
                    <a class="btn btn-sm btn-white" href="#">Start Shopping</a>
                  </div>
                    }


                  </div>

                  <div class="tab-pane fade show" id="create-service" role="tabpanel" aria-labelledby="create-service-tab">

                    <div class="text-center space-1">
                      <form onSubmit={submitCreateForm}>


                        <div class="row form-group">
                          <label for="serviceName" class="col-sm-3 col-form-label input-label">Service name</label>

                          <div class="col-sm-9">
                            <div class="input-group align-items-center" >
                              <input type="text" class="js-masked-input form-control" name="service_name" id="serviceName" placeholder="Be specific" onChange={(event) => {
                                setServiceName(event.target.value);
                              }} />

                              <div class="input-group-append">
                                <select class="js-custom-select custom-select dropdown-toggle" name="service_category" tabindex="-1" aria-hidden="true" onChange={(event) => {
                                  setServiceCategory(event.target.value)
                                }}>
                                  <option value="0" selected>Select category</option>
                                  {categories.map((item) => {
                                    return <option value={item.categoryId}>{item.name}</option>
                                  })}
                                </select>
                              </div>

                            </div>
                            {serviceNameError &&
                              <div class="alert alert-soft-danger mt-2" role="alert">
                                {serviceNameError}
                              </div>
                            }
                            {serviceCategoryError &&
                              <div class="alert alert-soft-danger  mt-2" role="alert">
                                {serviceCategoryError}
                              </div>
                            }
                          </div>
                        </div>

                        <div class="row form-group">
                          <label for="priceLabel" class="col-sm-3 col-form-label input-label">Details</label>
                          <div class="col-sm-9">
                            <div class="input-group">
                              <input type="number" min="1" step="1" class="form-control" name="service_price" id="priceLabel" placeholder="$/hr" onChange={(event) => {
                                setServicePrice(event.target.value)
                              }} />
                              <input type="text" class="form-control" name="service_location" id="locationLabel" placeholder="Location" onChange={(event) => {
                                setServiceLocation(event.target.value)
                              }} />
                            </div>
                            {servicePriceError &&
                              <div class="alert alert-soft-danger mt-2" role="alert">
                                {servicePriceError}
                              </div>
                            }
                            {serviceLocationError &&
                              <div class="alert alert-soft-danger mt-2" role="alert">
                                {serviceLocationError}
                              </div>
                            }
                          </div>
                        </div>

                        <div class="row form-group">
                          <label for="imageLabel" class="col-sm-3 col-form-label input-label">Image</label>

                          <div class="col-sm-9">
                            <input type="text" class="form-control" name="service_image" id="imageLabel" placeholder="Image URL" onChange={(event) => {
                              setServiceImage(event.target.value)
                            }} />
                            {serviceImageError &&
                              <div class="alert alert-soft-danger mt-2" role="alert">
                                {serviceImageError}
                              </div>
                            }
                          </div>
                        </div>



                        <div class="row form-group">
                          <label class="col-sm-3 col-form-label input-label" for="serviceDescription">Description</label>

                          <div class="col-sm-9">
                            <textarea rows="10" className="form-control" name="service_description" id="serviceDescription" placeholder="Describe your service..." onChange={(event) => {
                              setServiceDescription(event.target.value )
                            }}></textarea>
                            {serviceDescriptionError &&
                              <div class="alert alert-soft-danger mt-2" role="alert">
                                {serviceDescriptionError}
                              </div>
                            }
                          </div>
                        </div>
                        <div className="row align-items-center mb-5">
                          <div className="col-12 col-md-9">
                            {serviceCreationError && 
                                <div class="alert alert-soft-danger" role="alert">
                                    {serviceCreationError}
                                </div>
                            }
                            
                          </div>
                          <div className="col-12 col-md-3 text-sm-right">
                            <button type="submit" className="btn btn-primary transition-3d-hover">Create</button>
                          </div>
                        </div>

                      </form>
                    </div>


                  </div>
                  <div class="tab-pane fade show" id="list-services" role="tabpanel" aria-labelledby="list-services-tab">
                    {Object.keys(providerData).length && providerData.Services.length > 0
                    ? <ul class="list-unstyled">
                      {providerData.Services.map((service)=> {
                        return <li class="card card-bordered shadow-none mb-3">
                          <div class="card-body">
                            <div class="row">
                              <div className="col-12 mb-2">
                                <h3>{service.name}</h3>
                                <p>{service.description}</p>
                              </div>
                              <div class="col-6 col-md mb-3 mb-md-0">
                                <small class="text-cap">Price</small>
                                <small class="text-dark font-weight-bold">${service.pricePerHour}/hr</small>
                              </div>
                              <div class="col-6 col-md mb-3 mb-md-0">
                                <small class="text-cap">Location</small>
                                <small class="text-dark font-weight-bold">{service.location}</small>
                              </div>
                              <div class="col-6 col-md">
                                <small class="text-cap">Category</small>
                                <small class="text-dark font-weight-bold">{service.categoryId}</small>
                              </div>
                              <div class="col-6 col-md">
                                <small class="text-cap">Status</small>
                                {service.status == 1
                                ? <small class="text-success font-weight-bold">Active</small>
                                : <small class="text-danger font-weight-bold">Inactive</small>
                                }
                                
                              </div>
                            </div>
                            <hr />
                            <div class="row">
                              <div class="col-md-8">
                                <div class="row mx-n1">
                                  <div class="col px-1">
                                    <img class="img-fluid" src={service.image} alt={service.name} />
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-4">
                              {service.status == 1
                                ? <a class="btn btn-sm btn-block btn-danger mb-2" href="#!" onClick={(event)=>{
                                  setGlobalMessage({message: 'Service has active orders.', type: 'danger'})
                                }}><i class="fas fa-times fa-sm mr-2"></i> Disable</a>
                                : <a class="btn btn-sm btn-block btn-success mb-2" href="#!"><i class="fas fa-check fa-sm mr-2"></i> Enable</a>
                                }
                                
                              </div>
                            </div>
                          </div>
                        </li>
                    })}
                      </ul>
                    : <div class="text-center space-1">
                        <img class="avatar avatar-xl mb-3" src={no_orders_img} alt="Image Description" />
                        <p class="card-text">No service to show</p>
                        <a class="btn btn-sm btn-white" href="#!" data-toggle="tab" href="#create-service" role="tab">Create New</a>
                      </div>
                    }
                    
                    


                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User;