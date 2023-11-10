import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import BgImage from "@/components/BgImage"
import Image from "next/image";

import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

const page = () => {
  return (
    <>
      <Navbar />
      {/* <BgImage /> */}
      <div className="mt-20 flex flex-col">
        <h1 className="flex justify-center font-extrabold text-5xl ">
          PR
          <span className=" bg-gray-300 rounded-full py-2  ">
            <FontAwesomeIcon icon={faUser} className="text-gray-600 px-3" />
          </span>
          FILE
        </h1>
        <Image
          src="/profile.jpeg"
          width={200}
          height={200}
          className="mx-auto mt-10 shadow-"
        ></Image>

        <h1 className="mx-auto text-3xl font-bold mt-5">
          I'm A Professional Dude
        </h1>
        <div className="flex flex-row gap-6 pt-7">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
            recusandae modi alias nemo fuga omnis corrupti perferendis nulla
            soluta, nobis tenetur molestiae aut maiores adipisci natus
            laboriosam. Veniam repudiandae odio recusandae, minus totam, ratione
            dolores illum, nesciunt et excepturi iure harum voluptatum dolorum
            commodi eveniet ullam. Molestias sunt quos ratione labore fuga. Id
            nisi iure possimus nemo eaque deserunt sint magnam nihil porro!
            Expedita, odit? Rem mollitia aliquid, totam suscipit temporibus eum
            illo maiores nam animi dicta officia voluptatibus aut ducimus
            impedit exercitationem provident aperiam beatae perspiciatis modi
            atque? Ad laudantium mollitia repellat sapiente doloremque facere
            placeat provident labore beatae! Dolorum magnam eum quasi alias
            nesciunt quam aliquam, iste, molestiae voluptate corporis voluptatem
            impedit voluptatibus officiis totam eos dolor amet harum
            consectetur? Ipsam nulla minus eius, officiis ipsum itaque quae
            excepturi. Quas alias illum, vitae aliquid saepe, assumenda repellat
            nobis odio unde, eum omnis. Officia deserunt totam sint, inventore
            explicabo provident dignissimos maiores? Ipsum eum fugit blanditiis
            odit in ipsam voluptatibus similique explicabo exercitationem sed,
            illo magnam dicta voluptates, nisi, at cupiditate? Qui laboriosam
            quas iste? Alias delectus architecto ea ducimus. Excepturi
            reiciendis eius quos maiores id corrupti culpa dignissimos? Ipsum
            maiores qui magni! Quos iusto culpa praesentium autem ea.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            alias, sit saepe eum ab incidunt beatae aliquam. Quibusdam vel nobis
            tempore iste asperiores consectetur tempora, at perspiciatis,
            provident, similique possimus commodi cum explicabo debitis porro et
            quia odit? Aperiam sed corrupti minima suscipit consequuntur ea
            voluptate aut eveniet iusto minus incidunt esse voluptas quas,
            ducimus quod, nisi placeat sequi? Illum nemo accusamus accusantium
            hic impedit blanditiis totam suscipit facere cupiditate cum, porro
            sequi fugiat, sapiente provident tempore minus quaerat iste
            similique earum! Nobis rerum eaque laboriosam laborum nisi cumque
            eum nesciunt cupiditate excepturi, reprehenderit perspiciatis beatae
            illum quaerat et, minus quasi quae optio maxime ex ducimus aliquam
            pariatur consequatur labore? Error, fuga. Labore esse facilis,
            reprehenderit vitae provident ipsa asperiores consectetur harum
            dignissimos et consequatur itaque, quo doloremque, nesciunt nulla
            earum neque consequuntur facere minus assumenda autem at. Qui nam
            mollitia, voluptates repellat cum voluptate at ea molestias rem,
            aperiam sapiente distinctio quos. Cumque eligendi, magni facilis
            nobis quia officia labore quos perferendis, deserunt, delectus
            consequatur ut quam eum. Culpa nulla vel tempora unde aperiam
            dolores impedit itaque reprehenderit dicta qui distinctio magnam,
            iusto doloribus iste, obcaecati voluptatem ea ab non. Quod, beatae.
            Aliquid cupiditate enim vel delectus, aut animi?
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
