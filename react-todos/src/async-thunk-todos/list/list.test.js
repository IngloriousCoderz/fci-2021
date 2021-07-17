import renderer from "react-test-renderer";
import List from "./list";

it("renders the List correctly", () => {
  const tree = renderer
    .create(
      <List
        todos={[
          { id: 1, text: "Learn Storybook", done: true },
          { id: 2, text: "Look for a job", done: false },
          { id: 3, text: "Forget everything" },
        ]}
      />
    )
    .toJSON();

  expect(tree).toMatchInlineSnapshot(`
    <ul>
      <li
        className="done"
      >
        <span
          onClick={[Function]}
        >
          Learn Storybook
        </span>
        <button
          onClick={[Function]}
        >
          x
        </button>
      </li>
      <li
        className={null}
      >
        <span
          onClick={[Function]}
        >
          Look for a job
        </span>
        <button
          onClick={[Function]}
        >
          x
        </button>
      </li>
      <li
        className={null}
      >
        <span
          onClick={[Function]}
        >
          Forget everything
        </span>
        <button
          onClick={[Function]}
        >
          x
        </button>
      </li>
    </ul>
  `);
});
