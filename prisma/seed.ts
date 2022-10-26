// Para rodar o seed, utilize o seguind comando no console: 'npx prisma db seed'

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const video1 = await prisma.video.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      titulo: "Ecossistema React JS com Charles Assunção",
      descricao: "Fique por dentro das novas bibliotecas de React JS, o uso de componentes, as conhecidas Redux e GraphQL, além da discussão sobre o ciclo de vida no Front-End.",
      url: "https://www.youtube.com/watch?v=F5As-8hWNIQ",
      createdAt: new Date("2022-10-25T11:09:00"),
      updatedAt: null,
      deletedAt: null,
    },
  });

  const video2 = await prisma.video.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      titulo: "Cultura do aprendizado com Sérgio Lopes",
      descricao: "Saiba como a cultura do aprendizado pode melhorar em muitos aspectos o ambiente de trabalho da sua empresa, desde ser uma solução para a escassez de profissionais com experiência até o aprendizado mútuo entre as pessoas.",
      url: "https://www.youtube.com/watch?v=j5Hwydgcnsk",
      createdAt: new Date("2022-10-25T11:10:00"),
      updatedAt: null,
      deletedAt: null,
    },
  });

  const video3 = await prisma.video.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      titulo: "Os MELHORES livros de tecnologia para ler em Programação com Roberta Arcoverde",
      descricao: "Conheça os melhores livros de tecnologia para se aprender computação ou programação, sejam iniciantes ou avançados, para base acadêmica, prática de programar e/ou de carreira no mundo do desenvolvimento.",
      url: "https://www.youtube.com/watch?v=RvWQQRjz1Pw",
      createdAt: new Date("2022-10-25T11:11:00"),
      updatedAt: null,
      deletedAt: null,
    },
  });

  console.log({ video1, video2, video3 });
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
