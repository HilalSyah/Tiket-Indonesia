import React from "react";
import Link from "next/link";   

export const Page8 = () => {
  const dataTiket = [
    {
      img: "Assets/Image/GambarWeb/Background (12).png",
      tujuan: "Jakarta-Yogyakarta",
      logoTiket: "Assets/Icons/KAI.png",
      harga: "579,990",
      jenisPesawat: "Taksaka",
      href:"Kereta_Tiket2",
    },
    {
      img: "Assets/Image/GambarWeb/Background (12).png",
      tujuan: "Jakarta-Malang",
      logoTiket: "Assets/Icons/KAI.png",
      harga: "550,000",
      jenisPesawat: "Jayabaya",
      href:"Kereta_Tiket3"
    },
    {
      img: "Assets/Image/GambarWeb/Background (12).png",
      tujuan: "Jakarta-Bandung",
      logoTiket: "Assets/Icons/KAI.png",
      harga: "390,000",
      jenisPesawat: "Sri Tanjung",
      href:"Kereta_Tiket4"
    },
    {
      img: "Assets/Image/GambarWeb/Background (12).png",
      tujuan: "Banyuwangi-Surabaya",
      logoTiket: "Assets/Icons/KAI.png",
      harga: "490,000",
      jenisPesawat: "Gajayana",
      href:"Kereta_Tiket5"
    },
    {
      img: "Assets/Image/GambarWeb/Background (12).png",
      tujuan: "Bandung-Solo",
      logoTiket: "Assets/Icons/KAI.png",
      harga: "460,000",
      jenisPesawat: "Lodya",
      href:"Kereta_Tiket6"
    },
  ];

  return (
    <div className="page6 flex justify-center items-center min-h-[75vh] flex-col relative bg-[#DDE6ED]">
      <p className=" absolute font-lexend font-black text-[200px] z-0 mb-[12rem] tracking-[15px] text-[#B8C8D3]">Kereta</p>
      <div className="teks flex justify-center items-center font-jost font-medium me-[70rem] relative z-10 ms-[7rem] w-[50rem]">
        <p className="text-center mb-[3rem] text-[24px]">Yuk, Jelajahi indonesia dengan kereta</p>
      </div>
      <div className="foto flex justify-center items-center ms-10 gap-[5rem] relative z-10">
        {dataTiket.map((d) => (
          <div className="foto shadow-md w-[210px] h-[290px] rounded-xl mt-14 relative z-10 bg-[#9DB2BF]">
            <img src={'kereta.png'} alt="" className="w-full h-[131px] rounded-t-lg" />
            <div className="p-2 ml-1 relative z-10">
              <p className="font-bold text-sm">{d.tujuan}</p>
              <div className="flex items-center text-xs">
                <img src={d.logoTiket} alt="" className="w-8 h-8 mt-4" />
                <p className="ml-2 mt-4">{d.jenisPesawat}</p>
              </div>
              <p className="mt-2">Start From</p>
              <Link href={d.href}>
                <button className="font-extrabold text-red-500 p-1 w-30 rounded-md mt-1 hover:bg-[#BCC9D1]">
                  {d.harga}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page8;
