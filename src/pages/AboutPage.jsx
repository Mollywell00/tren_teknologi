import React from "react";
import BoxSocial from "../components/commons/atoms/BoxSocial";
import HeroBanner from "../components/commons/molecules/HeroBanner";

const AboutPage = () => {
  return (
    <section>
      <HeroBanner />
      <div className="mt-14 text-left text-(--text-color-black)">
        <h1 className="font-barlow max-w-[370px] text-4xl font-bold max-xl:w-[300px] max-xl:text-3xl">
          About Us
        </h1>
        <p className="text-lg">
          Kami adalah platform konsultasi skripsi yang hadir untuk menjawab keresahan ribuan mahasiswa yang merasa kewalahan, kehilangan arah, atau tertekan dalam proses penyusunan skripsi.
          <br />
          Kami memahami bahwa skripsi bukan hanya tugas akhir, tapi juga beban mental yang nyata bagi banyak mahasiswa.
          <br />
          Dengan menggabungkan pendekatan edukatif, empatik, dan personal, kami menyediakan layanan bimbingan yang disesuaikan dengan kebutuhan masing-masing individu — mulai dari pemilihan topik, penyusunan bab, analisis data, hingga persiapan menghadapi sidang.
          <br />
          Didampingi oleh tim konsultan akademik berpengalaman dari berbagai latar belakang keilmuan, kami berkomitmen membantu Anda menyelesaikan skripsi dengan lebih tenang, terarah, dan percaya diri.  
        </p>

        <BoxSocial />
      </div>
    </section>
  );
};

export default AboutPage;
