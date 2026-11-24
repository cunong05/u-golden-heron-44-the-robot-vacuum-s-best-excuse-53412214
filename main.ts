// The Robot Vacuum's Best Excuse — make.fun bounty entry
// One line, at most 140 characters, printed exactly once.

const ENTRY =
  "I didn't miss that spot — the dust bunny filed a squatter's complaint, and my warranty forbids evictions without 30 days' notice.";

// Length guard: the entry must be a single line of at most 140 characters.
if (ENTRY.length > 140 || ENTRY.includes("\n")) {
  throw new Error(
    `Entry must be one line of at most 140 characters (got ${ENTRY.length} chars).`,
  );
}

console.log(ENTRY);
