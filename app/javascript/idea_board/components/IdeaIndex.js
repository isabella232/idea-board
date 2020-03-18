import React, {useCallback, useState} from "react";
import { Button } from "reactstrap"
import { Plus } from "react-feather"

import ideas from "../sample_ideas";

import IdeaCard from "./IdeaCard";
import NewIdeaModal from "./NewIdeaModal";

const IdeaIndex = () => {
  const [isNewIdeaModalOpen, setNewIdeaModalOpen] = useState(false);
  const toggleNewIdeaModalOpen = useCallback(() => setNewIdeaModalOpen(open => !open));

  return (
    <div>
      <Button color="success" onClick={toggleNewIdeaModalOpen}>
        <Plus/>
        Add an Idea
      </Button>

      {ideas.map(idea => (
        <IdeaCard key={idea.id} {...idea} />
      ))}

      <NewIdeaModal
        isOpen={isNewIdeaModalOpen}
        toggle={toggleNewIdeaModalOpen}
        onSubmit={(values) => { console.log(values) }}
      />
    </div>
  );
};

export default IdeaIndex;
