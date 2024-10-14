import bg from "@/images/road-bg.jpg";
import sectionBg from "@/images/home-section-bg.png";
import cl from "@/images/car-left.jpg";
import cr from "@/images/car-right.jpg";

export default function Home() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bg.src})` }}
        className="bg-cover bg-center bg-no-repeat h-screen"
      ></div>
      <div
        style={{ backgroundImage: `url(${sectionBg.src})` }}
        className="bg-cover bg-center bg-no-repeat py-20 bg-[#f6f6f6] px-4"
      >
        <div className="container mx-auto flex gap-6">
          <div className="w-2/5"></div>
          <div className="w-3/5">
            <h2 className="uppercase font-semibold text-2xl relative pb-3 mb-6">
              3m car care
              <span className="absolute bottom-0 h-0.5 w-6 left-0 bg-red-600"></span>
            </h2>
            <h3 className="uppercase font-semibold text-xl relative pb-3 mb-2">
              introduction of 3m car care
            </h3>
            <div className="text-sm">
              <p>
                The 3M Car Care Store is a place where technology, people and
                "car care" converge. This is where you, a car owner will
                appreciate the tremendous power of technology and 3M`s great
                beliefs in human connect.
              </p>
              <p className="my-3">
                While we pride ourselves in the science that goes into
                development of each of the products used at a 3M Car Care Store,
                it is also our endeavor to ensure that our customers understand
                our varied range of services with utmost detail.
              </p>
              <p>
                This could be in the form of what products we use at these
                stores, what process we adopt or even the chemistry and the
                physical science behind what makes 3M products work so well.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20 px-4">
        <div>
          <h2 className="uppercase font-semibold text-4xl relative text-center pb-6 mb-12">
            Our Service
            <span className="absolute bottom-2 h-[1px] w-16 left-1/2 -translate-x-1/2 bg-red-600"></span>
            <span className="absolute bottom-0 h-[1px] w-28 left-1/2 -translate-x-1/2 bg-red-600"></span>
          </h2>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6, 7].map((d) => {
            return (
              <div key={d}>
                <div className="h-20 w-20 rounded-full mx-auto bg-gray-100 hover:bg-red-600 mb-5"></div>
                <h2 className="uppercase font-semibold relative text-center pb-2.5 mb-6">
                  car detailing
                  <span className="absolute bottom-0 h-0.5 w-6 left-1/2 -translate-x-1/2 bg-red-600"></span>
                </h2>
                <p className="text-sm text-[#666666] text-center font-light">
                  Car Detailing is the art and the craft of Cleaning and
                  Restoring a vehicle to like New Condition.
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${cl.src}), url(${cr.src})`,
          backgroundPosition: `-140px bottom, calc(100% + 140px) bottom`,
          backgroundSize: "contain, contain",
          backgroundRepeat: `no-repeat, no-repeat`,
        }}
        className="h-80 flex justify-center items-center"
      >
        <div className="text-center">
          <div className="h-20 w-20 rounded-full mx-auto bg-gray-100 hover:bg-red-600 mb-1"></div>
          <h4 className="text-xl text-[#999999] mb-2">Have a any question ?</h4>
          <h2 className="text-4xl font-semibold text-red-600">
            +91 9967154234
          </h2>
        </div>
      </div>
    </div>
  );
}
