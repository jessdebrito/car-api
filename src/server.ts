import { app } from "./app";

const PORT = process.env.API_PORT || 4000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))