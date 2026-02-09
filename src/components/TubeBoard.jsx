import React, { useState } from "react";
import { Box } from "@mui/material";
import { columnsFromBackend } from "./Data";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import BallItem from "./BallItem";
import { StyleBallContainer, StyleContainer } from "./style";

const TubeBoard = () => {
  const [columns, setColumns] = useState(columnsFromBackend);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];

      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];

      const [movedItem] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, movedItem);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];

      const [movedItem] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, movedItem);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Box sx={{ width: "100%", height: "100%" }}>
        <StyleContainer>
          {Object.entries(columns).map(([columnId, column]) => (
            <Droppable key={columnId} droppableId={columnId}>
              {(provided) => (
                <StyleBallContainer
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {column.items.map((item, index) => (
                    <BallItem key={item.id} item={item} index={index} />
                  ))}
                  {provided.placeholder}
                </StyleBallContainer>
              )}
            </Droppable>
          ))}
        </StyleContainer>
      </Box>
    </DragDropContext>
  );
};

export default TubeBoard;
