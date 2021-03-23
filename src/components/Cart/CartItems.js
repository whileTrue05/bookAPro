import { Link } from 'react-router-dom';
import productImage from '../../assets/img/320x320/img2.jpg';

const CartItems = () => {
    return (
<div class="container space-2">
  <div class="d-flex justify-content-between align-items-end border-bottom pb-3 mb-7">
    <h1 class="h3 mb-0">Shopping cart</h1>
    <span>2 items</span>
  </div>

  <form>
    <div class="border-bottom pb-5 mb-5">
      <div class="media">
        <div class="max-w-15rem w-100 mr-3">
          <img class="img-fluid" src={productImage} alt="Image Description" />
        </div>
        <div class="media-body">
          <div class="row">
            <div class="col-md-7 mb-3 mb-md-0">
              <a class="h5 d-block" href="#">Originals national backpack</a>

              <div class="d-block d-md-none">
                <span class="h5 d-block mb-1">$29.99</span>
              </div>

              <div class="text-body font-size-1 mb-1">
                <span>Gender:</span>
                <span>Men</span>
              </div>
              <div class="text-body font-size-1 mb-1">
                <span>Color:</span>
                <span>Grey</span>
              </div>
              <div class="text-body font-size-1 mb-1">
                <span>Size:</span>
                <span>One size</span>
                <a class="link-underline ml-2" href="javascript:;">Edit</a>
              </div>
            </div>

            <div class="col-md-3">
              <div class="row">
                <div class="col-auto">
                  <select class="custom-select custom-select-sm w-auto mb-3">
                    <option value="quantity1">1</option>
                    <option value="quantity2">2</option>
                    <option value="quantity3">3</option>
                    <option value="quantity4">4</option>
                    <option value="quantity5">5</option>
                    <option value="quantity6">6</option>
                    <option value="quantity7">7</option>
                    <option value="quantity8">8</option>
                    <option value="quantity9">9</option>
                    <option value="quantity10">10</option>
                  </select>
                </div>

                <div class="col-auto">
                  <a class="d-block text-body font-size-1 mb-1" href="javascript:;">
                    <i class="far fa-trash-alt text-hover-primary mr-1"></i>
                    <span class="font-size-1 text-hover-primary">Remove</span>
                  </a>

                  <a class="d-block text-body font-size-1" href="javascript:;">
                    <i class="far fa-heart text-hover-primary mr-1"></i>
                    <span class="font-size-1 text-hover-primary">Save for later</span>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-4 col-md-2 d-none d-md-inline-block text-right">
              <span class="h5 d-block mb-1">$29.99</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="media mb-5 mb-md-10">
      <div class="max-w-15rem w-100 mr-3">
        <img class="img-fluid" src={productImage} alt="Image Description" />
      </div>
      <div class="media-body">
        <div class="row">
          <div class="col-md-7 mb-3 mb-md-0">
            <a class="h5 d-block" href="#">Vans large image t-shirt</a>

            <div class="d-block d-md-none">
              <span class="h5 d-block mb-1">$29.99</span>
            </div>

            <div class="text-body font-size-1 mb-1">
              <span>Gender:</span>
              <span>Women</span>
            </div>
            <div class="text-body font-size-1 mb-1">
              <span>Color:</span>
              <span>Core Black / Carbon</span>
            </div>
            <div class="text-body font-size-1 mb-1">
              <span>Size:</span>
              <span>SM</span>
              <a class="link-underline ml-2" href="javascript:;">Edit</a>
            </div>
          </div>

          <div class="col-md-3">
            <div class="row">
              <div class="col-auto">
                <select class="custom-select custom-select-sm w-auto mb-3">
                  <option value="quantity1">1</option>
                  <option value="quantity2">2</option>
                  <option value="quantity3">3</option>
                  <option value="quantity4">4</option>
                  <option value="quantity5">5</option>
                  <option value="quantity6">6</option>
                  <option value="quantity7">7</option>
                  <option value="quantity8">8</option>
                  <option value="quantity9">9</option>
                  <option value="quantity10">10</option>
                </select>
              </div>

              <div class="col-auto">
                <a class="d-block text-body font-size-1 mb-1" href="javascript:;">
                  <i class="far fa-trash-alt text-hover-primary mr-1"></i>
                  <span class="font-size-1 text-hover-primary">Remove</span>
                </a>

                <a class="d-block text-body font-size-1" href="javascript:;">
                  <i class="far fa-heart text-hover-primary mr-1"></i>
                  <span class="font-size-1 text-hover-primary">Save for later</span>
                </a>
              </div>
            </div>
          </div>

          <div class="col-4 col-md-2 d-none d-md-inline-block text-right">
            <span class="h5 d-block mb-1">$43.99</span>
          </div>
        </div>
      </div>
    </div>


    <div class="d-sm-flex justify-content-start">
      <Link to="/listings" class="font-weight-bold" href="#">
        <i class="fas fa-angle-left fa-xs mr-1"></i>
        Continue shopping
      </Link>
    </div>
  </form>
</div>

)
}
export default CartItems;