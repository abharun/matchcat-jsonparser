import { PrismaClient } from "@prisma/client";
import fs from "fs";

const prisma = new PrismaClient();

async function main() {
  const albumData = JSON.parse(fs.readFileSync("./MockData/albums.json", "utf8"));
  const commentData = JSON.parse(fs.readFileSync("./MockData/comments.json", "utf8"));
  const photoData = JSON.parse(fs.readFileSync("./MockData/photos.json", "utf8"));
  const postData = JSON.parse(fs.readFileSync("./MockData/posts.json", "utf8"));
  const todoData = JSON.parse(fs.readFileSync("./MockData/todos.json", "utf8"));
  const userData = JSON.parse(fs.readFileSync("./MockData/users.json", "utf8"));

  await prisma.album.createMany({
    data: albumData,
    skipDuplicates: true,
  });

  await prisma.comment.createMany({
    data: commentData,
    skipDuplicates: true,
  });

  await prisma.photo.createMany({
    data: photoData,
    skipDuplicates: true,
  });

  await prisma.post.createMany({
    data: postData,
    skipDuplicates: true,
  });

  await prisma.todo.createMany({
    data: todoData,
    skipDuplicates: true,
  });

  await prisma.user.createMany({
    data: userData,
    skipDuplicates: true,
  });

  console.log("Mock data inserted successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
