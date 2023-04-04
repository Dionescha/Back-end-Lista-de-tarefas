-- CreateTable
CREATE TABLE "Todo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "concluida" BOOLEAN DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "Todo_nome_key" ON "Todo"("nome");
