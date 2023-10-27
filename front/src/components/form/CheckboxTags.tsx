import { UseFormRegister } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { Tag } from "../../types";

export const CheckboxTags = (props: {
  register: UseFormRegister<FieldValues>;
  tags: Tag[];
  className?: string;
}) => {
  const { register, tags, className } = props;

  const divider = (i: number) => (
    <li key={`divider${i}`}>
      <hr className="dropdown-divider" />
    </li>
  );
  const li = (tag: Tag, i: number) => (
    <li className="dropdown-item" key={tag.id}>
      <input
        className="form-check-input me-2"
        type="checkbox"
        value=""
        id={`tag${tag.id}`}
        aria-label={`${tag.id}`}
        {...register(`tags[${i}]`)}
      />
      <label className="form-check-label">{tag.name}</label>
    </li>
  );
  const a = tags.reduce((acc: JSX.Element[], cur: Tag, idx: number) => {
    if (idx === tags.length - 1) {
      return [...acc, li(cur, idx)];
    }
    return [...acc, li(cur, idx), divider(idx)];
  }, []);

  return (
    <div className={className}>
      <label className="form-label fw-medium mb-2 mt-4">学んでいる言語</label>
      <div className="select-tags btn-group dropup d-block" id="tags">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle fw-medium w-100"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          言語をえらぶ
        </button>
        <ul className="dropdown-menu">{a}</ul>
      </div>
    </div>
  );
};
