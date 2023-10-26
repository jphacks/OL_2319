import { ReactNode } from "react";

export const ModalBase = (props: { children: ReactNode; id: string }) => {
  const { children, id } = props;
  return (
    <>
      <div className="modal fade" id={id}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content px-7 py-5">{children}</div>
        </div>
      </div>
    </>
  );
};
