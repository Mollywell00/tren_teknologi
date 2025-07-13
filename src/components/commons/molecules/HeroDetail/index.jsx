import React, { useState } from "react";
import BoxSocial from "../../atoms/BoxSocial";
import CardLarge from "../../atoms/CardLarge";
import CardSmall from "../../atoms/CardSmall";
import Modal from "../../atoms/Modal";
import RoundedImg from "../../atoms/RoundedImg";

import {
  listIndustries,
  listProjects,
  listSkills,
} from "../../../../utils/constants";

const HeroDetail = () => {
  const [dataProject, setDataProject] = useState(undefined);

  const viewListSkills = () => {
    return listSkills.slice(0,3).map((item, index) => (
      <CardSmall
        key={index}
        img={item.icon}
        title={item.name}
        link={item.link}
      />
    ));
  };

  return (
    <>
      <section className="flex max-md:flex-col">
        <div className="w-[60%] text-left text-(--text-color-black) max-xl:w-[50%] max-md:mt-8 max-md:w-full">
          <p>SANTARA</p>

          <div className="flex gap-8 max-xl:flex-col">
            <div>
              <h3 className="font-barlow max-w-[370px] text-4xl leading-7 font-bold max-xl:w-[300px] max-xl:text-3xl">
                Siap Menjadi Cerita Sukses Berikutnya?
              </h3>
              <p className="text-md mt-4 max-w-[300px] leading-4 font-light">
                Santara adalah platform konsultasi yang dirancang untuk membantu mahasiswa menghadapi tantangan skripsi — mulai dari menentukan topik, menulis, hingga presentasi akhir. Dengan pendekatan empatik dan bimbingan terstruktur, kami bantu kamu mengubah kebingungan menjadi kejelasan, dan stres menjadi kemajuan
              </p>
            </div>

            <div className="max-w-[200px]">
              <p className="text-sm font-bold">
                <span className="text-xl">+500</span> Sesi Konsultasi Dilakukan dengan Mahasiswa
              </p>
              <p className="text-sm leading-4">
                Dipandu langsung oleh para lulusan bergelar dari universitas terbaik dalam dan luar negeri, kami membantu mahasiswa menyusun strategi skripsi yang terstruktur dan dapat dipertanggungjawabkan secara akademik.
              </p>

              <div className="mt-1 flex">
                {listIndustries.map((item, index) => (
                  <RoundedImg key={index} src={item.icon} index={index} />
                ))}

                <RoundedImg key={1} text="MORE" index={1} />
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="mt-6">
              <button
                className="cursor-pointer rounded-full border-2 border-(--bg-secondary-cray) px-4 py-2 hover:bg-(--bg-secondary-cray)"
                onClick={() => {
                  window.location.href =
                    "mailto:your_email@example.com?subject=Subject&body=message%20goes%20here";
                }}
              >
                Discover More
              </button>

              <BoxSocial />
            </div>
          </div>
        </div>

        <div className="flex w-[40%] flex-col gap-2 pl-4 max-xl:w-[50%] max-md:mt-14 max-md:w-full">

          {listProjects.slice(0, 2).map((item, index) => (
            <CardLarge
              key={index}
              img={item.background}
              index={index + 1}
              text={item.desc}
              title={item.title}
              tech={item.list_tech}
              onClick={() => {
                setDataProject(item);
              }}
            />
          ))}

        </div>
      </section>

      <Modal
        isOpen={dataProject}
        onClose={() => setDataProject(undefined)}
        data={dataProject}
      />
    </>
  );
};

export default HeroDetail;
