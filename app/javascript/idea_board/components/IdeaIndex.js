import React, { useCallback, useState } from "react";
import { Button } from "reactstrap";
import { Plus } from "react-feather";

import ideas from "../sample_ideas";
import { useAuth } from "../../shared/AuthManager";

import IdeaCard from "./IdeaCard";
import NewIdeaModal from "./NewIdeaModal";

const IdeaIndex = () => {
  const { isAuthenticated } = useAuth();
  const [isNewIdeaModalOpen, setNewIdeaModalOpen] = useState(false);
  const toggleNewIdeaModalOpen = useCallback(() =>
    setNewIdeaModalOpen(open => !open)
  );

  return (
    <div>
      <Button
        color="success"
        onClick={toggleNewIdeaModalOpen}
        disabled={!isAuthenticated}
      >
        <Plus />
        Add an Idea
      </Button>

      {ideas.length ? (
        ideas.map(idea => <IdeaCard key={idea.id} {...idea} />)
      ) : (
        <p className="text-center m-4">There aren't any ideas yet!</p>
      )}

      <NewIdeaModal
        isOpen={isNewIdeaModalOpen}
        toggle={toggleNewIdeaModalOpen}
        onSubmit={async ({ title, body }) => {
          await createIdea({
            variables: { title, body }
          });
          setNewIdeaModalOpen(false);
        }}
      />
    </div>
  );
};

export default IdeaIndex;
