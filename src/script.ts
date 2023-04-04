import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     name: "vitor",
  //     email: "vitor@fema.com.br",
  //   },
  // });
  // console.log(user);

  // const post = await prisma.post.create({
  //   data: {
  //     title: "Meu primeiro Post",
  //     content: "conteúdo do meu post",
  //     authorId: 2,
  //   },
  // });

  // console.log(post);

  // const readUser = await prisma.user.findMany();

  // console.log(readUser);

  // const findUser = await prisma.user.findFirst({
  //   where: {
  //     name: "Tiago",
  //   },
  // });

  // console.log(findUser);

  // const user = await prisma.user.create({
  //   data: {
  //     name: "Bob",
  //     email: "bob@fema.com.br",
  //     posts: {
  //       create: {
  //         title: "Ola, Bob!",
  //       },
  //     },
  //   },
  // });

  // console.log(user);

  // await prisma.user.delete({
  //   where: {
  //     email: "tiago@fema.com.br",
  //   },
  // });

//   await prisma.user.update({
//     where: {
//       id: 1,
//     },
//     data: {
//       name: "Jone",
//       email: "jone@fema.com.br",
//     },
//   });
// }

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
}