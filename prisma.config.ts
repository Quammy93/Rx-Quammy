// // // prisma.config.ts
// import 'dotenv/config';

// import { defineConfig } from 'prisma/config';

// export default defineConfig({
//   schema: './prisma/schema.prisma', // ✅ Always points to this file
// });

// prisma.config.ts
import 'dotenv/config'    // <-- ensure this is first so .env is loaded
export default {
  schema: './prisma/mongo.schema.prisma',
}
