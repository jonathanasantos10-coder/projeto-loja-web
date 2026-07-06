const produtos = [
  {
    id_produto: 1,
    descricao_produto: "Processador Intel Core i9-14900K 3.2GHz (6.0GHz Max Turbo) LGA1700",
    caminho_da_imagem: "../images/produtos/processador-i9-14900k.jpg",
    valor_unitario: 3299.90,
    id_secao: 1,
    nome_secao: "Processadores"
  },
  {
    id_produto: 2,
    descricao_produto: "Processador AMD Ryzen 7 7800X3D 4.2GHz (5.0GHz Max Turbo) AM5",
    caminho_da_imagem: "../images/produtos/processador-ryzen-7800x3d.jpg",
    valor_unitario: 2499.00,
    id_secao: 1,
    nome_secao: "Processadores"
  },
  {
    id_produto: 3,
    descricao_produto: "Processador Intel Core i5-13400F 2.5GHz (4.6GHz Max Turbo) LGA1700",
    caminho_da_imagem: "../images/produtos/processador-i5-13400f.jpg",
    valor_unitario: 999.90,
    id_secao: 1,
    nome_secao: "Processadores"
  },
  {
    id_produto: 4,
    descricao_produto: "Placa de Vídeo RTX 4070 Super 12GB GDDR6X 192-bit",
    caminho_da_imagem: "../images/produtos/placa-video-rtx4070super.jpg",
    valor_unitario: 4599.00,
    id_secao: 2,
    nome_secao: "Placas de Vídeo"
  },
  {
    id_produto: 5,
    descricao_produto: "Placa de Vídeo RX 7800 XT 16GB GDDR6 256-bit",
    caminho_da_imagem: "../images/produtos/placa-video-rx7800xt.jpg",
    valor_unitario: 3799.00,
    id_secao: 2,
    nome_secao: "Placas de Vídeo"
  },
  {
    id_produto: 6,
    descricao_produto: "Placa de Vídeo RTX 4060 Ti 8GB GDDR6 128-bit",
    caminho_da_imagem: "../images/produtos/placa-video-rtx4060ti.jpg",
    valor_unitario: 2599.00,
    id_secao: 2,
    nome_secao: "Placas de Vídeo"
  },
  {
    id_produto: 7,
    descricao_produto: "Memória RAM 16GB DDR5 6000MHz (2x8GB) XPG Lancer",
    caminho_da_imagem: "../images/produtos/memoria-ddr5-16gb-xpg.jpg",
    valor_unitario: 449.90,
    id_secao: 3,
    nome_secao: "Memórias"
  },
  {
    id_produto: 8,
    descricao_produto: "Memória RAM 32GB DDR4 3200MHz (2x16GB) Corsair Vengeance",
    caminho_da_imagem: "../images/produtos/memoria-ddr4-32gb-corsair.jpg",
    valor_unitario: 599.90,
    id_secao: 3,
    nome_secao: "Memórias"
  },
  {
    id_produto: 9,
    descricao_produto: "Memória RAM 8GB DDR4 2666MHz Kingston Fury Beast",
    caminho_da_imagem: "../images/produtos/memoria-ddr4-8gb-kingston.jpg",
    valor_unitario: 179.90,
    id_secao: 3,
    nome_secao: "Memórias"
  },
  {
    id_produto: 10,
    descricao_produto: "SSD 1TB NVMe M.2 Kingston NV2 PCIe 4.0",
    caminho_da_imagem: "../images/produtos/ssd-1tb-kingston-nv2.jpg",
    valor_unitario: 399.90,
    id_secao: 4,
    nome_secao: "Armazenamento"
  },
  {
    id_produto: 11,
    descricao_produto: "SSD 500GB SATA III Crucial MX500",
    caminho_da_imagem: "../images/produtos/ssd-500gb-crucial-mx500.jpg",
    valor_unitario: 259.90,
    id_secao: 4,
    nome_secao: "Armazenamento"
  },
  {
    id_produto: 12,
    descricao_produto: "HD 2TB SATA III 7200RPM Seagate Barracuda",
    caminho_da_imagem: "../images/produtos/hd-2tb-seagate-barracuda.jpg",
    valor_unitario: 449.90,
    id_secao: 4,
    nome_secao: "Armazenamento"
  },
  {
    id_produto: 13,
    descricao_produto: "SSD 2TB NVMe M.2 WD Black SN850X PCIe 4.0",
    caminho_da_imagem: "../images/produtos/ssd-2tb-wd-black-sn850x.jpg",
    valor_unitario: 899.90,
    id_secao: 4,
    nome_secao: "Armazenamento"
  },
  {
    id_produto: 14,
    descricao_produto: "Placa Mãe B650M Gaming Plus WiFi AM5 DDR5",
    caminho_da_imagem: "../images/produtos/placa-mae-b650m-gaming-plus.jpg",
    valor_unitario: 999.90,
    id_secao: 5,
    nome_secao: "Placas-Mãe"
  },
  {
    id_produto: 15,
    descricao_produto: "Placa Mãe Z790 Gaming X AX LGA1700 DDR5",
    caminho_da_imagem: "../images/produtos/placa-mae-z790-gaming-x.jpg",
    valor_unitario: 1799.90,
    id_secao: 5,
    nome_secao: "Placas-Mãe"
  },
  {
    id_produto: 16,
    descricao_produto: "Placa Mãe A520M-K AM4 DDR4",
    caminho_da_imagem: "../images/produtos/placa-mae-a520m-k.jpg",
    valor_unitario: 429.90,
    id_secao: 5,
    nome_secao: "Placas-Mãe"
  },
  {
    id_produto: 17,
    descricao_produto: "Fonte 650W 80 Plus Bronze Corsair CV650",
    caminho_da_imagem: "../images/produtos/fonte-650w-corsair-cv650.jpg",
    valor_unitario: 449.90,
    id_secao: 6,
    nome_secao: "Fontes"
  },
  {
    id_produto: 18,
    descricao_produto: "Fonte 750W 80 Plus Gold Modular XPG Pylon",
    caminho_da_imagem: "../images/produtos/fonte-750w-xpg-pylon.jpg",
    valor_unitario: 599.90,
    id_secao: 6,
    nome_secao: "Fontes"
  },
  {
    id_produto: 19,
    descricao_produto: "Gabinete Gamer Mid Tower com 3 Fans RGB Lateral em Vidro",
    caminho_da_imagem: "../images/produtos/gabinete-mid-tower-rgb.jpg",
    valor_unitario: 379.90,
    id_secao: 7,
    nome_secao: "Gabinetes"
  },
  {
    id_produto: 20,
    descricao_produto: "Gabinete Mini Tower ATX com Fonte 500W Inclusa",
    caminho_da_imagem: "../images/produtos/gabinete-mini-tower-atx.jpg",
    valor_unitario: 299.90,
    id_secao: 7,
    nome_secao: "Gabinetes"
  },
  {
    id_produto: 21,
    descricao_produto: "Monitor Gamer 24' Full HD 165Hz 1ms IPS",
    caminho_da_imagem: "../images/produtos/monitor-24-165hz.jpg",
    valor_unitario: 899.90,
    id_secao: 8,
    nome_secao: "Monitores"
  },
  {
    id_produto: 22,
    descricao_produto: "Monitor Gamer 27' 2K 144Hz 1ms VA Curvo",
    caminho_da_imagem: "../images/produtos/monitor-27-2k-144hz-curvo.jpg",
    valor_unitario: 1599.90,
    id_secao: 8,
    nome_secao: "Monitores"
  },
  {
    id_produto: 23,
    descricao_produto: "Teclado Mecânico Gamer RGB Switch Red ABNT2",
    caminho_da_imagem: "../images/produtos/teclado-mecanico-rgb.jpg",
    valor_unitario: 249.90,
    id_secao: 9,
    nome_secao: "Periféricos"
  },
  {
    id_produto: 24,
    descricao_produto: "Mouse Gamer 12000 DPI RGB 6 Botões",
    caminho_da_imagem: "../images/produtos/mouse-gamer-12000dpi.jpg",
    valor_unitario: 129.90,
    id_secao: 9,
    nome_secao: "Periféricos"
  },
  {
    id_produto: 25,
    descricao_produto: "Headset Gamer 7.1 Surround com Microfone Retrátil",
    caminho_da_imagem: "../images/produtos/headset-gamer-7.1.jpg",
    valor_unitario: 199.90,
    id_secao: 9,
    nome_secao: "Periféricos"
  }
];

export{produtos}