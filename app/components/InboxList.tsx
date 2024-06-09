import React from "react";
import { promises as fs } from "fs";
import { NotePreview } from "../types/types";

export default async function InboxList() {
  const file = await fs.readFile(
    process.cwd() + "/app/data/Messages.json",
    "utf8"
  );
  const data = JSON.parse(file);
  return (
    <ol className="inboxlist">
      {data.notes.map((item: NotePreview) => (
        <li key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.previewText.substring(0, 35)}...</p>
        </li>
      ))}
    </ol>
  );
}
