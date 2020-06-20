import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import CardImage from "./CardImage";
import { actions } from "../state/ui/cardViewer";

const CardViewer = () => {
  const dispatch = useDispatch();
  const selected = useSelector(
    (state: RootState) => state.ui.cardViewer.selected
  );
  const hover = useSelector((state: RootState) => state.ui.cardViewer.hover);

  if (selected.code) {
    return (
      <div style={{}}>
        <CardImage code={selected.code} size="big" />
        <ul>
          <li>
            <button
              className="button is-small"
              onClick={() => dispatch(actions.clearSelected())}
            >
              ❌ Close
            </button>
          </li>
        </ul>
      </div>
    );
  }

  if (hover.code) {
    return (
      <div>
        <CardImage code={hover.code} size="big" />
      </div>
    );
  }

  return null;
};

export default CardViewer;
