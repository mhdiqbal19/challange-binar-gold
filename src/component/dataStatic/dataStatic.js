import icon1 from './../../assets/icon_complete.png'
import icon2 from './../../assets/icon_price.png'
import icon3 from './../../assets/icon_24hrs.png'
import icon4 from './../../assets/icon_professional.png'

import profil_1 from './../../assets/profil-1.png'
import profil_2 from './../../assets/profil-2.png'

const strList = [
  "Sewa Mobil Dengan Supir di Bali 12 Jam", 
  "Sewa Mobil Lepas Kunci di Bali 24 Jam",
  "Sewa Mobil Jangka Panjang Bulanan",
  "Gratis Antar - Jemput Mobil di Bandara",
  "Layanan Airport Transfer / Drop In Out"
]

const navList = [
{
  judul: "Our Services",
  link: "#ourservices"
},
{
  judul: "Why Use",
  link: "#whyuse"
},
{
  judul: "Testimonial",
  link: "#testimonial"
},
{
  judul: "FAQ",
  link: "#faq"
},
];


const dataTestimoni = [
  {
      avatar: profil_1,
      name: 'Yusaq',
      review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nostrum.',
      umur: 32,
      alamat: "Bogor"
  },
  {
      avatar: profil_2,
      name: 'Ikhlasul',
      review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nostrum.',
      umur: 32,
      alamat: "Surabaya"
  },
  {
      avatar: profil_1,
      name: 'Tri Bagus',
      review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nostrum.',
      umur: 32,
      alamat: "Bogor"
  },
  {
      avatar: profil_2,
      name: 'Dwi Pamungkas',
      review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nostrum.',
      umur: 32,
      alamat: "Jaksel"
  }
];

const dataWhyUse = [
    {
      icon: icon1,
      title: "Mobil Lengkap",
      content: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"
    },
    {
      icon: icon2,
      title: "Harga Murah",
      content: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"
    },
    {
      icon: icon3,
      title: "Layanan 24 Jam",
      content: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"
    },
    {
      icon: icon4,
      title: "Sopir Profesional",
      content: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"
    }
]

export {
    navList,
    dataTestimoni,
    strList,
    dataWhyUse,
}