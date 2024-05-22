function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function getRandomNumberfloat(min, max) {
    let rnd = (Math.random() * (max - min )) + min;
    return parseFloat(rnd.toFixed(2));
  }
  
  
  const months = [
    {month: "Jan" },
    {month: "Feb" },
    {month: "Mar" },
    {month: "Apr" },
    {month: "May" },
    {month: "June" },
    {month: "July" },
    {month: "Aug" },
    {month: "Sept" },
    {month: "Oct" },
    {month: "Nov" },
    {month: "Dec" },
  ]
  
  const cities = [
    { location: "Lahore, Pakistan" },
    { location: "Tokyo, Japan" },
    { location: "Paris, France" },
    { location: "New York, USA" },
    { location: "Sydney, Australia" },
    { location: "Rio de Janeiro, Brazil" },
    { location: "Moscow, Russia" },
    { location: "London, UK" },
    { location: "Berlin, Germany" },
    { location: "Rome, Italy" },
    { location: "Beijing, China" },
    { location: "Cairo, Egypt" },
    { location: "Dubai, UAE" },
    { location: "Toronto, Canada" },
    { location: "Mexico City, Mexico" },
    { location: "Mumbai, India" },
    { location: "Bangkok, Thailand" },
    { location: "Seoul, South Korea" },
    { location: "Cape Town, SA" },
    { location: "Athens, Greece" },
    { location: "Dublin, Ireland" },
    { location: "Stockholm, Sweden" },
    { location: "Helsinki, Finland" },
    { location: "Oslo, Norway" },
    { location: "Amsterdam, Netherlands" },
    { location: "Vienna, Austria" },
    { location: "Brussels, Belgium" },
    { location: "Budapest, Hungary" },
    { location: "Warsaw, Poland" },
    { location: "Prague, Czech Republic" },
    { location: "Madrid, Spain" },
    { location: "Lisbon, Portugal" },
    { location: "Zurich, Switzerland" },
    { location: "Geneva, Switzerland" },
    { location: "Singapore, Singapore" },
    { location: "Kuala Lumpur, Malaysia" },
    { location: "Jakarta, Indonesia" },
    { location: "Manila, Philippines" },
    { location: "Hanoi, Vietnam" },
    { location: "Kiev, Ukraine" },
    { location: "Moscow, Russia" },
    { location: "Saint Petersburg, Russia" },
    { location: "Istanbul, Turkey" },
    { location: "Ankara, Turkey" },
    { location: "Tehran, Iran" },
    { location: "Baghdad, Iraq" },
    { location: "Riyadh, Saudi Arabia" },
    { location: "Cape Town, SA" },
    { location: "Johannesburg, SA" },
    { location: "Casablanca, Morocco" },
    { location: "Nairobi, Kenya" },
    { location: "Lagos, Nigeria" },
    { location: "Accra, Ghana" },
    { location: "Dakar, Senegal" },
    { location: "Cotonou, Benin" },
    { location: "Abuja, Nigeria" },
    { location: "Bamako, Mali" },
    { location: "Buenos Aires, Argentina" },
    { location: "Santiago, Chile" },
    { location: "Caracas, Venezuela" },
    { location: "Lima, Peru" },
    { location: "Bogotá, Colombia" },
    { location: "Quito, Ecuador" },
    { location: "La Paz, Bolivia" },
    { location: "São Paulo, Brazil" },
    { location: "Montevideo, Uruguay" },
    { location: "Asunción, Paraguay" },
    { location: "Sucre, Bolivia" },
    { location: "Georgetown, Guyana" },
    { location: "Paramaribo, Suriname" },
    { location: "Port-au-Prince, Haiti" },
    { location: "Kingston, Jamaica" },
    { location: "Havana, Cuba" },
    { location: "San Juan, Puerto Rico" },
    { location: "Santo Domingo, Dom Repub" },
    { location: "Panama City, Panama" },
    { location: "San José, Costa Rica" },
    { location: "Managua, Nicaragua" },
    { location: "Tegucigalpa, Honduras" },
    { location: "Belmopan, Belize" },
    { location: "Guatemala City, Guatemala" },
    { location: "Mexico City, Mexico" },
    { location: "Ottawa, Canada" },
    { location: "Washington, USA" },
    { location: "Brasília, Brazil" },
    { location: "Montevideo, Uruguay" },
    { location: "Buenos Aires, Argentina" },
    { location: "Canberra, Australia" },
    { location: "Wellington, New Zealand" },
    { location: "Port Moresby, P N G" },
    { location: "Nuku'alofa, Tonga" },
    { location: "Suva, Fiji" },
    { location: "Apia, Samoa" },
    { location: "Palikir, Micronesia" },
    { location: "Yaren, Nauru" },
    { location: "Funafuti, Tuvalu" },
    { location: "Majuro, Marshall Islands" },
    { location: "Honiara, Solomon Islands" },
    { location: "Tarawa, Kiribati" },
    { location: "Avarua, Cook Islands" },
    { location: "Palikir, F S M" },
    { location: "Ngerulmud, Palau" },
    { location: "Alofi, Niue" },
    { location: "Hagåtña, Guam" },
    { location: "Saipan, Northern Mariana Islands" },
    { location: "Mata-Utu, Wallis and Futuna" },
    { location: "Papeete, French Polynesia" },
    { location: "Nouméa, New Caledonia" },
    { location: "Adamstown, Pitcairn Islands" },
    { location: "Pago Pago, American Samoa" },
    { location: "Honiara, Solomon Islands" },
    { location: "Palikir, F S M" },
    { location: "Funafuti, Tuvalu" },
    { location: "Port Vila, Vanuatu" },
    { location: "Port Moresby, P N G" },
    { location: "Nouméa, New Caledonia" },
    { location: "Nuku'alofa, Tonga" },
    { location: "Apia, Samoa" },
    { location: "Tarawa, Kiribati" },
    { location: "Majuro, Marshall Islands" },
    { location: "Avarua, Cook Islands" },
    { location: "Palikir, F S M" }]  


    const amazing = [
        {
          pic1: "https://a0.muscache.com/im/pictures/miso/Hosting-46100393/original/6eb79133-4850-477f-b3a4-8ee3f3519ed1.jpeg?im_w=720",
          pic2: "https://a0.muscache.com/im/pictures/miso/Hosting-46100393/original/ba1cfa13-a43a-4b2d-a3eb-dc627d6749d1.jpeg?im_w=720",
          pic3: "https://a0.muscache.com/im/pictures/miso/Hosting-46100393/original/abaf828f-e814-4389-bba3-cb795cf6c8a6.jpeg?im_w=720"
      },
      {
          pic1: "https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/ff262931-7709-4f9b-ae41-b1dd625e5a5c.jpeg?im_w=720",
          pic2: "https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/1479b1a0-ee19-49a6-94e4-3c43049776c0.jpeg?im_w=720",
          pic3: "https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/cd0c1eba-74bd-4d6b-9ec3-20c6dd8b5226.jpeg?im_w=720"
      },
      {
          pic1: "https://a0.muscache.com/im/pictures/miso/Hosting-45522616/original/41144314-f5c7-4310-b802-ef83dda6fe24.jpeg?im_w=720",
          pic2: "https://a0.muscache.com/im/pictures/miso/Hosting-45522616/original/cbf2cb6c-ce2e-466a-9ca8-2d41b72e7862.jpeg?im_w=720",
          pic3: "https://a0.muscache.com/im/pictures/miso/Hosting-45522616/original/f05545bd-ff6b-4cff-9d4c-618e711c1aa9.jpeg?im_w=720"
      },
      {
          pic1: "https://a0.muscache.com/im/pictures/64a82eeb-c159-4268-a5d0-606aa52d762a.jpg?im_w=720",
          pic2: "https://a0.muscache.com/im/pictures/df661948-37d3-4705-bbc4-6475a8364679.jpg?im_w=720",
          pic3: "https://a0.muscache.com/im/pictures/4b1a0de7-13da-4570-bf8b-d6a4d66e1bd9.jpg?im_w=720"
      },
      {
          pic1: "https://a0.muscache.com/im/pictures/b01df6e7-fc5a-4fa3-8062-55a3497059eb.jpg?im_w=720",
          pic2: "https://a0.muscache.com/im/pictures/miso/Hosting-53802418/original/ee0e8e19-033a-4efb-b3ee-0d7072cbf331.jpeg?im_w=720",
          pic3: "https://a0.muscache.com/im/pictures/miso/Hosting-53802418/original/96351bd5-82f5-48f2-8b35-f36a8b7b9d3a.jpeg?im_w=720"
      },
      {
          pic1: "https://a0.muscache.com/im/pictures/a1314224-52d7-4e3c-9c85-8fbdb5644ec5.jpg?im_w=720",
          pic2: "https://a0.muscache.com/im/pictures/f84a2b63-ef1d-4e87-9d8f-c3ec35594387.jpg?im_w=720",
          pic3: "https://a0.muscache.com/im/pictures/6b5c8fe1-1da4-47a5-b9df-84d240e8a642.jpg?im_w=720"
      },
      {
          pic1: "https://a0.muscache.com/im/pictures/hosting/Hosting-1113550470942588024/original/447d403e-583b-4cb2-9b99-18a499150be5.jpeg?im_w=720",
          pic2: "https://a0.muscache.com/im/pictures/hosting/Hosting-1113550470942588024/original/f57a875e-1365-41ce-bc2f-65100e6acb22.jpeg?im_w=720",
          pic3: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTExMzU1MDQ3MDk0MjU4ODAyNA%3D%3D/original/2bf2ec5a-90e7-4b1e-8e58-d10930cf27bf.jpeg?im_w=720"
      },
      {
          pic1: "https://a0.muscache.com/im/pictures/miso/Hosting-724529680708654018/original/2da96054-e96d-4e40-b009-63937072a54f.jpeg?im_w=720",
          pic2: "https://a0.muscache.com/im/pictures/hosting/Hosting-724529680708654018/original/c583c2e7-7c38-42cd-aede-be8dc85caa8d.jpeg?im_w=720",
          pic3: "https://a0.muscache.com/im/pictures/miso/Hosting-724529680708654018/original/fc5f7c19-38ab-469d-8953-e41d36179aae.jpeg?im_w=720"
      },
      {
          pic1: "https://a0.muscache.com/im/pictures/miso/Hosting-52621754/original/101e5f50-5649-43b6-98e4-b0fc9c31e82b.jpeg?im_w=720",
          pic2: "https://a0.muscache.com/im/pictures/miso/Hosting-52621754/original/10dbaa05-dbfb-418d-a1f9-56d41ac5d417.jpeg?im_w=720",
          pic3: "https://a0.muscache.com/im/pictures/miso/Hosting-52621754/original/b01d126d-b2bd-4bb4-bdac-f1577db941f6.jpeg?im_w=720"
      },
      {
          pic1: "https://a0.muscache.com/im/pictures/f5ceadbd-a34f-47d1-913f-7087a2c34398.jpg?im_w=720",
          pic2: "https://a0.muscache.com/im/pictures/e5d39130-ba71-48ab-b4d6-4a55fc6318ea.jpg?im_w=720",
          pic3: "https://a0.muscache.com/im/pictures/hosting/Hosting-16105121/original/4c3142cf-093d-46d9-97d7-e63735866364.png?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/416009d8-7dc2-4680-98b0-d7d7483084b0.jpg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/20c47e50-644f-4a3e-9193-80d11b5b1904.jpg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/b385cedf-ab3a-4037-afc1-40b33da9fab1.jpg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/miso/Hosting-853189955208971108/original/bdefcb9d-5e3f-495d-bc04-013125cd99c6.jpeg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/e43414c9-9cd6-429a-ab17-9e08d6bb189a.jpg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/461bcd19-9a80-4cee-b224-116109509e0f.jpg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/miso/Hosting-40910232/original/1da673da-6164-40f3-8f1c-a74730bdce25.jpeg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/miso/Hosting-40910232/original/c7083abe-1edf-4458-8533-a8ca94ac1078.jpeg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/7982be1f-3cb3-40fe-b439-9742776e7cd4.jpg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/73fdab10-e6a2-43dc-abdd-d6bccd9782bc.jpg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/70b5530d-36d9-4a82-b9d5-2a2ef8041714.jpg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/41cc16c9-0f23-4336-8adc-8a8f8bda0251.jpg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/hosting/Hosting-1038248081308212562/original/84054f7d-3330-40c2-ac8b-eb02473fca78.jpeg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/hosting/Hosting-1038248081308212562/original/63588d5a-d35f-4355-a75b-cc5229f1a8fa.jpeg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/hosting/Hosting-1038248081308212562/original/8230c394-d918-4f06-88d1-9cdaeb20d8d0.jpeg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjY4NjIwMjE1MTM4NzMzMDA5/original/dd665d75-b3b0-44e2-a438-e7506d4107fe.jpeg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/miso/Hosting-668620215138733009/original/2e573684-fd2d-4046-b67a-2aae9b85a49c.jpeg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/miso/Hosting-668620215138733009/original/a2964715-5b45-4fe0-8060-ee39881568b3.jpeg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/miso/Hosting-854065432551935839/original/270e6f4f-5fea-4117-a552-523370f62a74.jpeg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/miso/Hosting-854065432551935839/original/34d97bce-1da9-446b-9011-9d113e3c653c.jpeg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/miso/Hosting-854065432551935839/original/46e3eb51-e851-4b41-aa5f-d74c1fd2d288.jpeg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/cde2916e-eb85-4020-8a5f-fba017eddec8.jpg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/6a194aca-9417-4d38-ab75-76019279ada3.jpg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/miso/Hosting-807094152341983711/original/ae4c5c72-8c99-460e-8f85-ee837c6688d0.jpeg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/miso/Hosting-36774428/original/15110762-267f-4a08-88ae-2d9d3603284d.jpeg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/miso/Hosting-36774428/original/a5d94c9a-0e31-4c81-b663-a27d6d643905.jpeg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/miso/Hosting-36774428/original/43787a9f-4758-481b-bbab-1e332165dac0.jpeg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/miso/Hosting-44407908/original/a3ef24b2-56a4-459a-a5c2-2420d56503e3.jpeg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/miso/Hosting-44407908/original/708fe184-507e-4c2f-b0e7-48cb16981f8e.jpeg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/miso/Hosting-44407908/original/98294580-563d-4e47-95a7-c14d6d6c8a91.jpeg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/miso/Hosting-53655392/original/7b6bf48c-2453-4cbc-84ba-bd4c4ef56e88.jpeg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/miso/Hosting-53655392/original/fc79f180-3c40-42ed-88a3-7508fd098a34.jpeg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/miso/Hosting-53655392/original/34b77aed-72a7-4dce-b564-fa50c40cb4a9.jpeg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/f31aec24-2f49-4fdc-a1ac-b750117c0b8f.jpg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/a57e2a61-5279-4d9c-8086-3c23e36ce0e7.jpg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/1328fbd5-8f9c-4e02-aacd-ea47b2689ad3.jpg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/0afff651-cafd-4d94-b694-808dfaf1f03b.jpg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/1afbc902-fa4e-44a9-902a-71d13a2ddde1.jpg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/9397b43f-d761-43dd-a5d8-37182edeeff6.jpg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/af7d60cb-9f2a-41f4-9c08-1f8555be916b.jpg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/miso/Hosting-50135055/original/e0921585-a397-4400-b8ab-f2101a3f5192.jpeg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/miso/Hosting-50135055/original/e5d8db5e-c10f-4117-b307-f7b1e525b788.jpeg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/51beb74c-2d23-4da2-af5b-14dd8bb7b98e.jpg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/a60a635e-82a1-484f-ab28-0c3e4918c9d1.jpg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/28584e9d-0411-4865-8963-b2d9ab426289.jpg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/1ab974d8-f76a-4235-99c5-5ff77b012c3b.jpg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/1b0dc34a-7106-4173-887d-afbbe05b9a5d.jpg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/2794002e-adc2-43b6-aedd-fd26b9d5dfe7.jpg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/miso/Hosting-53058812/original/734016f0-6ab8-47b1-9690-b3ca373f6e5d.jpeg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/miso/Hosting-53058812/original/b53ab059-5eb5-40a7-8061-f5a2e34773cf.jpeg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/miso/Hosting-53058812/original/cea961f6-c19c-46bc-8f73-48a1ba8d9314.jpeg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/f26e120d-3dfc-401b-b776-05d3dece33d8.jpg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/miso/Hosting-24873113/original/8b111272-4fa8-4dc8-8e11-11be15f0665b.jpeg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/41373ffc-25a2-4f7f-87fd-38dcb9220b84.jpg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/miso/Hosting-3267762/original/d740937c-f0d9-4a75-bed9-203d17ad5788.jpeg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/miso/Hosting-3267762/original/83308d96-4112-4352-80ee-8fb3e1b9116d.jpeg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/miso/Hosting-3267762/original/89bf8413-cb70-4ffe-bbd8-e92e63702d1d.png?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/miso/Hosting-2359112/original/75374b28-6673-42c1-94e2-b960065bb8e0.jpeg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/d9fdfa46-6ded-42dd-8072-e8570a806490.jpg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/36316656/f7885295_original.jpg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/289c54eb-683e-446b-9ec8-7e4623926b34.jpg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/a32ad27c-e2c5-421e-a8eb-ebde1ac12783.jpg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/4b5365db-4a91-42d6-9189-541b68a3879f.jpg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/73a2ed14-2d9a-4701-8506-fb9f9632485d.jpg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTY0NjQ4Njg%3D/original/9c2b2ef4-bf16-4f2c-8382-00c79c9d2182.jpeg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/3e62daf5-e646-48ba-b58b-5c2a6f9f9f19.jpg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/50593cb7-6ba3-4802-9cef-3ea803d3410c.jpg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/9a23d5c9-8c37-4884-862b-ef972f3d28d7.jpg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/b89ec8a5-f401-4867-87cc-dc7cea10182f.jpg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/085af180-b863-4757-834e-177348f2bf5c.jpg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/cf6877a6-7e86-449e-b2d3-30f948ca77c6.jpg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/14c50c4a-e010-47e0-9868-f91d67ecb60a.jpg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/efb0fd4e-db24-474d-8703-7b969652ad64.jpg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/eba16037-7ff5-4554-9293-594fabef112e.jpg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/9cee69de-8a9f-428b-8802-7087b48aef66.jpg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/c8c8324d-2799-42f2-a8d1-7bfa0cdff0a1.jpg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/86c3493e-5018-4e2d-95eb-22104969e7cf.jpg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/401703dd-f287-4164-a926-a5d78ef301cf.jpg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/f7f27c59-7306-4c43-b814-566719c057dc.jpg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/b7a54201-aa92-43ac-b9a2-470ccd759161.jpg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/b8f3fe64-8ee2-42bf-8ca6-df477cc076cc.jpg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/75e16e63-5e00-4b29-a90e-e1d2f88a64c8.jpg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/07f35ab8-962e-48b7-8467-2e37163e18ed.jpg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/miso/Hosting-22040326/original/8b1002f6-203e-4705-931e-e26ff33fa94b.jpeg?im_w=720"
      },
      {
        pic1: "https://a0.muscache.com/im/pictures/84e37632-d467-45a8-89cb-a2b1aac82898.jpg?im_w=720",
        pic2: "https://a0.muscache.com/im/pictures/5e772d9b-4d63-416f-bdce-6b4f8c5c76e7.jpg?im_w=720",
        pic3: "https://a0.muscache.com/im/pictures/a25eff01-7f09-46a3-8a51-3097312255c1.jpg?im_w=720"
      }
      
      ]




