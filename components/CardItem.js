import React from "react";
import { Draggable } from "react-beautiful-dnd";

function CardItem({ data, index, color }) {
  return (
    <Draggable index={index} draggableId={data.id.toString()}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`bg-${color}-200 rounded-md h-28 p-3 m-6 mt-0 last:mb-0`}
        >
        </div>

      )}
    </Draggable>
  );
}

export default CardItem;
