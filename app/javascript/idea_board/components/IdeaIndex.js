import React, { useCallback, useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Button } from "reactstrap";
import { Plus } from "react-feather";

import { useAuth } from "../../shared/AuthManager";
import { Ideas, CreateIdea } from "./Ideas.graphql";

import IdeaCard from "./IdeaCard";
import NewIdeaModal from "./NewIdeaModal";

const IdeaIndex = () => {
  const { isAuthenticated } = useAuth();
  const [isNewIdeaModalOpen, setNewIdeaModalOpen] = useState(false);
  const toggleNewIdeaModalOpen = useCallback(() =>
    setNewIdeaModalOpen(open => !open)
  );

  const { data, loading } = useQuery(Ideas);
  const [createIdea] = useMutation(CreateIdea, {
    update(cache, { data }) {
      const { ideas } = cache.readQuery({ query: Ideas });
      cache.writeQuery({
        query: Ideas,
        data: { ideas: ideas.concat([data.createIdea.idea]) }
      });
    }
  });

  if (loading) {
    return "Loading...";
  }

  const { ideas } = data;

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
