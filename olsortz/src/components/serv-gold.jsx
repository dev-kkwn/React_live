import precious1 from "../assests/precious1.jpg";
import precious2 from "../assests/precious2.jpg";
import precious3 from "../assests/precious3.jpg";
export function Gold() {
  return (
    <>
      <section className="p-10">
        <div className="context-banner my-5 flex justify-start items-center">
          <div className="context m-10 w-auto h-80">
            <div className="text w-60 my-10">
              <h1 className="text-3xl font-bold">
                Gold & Precious Metals Trading
              </h1>
              <p className="text-lg text-white font-bold my-5">
                OLSORTZ is deals with customers who were seeking a destination
                for purchasing gold & precious metals in an environment focused
                on security and service.
              </p>
            </div>
          </div>
        </div>
        <div className="intro-bang p-5">
          <div className="flex justify-evenly px-5">
            <div className="part-1 mx-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              unde aspernatur voluptatem distinctio quos dolore et accusantium.
              Error molestiae et, necessitatibus non accusantium, soluta facilis
              reprehenderit fugiat, at atque praesentium?
            </div>
            <div className="part-2 mx-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              voluptate sint quisquam officiis eligendi consectetur doloremque
              ut officia voluptatibus atque inventore, corporis illo qui aliquid
              modi dolore dolores fugit perferendis.
            </div>
            <div className="part-3 mx-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur illo molestiae voluptate iste incidunt corrupti
              suscipit nulla enim, inventore voluptatum pariatur ex laudantium
              aliquam aperiam. Vero tenetur earum reiciendis fuga.
            </div>
          </div>
        </div>
        <div className="main-wrapper p-5">
          <div className="main-part-1 flex justify-around items-center w-full my-10">
            <div className="pm-1 w-2/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              architecto, sequi aperiam explicabo, facilis quasi iure soluta
              repellendus culpa quidem libero cumque doloribus hic veniam rem at
              doloremque a recusandae! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Tenetur ullam omnis quaerat incidunt, corporis
              quo, soluta accusantium in architecto, eaque iusto ipsa
              repellendus maxime aperiam molestiae eveniet velit saepe
              laudantium.
            </div>
            <div className="pm-img">
              <img
                src={precious1}
                alt="image1"
                className="w- h-96 rounded-3xl"
              />
            </div>
          </div>
          <div className="main-part-2 flex justify-around items-center w-full">
            <div className="pm-img">
              <img
                src={precious2}
                alt="image2"
                className="w- h-96 rounded-3xl"
              />
            </div>
            <div className="pm-2 w-2/4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              neque, maiores impedit magnam unde provident, necessitatibus
              repellendus quos natus praesentium pariatur dignissimos qui et
              officiis beatae cupiditate enim ratione porro. Non tempora
              quisquam, iusto voluptatum necessitatibus voluptates repudiandae
              amet deserunt suscipit, hic atque dolorem ab dolor! Voluptate
              alias aspernatur sed itaque autem quo similique tenetur dicta,
              rerum consequatur esse facilis.
            </div>
          </div>
          <div className="main-part-3 flex justify-around items-center w-full">
            <div className="pm-3 w-2/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              enim iure sunt architecto veniam, ut earum, nulla expedita ratione
              quos distinctio cumque eos molestiae saepe! Accusamus dicta
              obcaecati cumque explicabo! Consectetur facilis, cumque deleniti
              iste debitis, quae, modi consequuntur iusto ut placeat rerum. Quis
              ipsam suscipit aliquid atque excepturi eius tempore quia!
              Perferendis mollitia dicta soluta. Dolorem aliquam voluptas
              fugiat.
            </div>
            <div className="pm-img ">
              <img src={precious3} alt="image3" className="h-96 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
