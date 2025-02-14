import FormInput from "@/components/FormInput";
import Image from "next/image";

export default function checkout() {
  return (
    <>
      <section className="w-full  h-full  bg-green-950">
        <div className=" max-w-[1320px] mx-auto">
          <h1 className="w-[598px] h-[144px] font-[900] text-header text-[64px] leading-[84px] mx-auto">
            Card payment Checkout form
          </h1>

          {/* form */}
          <div className="bg-secondary max-w-[1280px] h-screen mt-10 rounded-[46px]">
            <div className="max-w-[1157px] mx-auto flex justify-between py-10">
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

                  <h2 className="text-[#12372A] text-center text-2xl font-bold">
                    payment gateway
                  </h2>
                  <p className="text-[#A3AED0] text-center text-sm">
                    enter school location details
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="max-w-[660px]  ">
                <h1 className=" text-3xl font-bold">
                  Complete the registration payment
                </h1>
                <h2 className="text-[#000000] font-semibold text-xl py-5">
                  personal details
                </h2>
                <form>
                  <div className="flex flex-wrap  gap-x-8 gap-y-4 ">
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
