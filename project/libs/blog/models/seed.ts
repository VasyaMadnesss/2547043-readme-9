import { PrismaClient } from '@prisma/client';

const POST_UUIDS = [
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

const USER_UUIDS = [
  '8a1e0fa2-2e5e-4d4d-8c0e-2f5cbd1d9a3a',
  'd1f0875c-8f3a-4a4e-82f5-9cc202620d14',
  '6cb5585b-0fd7-4b48-88c7-1d5e1e83194b',
  '0fc2238e-3c9a-49dc-9a5e-0411d3b6b7b4',
  'b5c01b71-4dc1-47ea-861b-d3fa85f9cbb1',
  'f3fc777f-bc0a-4b99-8613-46ec426c7d85',
  '8f92836b-3a2a-4d6b-937b-96a93a683bdf',
  'c640fb20-86cc-4f15-a30b-0dc118a78ea1',
  '9e49f325-bf71-417e-a8fa-e19d723d445f',
  '2155e28d-6f1f-4ae6-a6e2-5c98d87191a3',
];

function getTags() {
  const tags = ['funny', 'nature', 'cats', 'people', 'stress', 'dating'];
  const generatedTags = tags.map(() => getRandomArrayValue(tags));
  return generatedTags;
}

function getRandomArrayValue<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

async function seedDbWithPosts(prisma: PrismaClient): Promise<void> {
  for (const POST_UUID of POST_UUIDS) {
    await prisma.post.create({
      data: {
        id: POST_UUID,
        type: 'text',
        publishedAt: new Date().toISOString(),
        userId: getRandomArrayValue(USER_UUIDS),
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
              userId: getRandomArrayValue(USER_UUIDS),
            },
            {
              text: '123COMMENT',
              userId: getRandomArrayValue(USER_UUIDS),
            },
          ],
        },
      },
    });
  }
}

async function bootstrap() {
  const prismaClient = new PrismaClient();
  try {
    await seedDbWithPosts(prismaClient);
    globalThis.process.exit(0);
  } catch (error: unknown) {
    console.error(error);
    globalThis.process.exit(1);
  } finally {
    await prismaClient.$disconnect();
  }
}

bootstrap();
