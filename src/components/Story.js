import React, { useEffect, useState, useMemo } from "react";
import { getStory } from "../services/hnApi";
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement
} from "../styles/StoryStyles";
import { mapTime } from "../mappers/mapTime";

const Story = ({ storyId }) => {
  const [story, setStory] = useState({});
  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, []);
  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>
      <StoryMeta>
        <span className="story__by" data-testid="story-by">
          <StoryMetaElement color="#000">By: {story.by}</StoryMetaElement>
        </span>
        <span className="story__time" data-testid="story-time">
          <StoryMetaElement color="#000">Posted: </StoryMetaElement>
          {mapTime(story.time)}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
};

export default Story;
