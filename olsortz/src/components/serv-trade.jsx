import React from "react";

const Trade = () => {
  return (
    <div>
      <div className="container ">
        <div className="top-36 ">
          <img
            className="w-full h-80"
            src="https://img.freepik.com/free-photo/aerial-view-container-cargo-ship-sea_335224-720.jpg?t=st=1708843092~exp=1708846692~hmac=6229c0b40d3082ae2dcdb8ae1a29e9edadfb9900b5c3e29f5ed2bc76751629ce&w=1060 "
            alt=""
          />
        </div>

        <div className="absolute top-36">
          <h1 className="text-3xl text-slate-200 font-bold pl-10">
            Import and Export Trading
          </h1>
        </div>
      </div>
      <div className="w-full flex  flex-col  lg:flex-row   md:Flex-col">
        <div className="w-full   lg:w-1/2 p-10">
          <img
            className="max-h-80 w-full top-9 rounded-l-2xl"
            src="https://img.freepik.com/free-photo/international-container-cargo-ship-harborfreight-transportation-shipping-ai-generative_123827-23695.jpg?t=st=1708845358~exp=1708848958~hmac=bc1c66bdc684b9c7301e675bf59fc324021915945c8c42a7b2fb469365dfcfc3&w=1060 "
            alt="img"
          />
        </div>

        <div className="w-full  lg:w-1/2 align-middle p-10 ">
          <h1 className="text-xl font-semibold text-center">
            {" "}
            Import & Export Trading
          </h1>
          <br />
          <p>
            {" "}
            <span className="font-semibold">Documentation:</span> This includes
            all the paperwork necessary for international trade such as
            invoices, packing lists, bills of lading, certificates of origin,
            and any other required permits or licenses. <br />
            <span className="font-semibold">Customs Clearance:</span> This
            involves navigating the legal requirements and procedures imposed by
            customs authorities in both the exporting and importing countries.
            It includes duties, tariffs, and taxes. <br />
            <span className="font-semibold">Transportation:</span> This
            encompasses the physical movement of goods from the exporter's
            location to the importer's location. It can involve various modes of
            transportation such as ships, airplanes, trucks, and trains. <br />
            <span className="font-semibold">Warehousing:</span>
            This involves the storage of goods before, during, and after
            transportation. Warehousing facilities may be used for
            consolidation, deconsolidation, sorting, and distribution of goods.
          </p>
        </div>
      </div>

      <div className="flex w-full flex  flex-col  lg:flex-row   md:Flex-col">
        <div className="w-full  lg:w-1/2 align-middle p-10">
          <p>
            <span className="font-semibold">Inventory Management:</span>
            Efficient management of inventory ensures that goods are available
            when needed without excess stock, minimizing storage costs and
            maximizing customer satisfaction. <br />
            <span className="font-semibold">Packaging and Labeling:</span>
            Proper packaging and labeling are crucial for protecting goods
            during transit and ensuring compliance with regulatory requirements
            in the destination country. <br />
            <span className="font-semibold">Risk Management:</span>
            This involves identifying and mitigating risks associated with
            international trade such as currency fluctuations, political
            instability, transportation delays, and damage to goods. <br />
            <span className="font-semibold">Supply Chain Visibility:</span>{" "}
            Having real-time visibility into the supply chain enables better
            decision-making and coordination among all parties involved in the
            import-export process.
          </p>
        </div>

        <div className="w-full   lg:w-1/2 p-10">
          <img
            className="max-h-72 w-full rounded-r-2xl"
            src="https://img.freepik.com/free-photo/busy-shipping-port-with-containers-trade-action_91128-4581.jpg?t=st=1708845764~exp=1708849364~hmac=d477f8f51247a53b99f975728bb88c8dce79071c5fec68314ea039efc28cef6b&w=1380"
            alt="img"
          />
        </div>
      </div>

      <div className="flex w-full flex  flex-col  lg:flex-row   md:Flex-col  ">
        <div className="w-full   lg:w-1/2 p-10">
          <img
            className="max-h-72 w-full rounded-l-2xl  object-cover"
            src="https://img.freepik.com/free-photo/industrial-port-container-yard_1112-1200.jpg?t=st=1708845844~exp=1708849444~hmac=170915749f3254653d8955f802fc68e8a6b2eb03e6947d442895cc68c1ed3b0f&w=996 "
            alt="img"
          />
        </div>

        <div className="w-full  lg:w-1/2 align-middle p-10  ">
          <p>
            <span className="font-semibold">Compliance:</span>
            Ensuring compliance with international trade regulations, export
            controls, sanctions, and other legal requirements is essential to
            avoid penalties and disruptions to the supply chain. <br />
            <span className="font-semibold">Insurance:</span>
            Obtaining appropriate insurance coverage protects against potential
            losses or damages during transit and helps mitigate financial risks
            associated with international trade. <br />
            <span className="font-semibold">Technology Solutions:</span>
            Utilizing technology such as supply chain management software,
            tracking systems, and electronic data interchange (EDI) facilitates
            communication, streamlines processes, and improves efficiency in
            import-export logistics. <br />
            <span className="font-semibold">Customer Service:</span>
            Providing excellent customer service throughout the import-export
            process enhances satisfaction and builds strong relationships with
            clients and partners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trade;
