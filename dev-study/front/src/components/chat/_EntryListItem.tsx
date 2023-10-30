import { User } from "../../types"
import { apiEndpoint } from "../../utils"

export const EntryListItem = (props: { user: User, className?: string }) => {
  const { user, className } = props;
  const timestamp = new Date().getTime();
  return (<>
    <div className={`entry-list-item d-flex align-items-center ${className}`}>
      <div className="user-avater">
        <img src={`${apiEndpoint}/user_icon/${user.id}.png?t=${timestamp}`}
            alt="user avater"
            width={60} />
      </div>
      <div className="user-name ms-3">
        {user.name}
      </div>
    </div>
  </>);
}