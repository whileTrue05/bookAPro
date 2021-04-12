
import SubHero from '../components/SubHero/SubHero';
import catImg from '../assets/svg/components/abstract-shapes-13.svg';


const AllCategories = () => {


  return (
    <div>
      <SubHero title="Our Categories" subtitle="Browse through our categories" />
      <div class="container space-2">


        <div class="row mb-5">
          <div aria-label="cat-item" class="cat-item col-lg-4 mb-3 mb-sm-5">
            <a class="card h-100 transition-3d-hover" href="#">
              <div class="position-relative">
                <img aria-label="cat-item-img" class="card-img-top" src={catImg} alt="SVG" />
                <div class="position-absolute top-0 left-0 pt-3 pl-3">
                  <span class="badge badge-primary badge-pill">Bestseller</span>
                </div>
              </div>
              <div class="card-body pb-0">
                <h4>Objects and dimensions</h4>
                <p class="text-body">Cute characters with big hearts for your mobile and web projects.</p>
              </div>
              <div class="card-footer border-0 pt-0">
                <span class="font-size-1 text-primary font-weight-bold">Learn More <i class="fas fa-angle-right fa-sm ml-1"></i></span>
              </div>
            </a>
          </div>

          <div aria-label="cat-item" class="cat-item col-lg-4 mb-3 mb-sm-5">
            <a class="card h-100 transition-3d-hover" href="#">
              <div class="position-relative">
              <img aria-label="cat-item-img" class="card-img-top" src={catImg} alt="SVG" />

              </div>
              <div class="card-body pb-0">
                <h4>Objects and dimensions</h4>
                <p class="text-body">Cute characters with big hearts for your mobile and web projects.</p>
              </div>
              <div class="card-footer border-0 pt-0">
                <span class="font-size-1 text-primary font-weight-bold">Learn More <i class="fas fa-angle-right fa-sm ml-1"></i></span>
              </div>
            </a>
          </div>

          <div aria-label="cat-item" class="cat-item col-lg-4 mb-3 mb-sm-5">
            <a class="card h-100 transition-3d-hover" href="#">
              <div class="position-relative">
              <img aria-label="cat-item-img" class="card-img-top" src={catImg} alt="SVG" />
              </div>
              <div class="card-body pb-0">
                <h4>Objects and dimensions</h4>
                <p class="text-body">Cute characters with big hearts for your mobile and web projects.</p>
              </div>
              <div class="card-footer border-0 pt-0">
                <span class="font-size-1 text-primary font-weight-bold">Learn More <i class="fas fa-angle-right fa-sm ml-1"></i></span>
              </div>
            </a>
          </div>

          <div aria-label="cat-item" class="cat-item col-lg-4 mb-3 mb-sm-5">
            <a class="card h-100 transition-3d-hover" href="#">
              <div class="position-relative">
              <img aria-label="cat-item-img" class="card-img-top" src={catImg} alt="SVG" />
                <div class="position-absolute top-0 left-0 pt-3 pl-3">
                  <span class="badge badge-primary badge-pill">Bestseller</span>
                </div>
              </div>
              <div class="card-body pb-0">
                <h4>Objects and dimensions</h4>
                <p class="text-body">Cute characters with big hearts for your mobile and web projects.</p>
              </div>
              <div class="card-footer border-0 pt-0">
                <span class="font-size-1 text-primary font-weight-bold">Learn More <i class="fas fa-angle-right fa-sm ml-1"></i></span>
              </div>
            </a>
          </div>

          <div aria-label="cat-item" class="cat-item col-lg-4 mb-3 mb-sm-5">
            <a class="card h-100 transition-3d-hover" href="#">
              <div class="position-relative">
              <img aria-label="cat-item-img" class="card-img-top" src={catImg} alt="SVG" />

              </div>
              <div class="card-body pb-0">
                <h4>Objects and dimensions</h4>
                <p class="text-body">Cute characters with big hearts for your mobile and web projects.</p>
              </div>
              <div class="card-footer border-0 pt-0">
                <span class="font-size-1 text-primary font-weight-bold">Learn More <i class="fas fa-angle-right fa-sm ml-1"></i></span>
              </div>
            </a>
          </div>

          <div aria-label="cat-item" class="cat-item col-lg-4 mb-3 mb-sm-5">
            <a class="card h-100 transition-3d-hover" href="#">
              <div class="position-relative">
              <img aria-label="cat-item-img" class="card-img-top" src={catImg} alt="SVG" />
                <div class="position-absolute top-0 left-0 pt-3 pl-3">
                  <span class="badge badge-primary badge-pill">Free</span>
                </div>
              </div>
              <div class="card-body pb-0">
                <h4>Objects and dimensions</h4>
                <p class="text-body">Cute characters with big hearts for your mobile and web projects.</p>
              </div>
              <div class="card-footer border-0 pt-0">
                <span class="font-size-1 text-primary font-weight-bold">Learn More <i class="fas fa-angle-right fa-sm ml-1"></i></span>
              </div>
            </a>
          </div>
          

        </div>


      </div>
    </div >
    )
}

export default AllCategories;