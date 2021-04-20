import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import BookAProContext from "../Context/BookAProContextProvider";
import breadcrumbBg from "../../assets/svg/components/abstract-shapes-20.svg";
import avatar_img from "../../assets/img/160x160/img39.jpg";
import no_orders_img from "../../assets/svg/components/empty-state-no-data.svg";


const User = () => {

    const userContext = useContext(BookAProContext);
    const categories = userContext.categories;
    const services = userContext.services;
    const userData = userContext.userData;

    console.log(userData,'udddd');

    const logout = () => {
        localStorage.setItem('token', '');
        userContext.setUser([]);
        window.location.reload();
    }


    return (
        <div>

            <div class="bg-dark" style={{ backgroundImage: 'url(' + breadcrumbBg + ')' }}>
                <div class="container space-1 space-top-lg-4 space-bottom-lg-3">
                    <div class="row align-items-center">
                        <div class="col">
                            <div class="d-none d-lg-block">
                                <h1 class="h2 text-white">Your orders</h1>
                            </div>

                            <ol class="breadcrumb breadcrumb-light breadcrumb-no-gutter mb-0">
                                <li class="breadcrumb-item">Account</li>
                                <li class="breadcrumb-item active" aria-current="page">Your orders</li>
                            </ol>
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
                                            </div>

                                            <h4 class="card-title">{userContext.user.fname} {userContext.user.lname}</h4>
                                            <p class="card-text font-size-1">{userContext.user.email}</p>
                                        </div>



                                        <h6 class="text-cap small">Shopping</h6>

                                        <ul class="nav nav-sub nav-sm nav-tabs nav-list-y-2 mb-4">
                                            <li class="nav-item">
                                                <a class="nav-link active" href="account-orders.html">
                                                    <i class="fas fa-shopping-basket nav-icon"></i> Your orders
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

                                <div class="tab-content" id="editUserTabContent">
                                    <div class="tab-pane fade show active" id="all-orders" role="tabpanel" aria-labelledby="all-orders-tab">
                                    
                                    {userData.length > 0 && userData[0].Address[0]
                    ? <ul class="list-unstyled">
                        {userData[0].Address[0].Reservations && userData[0].Address[0].Reservations.map((reservation) => {
                          let total = 0;
                          const reservationAddress = userData.Address;
                          const reservationUser = userContext.user;
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
                                    const itemService = services.filter(obj => {return obj.serviceId == item.reservationServiceId})[0];
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
                                <i class="fas fa-times fa-sm mr-2"></i> Cancel</a>
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
                    <Link to="/" class="btn btn-sm btn-white" href="#!">Start Shopping</Link>
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