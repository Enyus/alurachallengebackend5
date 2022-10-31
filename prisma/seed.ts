// Para rodar o seed, utilize o seguind comando no console: 'npx prisma db seed'

import prisma from "../assets/prisma";

async function main() {
  const categoria1 = await prisma.categoria.upsert({
    where: {id:1},
    update: {
      id: 1,
      titulo: "livre",
      cor: "white"
    },
    create: {
      id: 1,
      titulo: "livre",
      cor: "white"
    }
  })

  const categoria2 = await prisma.categoria.upsert({
    where: {id:2},
    update: {
      id: 2,
      titulo: "Front End",
      cor: "blue"
    },
    create: {
      id: 2,
      titulo: "Front End",
      cor: "blue"
    }
  })

  const video1 = await prisma.video.upsert({
    where: { id: 1 },
    update: {
      id: 1,
      titulo: "Ecossistema React JS com Charles Assunção",
      descricao: "Fique por dentro das novas bibliotecas de React JS, o uso de componentes, as conhecidas Redux e GraphQL, além da discussão sobre o ciclo de vida no Front-End.",
      url: "https://www.youtube.com/watch?v=F5As-8hWNIQ",
      createdAt: new Date("2022-10-25T11:09:00"),
      updatedAt: null,
      deletedAt: null,
      categoriaId: 2,
    },
    create: {
      id: 1,
      titulo: "Ecossistema React JS com Charles Assunção",
      descricao: "Fique por dentro das novas bibliotecas de React JS, o uso de componentes, as conhecidas Redux e GraphQL, além da discussão sobre o ciclo de vida no Front-End.",
      url: "https://www.youtube.com/watch?v=F5As-8hWNIQ",
      createdAt: new Date("2022-10-25T11:09:00"),
      updatedAt: null,
      deletedAt: null,
      categoriaId: 2,
    },
  });

  const video2 = await prisma.video.upsert({
    where: { id: 2 },
    update: {
      id: 2,
      titulo: "Cultura do aprendizado com Sérgio Lopes",
      descricao: "Saiba como a cultura do aprendizado pode melhorar em muitos aspectos o ambiente de trabalho da sua empresa, desde ser uma solução para a escassez de profissionais com experiência até o aprendizado mútuo entre as pessoas.",
      url: "https://www.youtube.com/watch?v=j5Hwydgcnsk",
      createdAt: new Date("2022-10-25T11:10:00"),
      updatedAt: null,
      deletedAt: null,
      categoriaId: 1,
    },
    create: {
      id: 2,
      titulo: "Cultura do aprendizado com Sérgio Lopes",
      descricao: "Saiba como a cultura do aprendizado pode melhorar em muitos aspectos o ambiente de trabalho da sua empresa, desde ser uma solução para a escassez de profissionais com experiência até o aprendizado mútuo entre as pessoas.",
      url: "https://www.youtube.com/watch?v=j5Hwydgcnsk",
      createdAt: new Date("2022-10-25T11:10:00"),
      updatedAt: null,
      deletedAt: null,
      categoriaId: 1,
    },
  });

  const video3 = await prisma.video.upsert({
    where: { id: 3 },
    update: {
      id: 3,
      titulo: "Os MELHORES livros de tecnologia para ler em Programação com Roberta Arcoverde",
      descricao: "Conheça os melhores livros de tecnologia para se aprender computação ou programação, sejam iniciantes ou avançados, para base acadêmica, prática de programar e/ou de carreira no mundo do desenvolvimento.",
      url: "https://www.youtube.com/watch?v=RvWQQRjz1Pw",
      createdAt: new Date("2022-10-25T11:11:00"),
      updatedAt: null,
      deletedAt: null,
      categoriaId: 1,
    },
    create: {
      id: 3,
      titulo: "Os MELHORES livros de tecnologia para ler em Programação com Roberta Arcoverde",
      descricao: "Conheça os melhores livros de tecnologia para se aprender computação ou programação, sejam iniciantes ou avançados, para base acadêmica, prática de programar e/ou de carreira no mundo do desenvolvimento.",
      url: "https://www.youtube.com/watch?v=RvWQQRjz1Pw",
      createdAt: new Date("2022-10-25T11:11:00"),
      updatedAt: null,
      deletedAt: null,
      categoriaId: 1,
    },
  });

  console.log({ categoria1, categoria2, video1, video2, video3 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
