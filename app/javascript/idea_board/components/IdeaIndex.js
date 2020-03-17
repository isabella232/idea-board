import React from "react";

import IDEA_STUBS from "../idea_stubs";
import IdeaCard from "./IdeaCard";

const IdeaIndex = () => {
  return (
    <div>
      {IDEA_STUBS.map((idea) => (
        <IdeaCard key={idea.id} {...idea}/>
      ))}
    </div>
  );
};

export default IdeaIndex;
