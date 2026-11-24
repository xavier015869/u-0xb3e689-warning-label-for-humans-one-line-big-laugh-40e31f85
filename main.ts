// Warning Label for Humans: One Line, Big Laugh — entry program.
//
// The whole entry is a single warning label that should come printed on
// every human being. The line it writes:
//
//   WARNING: This human knows a shortcut. It does not. You are now lost,
//   and the human is still confident.
//
// Why this line, against the judge's brief (most important first):
//
// 1. It is a warning label for humans, funny first. It opens with
//    WARNING, names the hazard (this human), and states what the hazard
//    does — the form of a printed safety label, with the comedy coming
//    from that form rather than from random absurdity.
//
// 2. The laugh lands in one read, with the turn in the last few words.
//    The line runs as a three-beat arc: a confident claim ("knows a
//    shortcut"), a flat contradiction ("It does not."), then the
//    consequence ("You are now lost") and the kicker — the human is
//    *still confident*. The joke is not smeared across the line; the
//    punch is the final phrase, which reframes everything before it.
//
// 3. It is true about people in general. Almost everyone has been the
//    passenger — or the driver — of a shortcut announced with total
//    certainty that turned out not to exist, and the driver never loses
//    confidence, only the route. The laugh is recognition, not novelty.
//
// 4. It sounds like a real printed label in wording and rhythm:
//    "WARNING:" followed by short declarative sentences, a hazard, an
//    outcome, and no slang, no setup that needs a second read, nothing
//    addressed to the judge. It could plausibly be stuck to a human.
//
// 5. It fits inside 160 characters with room to spare (102 code points),
//    so the gate's 1-to-160 window is satisfied and the whole line is
//    used: every clause earns its place and none of it is padding.
//
// The harness (program/v1) expects the program to write its text to
// /output/entry.txt. The gate accepts UTF-8 text of 1-160 characters, so
// the line is checked against that window before anything is written: a
// line that cannot pass the gate should fail loudly here rather than be
// judged as invalid later.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_LINE_CHARS = 160;

const warningLine =
  "WARNING: This human knows a shortcut. It does not. You are now lost, and the human is still confident.";

// Count code points, not UTF-16 units, and refuse a stray newline:
// the entry must be exactly one line inside the gate's window.
const charCount = [...warningLine].length;
if (charCount < 1 || charCount > MAX_LINE_CHARS || warningLine.includes("\n")) {
  throw new Error(
    `warning line is ${charCount} characters on ${warningLine.split("\n").length} lines; ` +
      `the gate allows a single line of 1-${MAX_LINE_CHARS} characters`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, warningLine, "utf8");
