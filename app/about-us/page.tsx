import bg from "@/images/road-bg.jpg";

const AboutPage = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bg.src})` }}
        className="bg-cover bg-center bg-no-repeat h-[300px]"
      >
        <div className="mx-auto container px-4 flex items-end h-full py-7">
          <h1 className="text-4xl uppercase font-medium text-white">
            About Us
          </h1>
        </div>
      </div>
      <div className="py-20 px-4 mx-auto container">
        <div>
          <p className="text-center text-[#999] text-sm">Welcome to</p>
          <h2 className="uppercase font-semibold text-[#363636] text-4xl relative text-center pb-6 mb-6">
            3M car care
            <span className="absolute bottom-2 h-[1px] w-16 left-1/2 -translate-x-1/2 bg-red-600"></span>
            <span className="absolute bottom-0 h-[1px] w-28 left-1/2 -translate-x-1/2 bg-red-600"></span>
          </h2>
          <p className="text-center text-sm text-[#666] lg:w-2/3 font-normal mx-auto">
            The 3M Car Care Store is a place where technology, people and "car
            care" converge. This is where you, a car owner will appreciate the
            tremendous power of technology and 3M`s great beliefs in human
            connect.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 my-16 gap-4">
          <div></div>
          <div>
            <p className="text-[#999] font-normal text-sm mb-4">
              While we pride ourselves in the science that goes into development
              of each of the products used at a 3M Car Care Store, it is also
              our endeavor to ensure that our customers understand our varied
              range of services with utmost detail. This could be in the form of
              what products we use at these stores, what process we adopt or
              even the chemistry and the physical science behind what makes 3M
              products work so well.
            </p>
            <p className="text-[#999] font-normal text-sm">
              when you visit a 3M Car Care Store, you would meet an enthusiastic
              store manager who loves what he does and will sometimes go
              overboard in explaining what wonders 3M products can do on your
              car. He will take you through our range of services that can
              transform your car to look like it’s just walked out of a
              showroom. When you do happen to pick one of the several 3M car
              treatments, you can relax in the customer lounge and see your car
              getting transformed into a beauty.
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-[#999] font-normal text-sm">
              At 3M Car Care we carry out treatments of the cars to make them
              look new. The treatments done at our store can be classified into
              Detailing and Non-Detailing treatments Detailing Treatments
              comprises Exterior Polishing and Interior Cleaning treatments
              required to change the look of the cars and make them hygienic and
              bacteria free upto 99%.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((d) => {
            return (
              <div key={d} className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-100 hover:bg-red-600"></div>
                <div>
                  <h2 className="uppercase font-semibold mb-1">all brands</h2>
                  <p className="text-sm text-[#666666] font-light">
                    We support all Brands
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
