import CardInput from "@/components/CardInput";
import FormInput from "@/components/FormInput";
import Image from "next/image";

export default function checkout() {
  return (
    <>
      <section className="  bg-green-950">
        <div className=" max-w-[1320px]  mx-auto py-10">
          <h1 className="md:w-[598px] md:h-[144px] font-[900] text-header md:tex text-[35px] md:text-[64px] md:leading-[84px] mx-auto block text-center mb-16">
            Card payment Checkout form
          </h1>

          {/* form */}
          <div className="bg-secondary max-w-[1280px] md:w-[90%] w-[97%]  mx-auto   h-auto mt-10 md:rounded-[46px] rounded-3xl  ">
            <div className="max-w-[1157px]  w-[90%]   mx-auto flex md:flex-row flex-col justify-between py-10 items-center">
              {/* here we are going to show our payment gateway logo with some text */}
              <div className="">
                <div className="w-[257px] text-center">
                  <Image
                    src={"/logo.svg"}
                    width={92}
                    height={95}
                    alt="logo of checkout"
                    className="mx-auto"
                  />

                  <h2 className="text-[#12372A] text-center text-[25px] font-bold">
                    Payment gateway
                  </h2>
                  <p className="text-[#A3AED0] text-center text-sm">
                    Enter school location details
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="md:w-[627.88px] w-full  ">
                <h2 className=" md:text-3xl font-bold text-3xl py-8 md:py-0 text-center inline-block">
                  Complete the registration payment
                </h2>
                <form>
                  <h2 className="text-[#000000] font-semibold text-xl pt-6 pb-2">
                    Personal details
                  </h2>
                  <div className="flex flex-wrap      md:gap-x-[14px] gap-y-4 ">
                    <FormInput
                      title="address line"
                      type="text"
                      placeholder="p.o. box 1223"
                    />
                    <FormInput title="city" type="text" placeholder="Arusha" />
                    <FormInput
                      title="state"
                      type="text"
                      placeholder="Arusha,tanzania"
                    />
                    <FormInput
                      title="postal code"
                      type="text"
                      placeholder="9090"
                    />
                  </div>

                  {/* payment methods */}
                  <h2 className="text-[#000000] font-semibold text-xl pt-6 pb-2 mt-2 md:mt-0">
                    Card details
                  </h2>
                  <div className="flex flex-wrap  md:gap-x-8 w-full ">
                    <CardInput
                      title="cardholder's name"
                      type="text"
                      placeholder="seen on your card"
                    />

                    <CardInput
                      title="card number"
                      type="text"
                      placeholder="seen on your card"
                    />

                    <div className=" flex gap-5 flex-col md:flex-row">
                      <FormInput
                        title="Expiry"
                        type="text"
                        placeholder="seen on your card"
                      />
                      <FormInput
                        title="CVC"
                        type="text"
                        placeholder="seen on your card"
                      />
                    </div>

                    {/* payment button */}
                    <button className="bg-primary text-white py-2 px-3 mt-10 rounded-lg hover:bg-green-900">
                      proceed payment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
