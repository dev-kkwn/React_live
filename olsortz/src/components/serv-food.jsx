import React from "react";
import food1 from "../assests/food1.jpg";
import food2 from "../assests/food2.jpg";
import food3 from "../assests/food3.jpg";
const Food = () => {
  return (
    <div>
      <div className="container">
        <div className="top-36 ">
          <img
            className="w-full h-80 object-cover"
            src="https://img.freepik.com/free-photo/turkish-breakfast-fried-eggs-brunch_2829-11351.jpg?t=st=1708840944~exp=1708844544~hmac=1689c1f3fdefb049eb1dbf141c5574f74fe6b0d61f7fe60c3994b20cfb43feff&w=1380 "
            alt=""
          />
        </div>

        <div className="absolute top-36">
          <h1 className="text-4xl text-yellow-500 pl-10">
            Food & Beverages Trading
          </h1>
        </div>
      </div>

      <br />
      <div className="w-full flex  flex-col  lg:flex-row   md:Flex-col">
        <div className="w-full   lg:w-1/2 p-10 ">
          <img
            className="max-h-96 w-full "
            src={ food1}
            alt="img"
          />
        </div>

        <div className="w-full  lg:w-1/2 align-middle p-10">
          <h1 className="text-xl font-semibold text-center">
            Food & Beverages Trading
          </h1>
          <br />
          <p>
            {" "}
            <span className="font-semibold">Product Portfolio:</span>
            Description of the range of food and beverage products being traded.
            Categorization of products (e.g., fresh produce, processed foods,
            beverages). Details on any special or niche products offered. <br />
            <span className="font-semibold">
              Quality Standards and Certifications:
            </span>
            Explanation of quality control measures in place for ensuring
            product safety and compliance with regulations. Overview of
            certifications obtained (e.g., ISO, HACCP, organic, kosher) to
            demonstrate adherence to industry standards. <br />
            <span className="font-semibold">Sourcing and Procurement:</span>
            Information on the sources of raw materials or finished products.
            Details on supplier relationships, including any partnerships or
            agreements. Strategies for ensuring a consistent and reliable supply
            chain. <br />
            <span className="font-semibold">Logistics and Distribution:</span>
            Overview of transportation methods used for shipping products (e.g.,
            refrigerated containers for perishable items). Description of
            distribution networks and warehousing facilities. Logistics
            management strategies to ensure timely delivery and minimize
            spoilage or damage.
          </p>
        </div>
      </div>

      <div className="flex w-full flex  flex-col  lg:flex-row   md:Flex-col">
        <div className="w-full  lg:w-1/2 align-middle p-10">
          <p>
            <span className="font-semibold">Market Analysis and Trends:</span>
            Analysis of market trends, including consumer preferences, demand
            patterns, and emerging markets. Insights into factors influencing
            pricing and market dynamics. Competitor analysis and positioning
            within the market. <br />
            <span className="font-semibold">Regulatory Compliance:</span>
            Explanation of regulations governing the import/export of food and
            beverages in relevant jurisdictions. Steps taken to ensure
            compliance with food safety standards, labeling requirements, and
            import/export regulations. <br />
            <span className="font-semibold">Packaging and Branding:</span>
            Description of packaging materials and designs used for different
            products. Branding strategies and efforts to differentiate products
            in the market. Considerations for packaging sustainability and
            environmental impact. <br />
            <span className="font-semibold">Sales and Marketing:</span>
            Sales channels utilized (e.g., retail, wholesale, e-commerce).
            Marketing strategies to promote products to target customers.
            Participation in trade shows, exhibitions, or other industry events.
          </p>
        </div>

        <div className="w-full   lg:w-1/2 p-10">
          <img
            className="max-h-80 w-full"
            src={food2}
            alt="img"
          />
        </div>
      </div>

      <div className="flex w-full flex  flex-col  lg:flex-row   md:Flex-col ">
        <div className="w-full   lg:w-1/2 p-10">
          <img
            className="max-h-96 lg:1/2 w-full"
            src={food3}
            alt="img"
          />
        </div>

        <div className="w-full  lg:w-1/2 align-middle p-10 ">
          <p>
            <span className="font-semibold">Customer Service and Support:</span>
            Policies and procedures for handling customer inquiries, complaints,
            and returns. Efforts to maintain customer satisfaction and loyalty.{" "}
            <br />
            <span className="font-semibold">
              Risk Management and Contingency Plans:
            </span>
            Identification of potential risks (e.g., supply chain disruptions,
            quality issues, regulatory changes). Contingency plans and risk
            mitigation strategies to address unforeseen challenges. <br />
            <span className="font-semibold">
              Sustainability and Corporate Social Responsibility (CSR):
            </span>
            Initiatives related to sustainable sourcing, production, and
            distribution practices. CSR programs aimed at supporting local
            communities or minimizing environmental impact. <br />
            <span className="font-semibold">
              Financial Performance and Reporting:
            </span>
            Financial data such as revenue, profit margins, and growth
            projections. Reporting mechanisms for tracking key performance
            indicators (KPIs) and assessing business performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Food;
