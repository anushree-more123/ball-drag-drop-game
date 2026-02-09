import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { StyleBall } from "./style";

const BallItem = ({ item, index }) => (
  <Draggable draggableId={item.id} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <StyleBall sx={{ backgroundColor: item.color }} />
      </div>
    )}
  </Draggable>
);

export default BallItem;
