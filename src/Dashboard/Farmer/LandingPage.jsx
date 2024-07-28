import React from "react";
import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <>
      <div className="pl-[10px]">
        <div className="relative">
          <img
            src="/img/AboutUs.png"
            className="h-[30vh] w-[99%] object-cover"
          ></img>
          <div className="absolute lg:top-16 md:top-24 sm:top-24 lg:left-[60vh] md:left-[42vh] sm:left-[8vh] text-[#ece9e9]">
            <p className="text-5xl">
              <b>Farmer Dashboard</b>
            </p>
          </div>
        </div>
        <div className="flex gap-3 pt-2 px-2">
          <div className=" py-5 rounded-sm bg-[#f2f2f2] h-[52vh]">
            <div className="p-5 flex flex-col gap-5 bg-[#f2f2f2]">
              <strong>Latest news</strong>
              <div className="pt-3 flex flex-col gap-3 border-t-2">
                <p className=" font-thin">May 28,2024</p>
                <Link to="https://x.com/RwandaAgri/status/1795405130373931055">
                  Uyu munsi Umunyamabanga Uhoraho{" "}
                  <span className="text-blue-600">@olivikam </span>
                  n’Umuyobozi w'Akarere ka{" "}
                  <span className="text-blue-600">@MusanzeDistrict </span>{" "}
                  bifatanyije n’abahinzi b’ibirayi muri{" "}
                  <span className="text-blue-600">@MusanzeDistrict </span>
                  mu gutangiza gahunda y’ubwishingizi bw’ibihingwa
                  bukomatanyijwe n’imbuto nziza y’ibirayi ku bufatanye bwa
                  <span className="text-blue-600"> @spf_ikigega </span> na{" "}
                  <span className="text-blue-600"> @bkinsuranceltd </span>
                </Link>
                <Link to="https://x.com/RwandaAgri/status/1795405130373931055">
                  <img
                    src="../FarmerNews.jpg"
                    className="w-[40vh] rounded-lg"
                  ></img>
                </Link>
              </div>
              <div className="pt-3 flex flex-col gap-3 border-t-2">
                <p className=" font-thin">May 28, 2024</p>
                <Link to="https://x.com/IFPRIRwanda/status/1795380603963244960">
                  <span className="text-blue-600">@IFPRIRwanda </span> and{" "}
                  <span className="text-blue-600">@GAINalliance </span>
                  in partnership with{" "}
                  <span className="text-blue-600">@RwandaAgri </span>
                  hosted a workshop on monitoring #foodsystems for healthy and
                  sustainable #diets using #research findings on smallholder
                  commercial farming More on this event and research findings👇{" "}
                  <Link to="https://rwanda.ifpri.info/2024/05/24/stakeholder-workshop-on-monitoring-food-systems-for-healthy-and-sustainable-diets-recent-research-findings-on-smallholder-commercial-farming-in-rwanda-may-16-17-2024/">
                    <span className="text-blue-600">
                      {" "}
                      https://bit.ly/3wU3jCw
                    </span>
                  </Link>
                </Link>
                <Link to="https://x.com/IFPRIRwanda/status/1795380603963244960">
                  <img
                    src="../FarmerNews2.png"
                    className="w-[80vh] rounded-lg"
                  ></img>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[59h] flex flex-col-reverse">
            <div className="bg-[#f2f2f2] flex flex-col gap-5 p-5 px-8">
              <strong>Most asked question</strong>
              <div className=" flex flex-col gap-5">
                <p className="flex flex-col">
                  "A clariffication was requested on the innovation fund and the
                  target group, climate resilience technology, who will be the
                  target group?"
                  <span className="text-sm text-gray-500">
                    ~ <span className="text-lg">M. Rukundo</span> (Kopenyaru
                    Cooperative)
                  </span>
                </p>

                <p>
                  "Innovation and technology target youth and women. Details
                  will be developed during the implementation phase with support
                  of stakeholders"{" "}
                  <span className="text-sm text-gray-500">~Minagri</span>
                </p>
              </div>
              <strong>Express your self!</strong>
              <div>
                <form className="flex flex-col gap-3 items-start">
                  <input
                    type="text"
                    placeholder="Names"
                    className="px-5 py-3 border-2 rounded-lg w-[48vh]"
                  ></input>
                  <input
                    type="text"
                    placeholder="Cooperative (optional)"
                    className="px-5 py-3 border-2 rounded-lg w-[48vh]"
                  ></input>
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-5 py-3 border-2 rounded-lg w-[48vh]"
                  ></input>
                  <textarea className="h-[30vh] px-5 py-3 border-2 rounded-lg w-[48vh]"></textarea>
                  <button className="text-white rounded-lg px-3 bg-[#269553] hover:bg-[#2d7a4a] p-1">
                    Post
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
