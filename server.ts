import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("database.db");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS patients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    last_session TEXT,
    status TEXT DEFAULT 'Ativo',
    next_appt TEXT,
    avatar TEXT,
    notes TEXT
  )
`);

// Seed data if empty
const count = db.prepare("SELECT COUNT(*) as count FROM patients").get() as { count: number };
if (count.count === 0) {
  const insert = db.prepare("INSERT INTO patients (name, last_session, status, next_appt, avatar, notes) VALUES (?, ?, ?, ?, ?, ?)");
  insert.run('Sarah Johnson', '12 Out, 2023', 'Ativo', '24 Out, 2023', 'sarah', 'Paciente apresenta progresso na gestão de ansiedade.');
  insert.run('Michael Chen', '15 Out, 2023', 'Ativo', '24 Out, 2023', 'michael', 'Foco em técnicas de relaxamento.');
  insert.run('Emma Wilson', '10 Out, 2023', 'Pendente', '24 Out, 2023', 'emma', '');
  insert.run('David Miller', '28 Set, 2023', 'Inativo', '-', 'david', '');
  insert.run('Lisa Ray', '18 Out, 2023', 'Ativo', '25 Out, 2023', 'lisa', '');
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/patients", (req, res) => {
    const patients = db.prepare("SELECT * FROM patients").all();
    res.json(patients);
  });

  app.get("/api/patients/:id", (req, res) => {
    const patient = db.prepare("SELECT * FROM patients WHERE id = ?").get(req.params.id);
    res.json(patient);
  });

  app.put("/api/patients/:id", (req, res) => {
    const { notes } = req.body;
    db.prepare("UPDATE patients SET notes = ? WHERE id = ?").run(notes, req.params.id);
    res.json({ success: true });
  });

  app.post("/api/patients", (req, res) => {
    const { name, last_session, status, next_appt, avatar, notes } = req.body;
    const info = db.prepare("INSERT INTO patients (name, last_session, status, next_appt, avatar, notes) VALUES (?, ?, ?, ?, ?, ?)")
      .run(name, last_session, status, next_appt, avatar, notes || '');
    res.json({ id: info.lastInsertRowid });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
