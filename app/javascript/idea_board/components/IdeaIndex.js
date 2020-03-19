import React, { useCallback, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Button } from "reactstrap";
import { Plus } from "react-feather";

import { Ideas } from "./Ideas.graphql";

// import ideas from "../sample_ideas";

import IdeaCard from "./IdeaCard";
import NewIdeaModal from "./NewIdeaModal";

const IdeaIndex = () => {
  const [isNewIdeaModalOpen, setNewIdeaModalOpen] = useState(false);
  const toggleNewIdeaModalOpen = useCallback(() =>
    setNewIdeaModalOpen(open => !open)
  );

  const { data, loading } = useQuery(Ideas);

  if (loading) {
    return "Loading...";
  }

  const { ideas } = data;

  return (
    <div>
      <Button color="success" onClick={toggleNewIdeaModalOpen}>
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
        onSubmit={values => {
          console.log(values);
        }}
      />
    </div>
  );
};

export default IdeaIndex;
