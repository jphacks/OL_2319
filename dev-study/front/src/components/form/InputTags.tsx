import { UseFormRegister } from "react-hook-form";
import { FieldValues, useFieldArray, Control } from "react-hook-form";
import { Tag } from "../../types";
import { useEffect, useState, KeyboardEvent, MouseEvent } from "react";
import { api } from "../../utils";
import { TagsInput } from "react-tag-input-component";

export const InputTags = (props: {
  control: Control<FieldValues>;
  register: UseFormRegister<FieldValues>;
  className?: string;
}) => {
  const { className, control, register } = props;
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [candidates, setCandidates] = useState<string[]>([]);
  const { fields, replace } = useFieldArray({
    control: control,
    name: "tags",
  });

  useEffect(() => {
    api
      .get("/tag/get-all")
      .then((res) => {
        setTags(res.data.tags as Tag[]);
      })
      .catch(() => {
        console.log("タグの取得に失敗しました。");
      });
  }, []);

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    const input = (e.target as HTMLInputElement).value;
    setCandidates(
      tags
        .filter((tag) => tag.name.toLowerCase().includes(input.toLowerCase()))
        .map((tag) => tag.name),
    );
  };

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    setSelectedTags([
      ...selectedTags,
      (e.target as HTMLInputElement).dataset.tag!,
    ]);
    (document.querySelectorAll(".rti--input")[0] as HTMLInputElement).value =
      "";
    setCandidates([]);
  };

  const onChange = (e: string[]) => {
    setSelectedTags(e);
    replace(e);
  };

  return (
    <div className={className}>
      <TagsInput
        name="tags"
        placeHolder="タグを追加"
        value={selectedTags}
        classNames={{ tag: "fw-medium", input: "w-100 dropdown btn-group" }}
        onChange={onChange}
        onKeyUp={onKeyUp}
        onBlur={() => setCandidates([])}
      />
      {fields.map((field, idx) => (
        <input key={field.id} type="hidden" {...register(`tags.${idx}`)} />
      ))}
      <ul
        className={`dropdown-menu tags-candidates ${
          candidates.length === 0 ? "" : "show"
        }`}
      >
        {candidates.map((candidate, idx) => (
          <li key={idx}>
            <a className="dropdown-item" onClick={onClick} data-tag={candidate}>
              {candidate}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
