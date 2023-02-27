import { featureSelector, selectId } from "./id.selectors";
import { State } from "./id-reducer.reducer";

describe("Selectors", () => {
  const initialState: State = {
    selectedId:'1'
  };

  it("should select the Id of the object", () => {
    const result = featureSelector.projector(initialState);
    expect(result).not.toBeNull();
    expect(result.selectedId).toEqual('1');
  });

  it("should select the Id of the current collection", () => {
    const result = selectId.projector(
      initialState
    );
    expect(result).not.toBeNull();
    expect(result).toEqual('1');
  });
});

