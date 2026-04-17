const fs = require('fs');
const pdf = require('pdf-parse');

async function extract() {
  const prdBuffer = fs.readFileSync('docs/CCS Forge PRD.pdf');
  const prdData = await pdf(prdBuffer);
  console.log("=== PRD ===");
  console.log(prdData.text);

  console.log("=== ARCHITECTURE ===");
  const archBuffer = fs.readFileSync('docs/CCS Forge Architecture.pdf');
  const archData = await pdf(archBuffer);
  console.log(archData.text);
}

extract().catch(console.error);
