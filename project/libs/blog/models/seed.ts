import { PrismaClient } from '@prisma/client';

const UUIDS = [
  '9f8d7b87-84e2-4d36-ae03-40ff0c5680cb',
  '59b92d2b-cb45-421c-bd2e-4cbde84e3651',
  'dff9d6ac-2d63-4972-8f1c-3f53707c4c47',
  '2849ffce-2854-442c-b4d2-26fd1c01eb3c',
  '8c9e034f-30cd-45f6-96c3-7a991b41a8a1',
  '74b1f117-397c-4dc6-a3a6-6f29b0f2854c',
  'b1c96c62-d1dc-4ac8-8ce1-1f2b30e16560',
  '0e740ec1-6b2d-4f3a-9e14-2bcfc67b6a5f',
  '3e96c489-2b5f-4ac0-a3c3-7683502e4e27',
  '6a9d5c83-cdbb-49df-8a15-9fd9fd5f396c',
  'a5f53b3e-04f3-4bc2-9f0f-f350e9ddcf11',
  '55ec96fa-2e76-4c42-b989-15f3d14d3683',
  '6d657c2f-0f20-4291-81db-0a0fa604cd79',
  '49bd8e03-55b7-472f-826a-56eb51e95f0f',
  '7c9621ed-1f56-4d0b-b5b1-1eb72fc813e5',
  '0a3cf8a9-27ae-4d33-8a10-3c14c1553f55',
  '1be27c2f-59a7-43f2-b1e3-7db29f6dfc3a',
  'e2c2bd77-e330-4b6a-b2e5-6c24b6a4fbbf',
  '88b6c8b4-7d58-4626-b19e-3ef429bdc093',
  '64cd2dbf-3d02-4653-8207-01b1c3442a0b',
];

const FIRST_USER_ID = UUIDS[1];
// const SECOND_USER_ID = UUIDS[2];
// const THIRD_USER_ID = UUIDS[3];

const FIRST_POST_ID = UUIDS[4];

function getTags() {
  return ['funny', 'nature', 'cats', 'people', 'stress', 'dating'];
}

async function seedDbWithAPost(prisma: PrismaClient): Promise<void> {
  await prisma.post.create({
    data: {
      id: FIRST_POST_ID,
      type: 'text',
      publishedAt: new Date().toISOString(),
      userId: FIRST_USER_ID,
      textPost: {
        create: {
          title: 'default text title',
          announcement: 'default text announcement',
          text: 'text content of the textPost',
        },
      },
      tags: {
        connectOrCreate: getTags().map((name) => ({
          where: { name },
          create: { name },
        })),
      },
      comments: {
        create: [
          {
            text: 'defaultcommenttext',
            userId: FIRST_USER_ID,
          },
        ],
      },
    },
  });
}

async function bootstrap() {
  const prismaClient = new PrismaClient();
  try {
    await seedDbWithAPost(prismaClient);
    globalThis.process.exit(0);
  } catch (error: unknown) {
    console.error(error);
    globalThis.process.exit(1);
  } finally {
    await prismaClient.$disconnect();
  }
}

bootstrap();
