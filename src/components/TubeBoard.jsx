import React, { useState } from "react";
import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import BallItem from "./BallItem";
import { generateColumns } from "./Data";
import { StyleBallContainer, StyleContainer } from "./style";

const MAX_BALLS = 4;

const TubeBoard = () => {
  const [columns, setColumns] = useState(generateColumns());
  const [win, setWin] = useState(false);

  const checkWin = (cols) => {
    return Object.values(cols).every((col) => {
      if (col.items.length === 0) return true;

      if (col.items.length !== MAX_BALLS) return false;

      const color = col.items[0].color;
      return col.items.every((item) => item.color === color);
    });
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    const sourceCol = columns[source.droppableId];
    const destCol = columns[destination.droppableId];

    if (destCol.items.length >= MAX_BALLS) return;

    const sourceItems = [...sourceCol.items];
    const destItems = [...destCol.items];

    const [moved] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, moved);

    const updated = {
      ...columns,
      [source.droppableId]: { ...sourceCol, items: sourceItems },
      [destination.droppableId]: { ...destCol, items: destItems },
    };

    setColumns(updated);

    if (checkWin(updated)) {
      setTimeout(() => setWin(true), 200);
    }
  };

  return (
    <>
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

      <Dialog open={win}>
        <DialogContent>
          <Typography variant="h4" align="center">
            🎉 Hurray! Puzzle Solved!
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TubeBoard;
