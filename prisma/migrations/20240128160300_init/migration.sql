-- CreateTable
CREATE TABLE "todo" (
    "id" SERIAL NOT NULL,
    "heading" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "isComplited" BOOLEAN NOT NULL,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);
