export default function handler(req, res) {
  res.status(403).json({ error: "Bad credential (403) - intentionally broken MCP" });
}
