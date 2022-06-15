import Layout from "../components/Layout";
import CardItem from "../components/CardItem";
import BoardData from "../data/board-data.json";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";

export default function Home() {
  const [ready, setReady] = useState(false);
  // const [colorCheck, setColorCheck] = useState(false);
  const [boardData, setBoardData] = useState(BoardData);


  useEffect(() => {
    if (process.browser) {
      setReady(true);
    }
  }, []);

  const onDragEnd = (re) => {
    var colorCheck = false
    if (!re.destination) return;
    let newBoardData = boardData;
    var dragItem =
      newBoardData[parseInt(re.source.droppableId)].colors[re.source.index];

    var dropItemData = newBoardData[parseInt(re.destination.droppableId)].colors

    for (let i = 0; i < dropItemData.length; i++) {
      if (dropItemData[i].name == dragItem.name) {
        colorCheck = false
      } else {
        colorCheck = true
      }
    }
    alert(colorCheck)

    if (colorCheck) {
      newBoardData[parseInt(re.source.droppableId)].colors.splice(
        re.source.index,
        1
      );

      newBoardData[parseInt(re.destination.droppableId)].colors.splice(
        re.destination.index,
        0,
        dragItem
      );
      setBoardData(newBoardData);
    }


  };

  return (
    <Layout>
      <div className="p-10 flex flex-col h-screen ">
        {ready && (
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-4 gap-5 my-5">
              {boardData.map((board, bIndex) => {
                return (
                  <div key={board.name}>
                    <Droppable droppableId={bIndex.toString()}>
                      {(provided, snapshot) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          <div
                            className={`bg-gray-100 rounded-md shadow-md border border-gray-400 p-5 
                            flex flex-col relative overflow-hidden
                            ${snapshot.isDraggingOver && "bg-green-100"}`}
                          >
                            <div className="overflow-y-auto overflow-x-hidden h-auto"
                              style={{ maxHeight: 'calc(100vh - 290px)' }}>
                              {board.colors.length > 0 &&
                                board.colors.map((item, iIndex) => {
                                  return (
                                    <CardItem
                                      key={item.id}
                                      data={item}
                                      index={iIndex}
                                      className="m-3"
                                      color={item.name}
                                    />
                                  );
                                })}
                              {provided.placeholder}
                            </div>
                          </div>
                        </div>
                      )}
                    </Droppable>
                  </div>
                );
              })}
            </div>
          </DragDropContext>
        )}
      </div>
    </Layout>
  );
}
