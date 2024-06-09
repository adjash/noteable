import { User } from "@clerk/nextjs/server";
import React from "react";
import InboxList from "../components/InboxList";
import NoteSidebar from "../components/NoteSidebar";
import NoteBody from "../components/NoteBody";

function page() {
  return (
    <div className="dashboard">
      <NoteSidebar />
      <NoteBody />
    </div>
  );
}

export default page;