const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const session = require("express-session");
var expressLayouts = require("express-ejs-layouts");
const isAuthenticated = require("./middleware/isauth");
let app = express();
app.use(bodyParser.urlencoded({ extended: true })); // Use either true or false
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(expressLayouts);
app.use(cookieParser());
app.use(session({
    secret: 'your_secret_key', // Replace with your secret key
    resave: false, // Added resave option
    saveUninitialized: false, // Added saveUninitialized option
    cookie: { secure: false } // Set secure to true if using HTTPS
}));app.use(require("./middleware/sitemiddleware")); 
app.use("/", require("./site/auth"));

const mongoose = require('mongoose');
app.listen(3000);
app.use(express.static('public'));
const router = require('./routes/routes');
const {createproperty} = require("./propertyop");

app.set("view engine","ejs");
app.get('/',router);
// app.get('/contactus',(req,res)=>{
//     res.render('contactus');
// })
app.use('/',require('./routes/contactus'));

mongoose.connect("mongodb://localhost:27017/swiftspaces").then(async()=>{
    console.log('mongodb connected');
    for (let index = 0; index < amazing.length; index++) {
        let i = getRandomNumber(0,11);
        const price = getRandomNumber(50, 200);
        const checkin = getRandomNumber(1,13);
        const checkout = getRandomNumber(15,29);
        const rating = getRandomNumberfloat(3.5,4.9);
        let property = await createproperty(`${cities[index].location}`,`$${price}`,`${months[i].month}${checkin} - ${months[i].month}${checkout}`,`${amazing[index].pic1}`,`${amazing[index].pic2}`,`${amazing[index].pic3}`,`${rating}`);
        console.log(property);
    }
    
}).catch((err)=>{
    console.log(`error: ${err}`)
})


// for (let index = 0; index < rooms.length; index++) {
//     let i = getRandomNumber(0,11);
//     const price = getRandomNumber(50, 200);
//     const checkin = getRandomNumber(1,13);
//     const checkout = getRandomNumber(15,29);
//     const rating = getRandomNumberfloat(3.5,4.9);
//     console.log(`${cities[index].location},$${price},${months[i].month}${checkin} - ${months[i].month}${checkout},${rooms[index].pic1},${rooms[index].pic2},${rooms[index].pic3},${rating}`);
//   }

