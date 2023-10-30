import { User } from "../../types"
import { EntryListItem } from "./_EntryListItem";

export const EntryList = (props: { className?: string, users: User[] }) => {
  const { className, users } = props;

  return (
    <>
      <div className={`${className}`}>
        <ul className="entry-list p-0">
          {users.map((user, idx) => <li key={idx}>
            <EntryListItem user={user} className="mb-5"/>
          </li>)}
        </ul>
      </div>
    </>
  )
}