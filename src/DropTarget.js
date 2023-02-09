import { useDrop } from "react-dnd";

function DropTarget(props) {
  const [collectedProps, drop] = useDrop(() => ({
    accept,
  }));

  return <div ref={drop}>Drop Target</div>;
}
export default DropTarget;
