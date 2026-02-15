const { embed } = require("./ai");

async function generateReason(a, b) {
  const prompt = `
Explain in one short sentence why these two attendees should meet.

Person A:
${a.role} at ${a.company}. ${a.description}

Person B:
${b.role} at ${b.company}. ${b.description}

Reason:
`;

  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "llama3",
      prompt,
      stream: false
    })
  });

  const data = await response.json();
  console.log(data);
  return data?.response?.trim();
}

async function findMatches(attendees, targetName) {
  const target = attendees.find(a => a.name === targetName);
  if (!target) return [];

  const targetText =
    target.role + " " + target.company + " " + target.description;

  const targetEmbedding = await embed(targetText);

  const results = [];

  for (const a of attendees) {
    if (a.name === targetName) continue;

    const text = a.role + " " + a.company + " " + a.description;
    const emb = await embed(text);

    const score = cosineSimilarity(targetEmbedding, emb);
    const reason = await generateReason(target, a);
results.push({
  name: a.name,
  company: a.company,
  score,
  reason
});
  }

  return results.sort((a, b) => b.score - a.score).slice(0, 5);
}

module.exports = { findMatches };


function cosineSimilarity(a, b) {
  const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const magA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));

  return dot / (magA * magB);
}


module.exports = { findMatches };