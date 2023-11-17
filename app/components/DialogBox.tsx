import { Dialog } from "@headlessui/react";

interface DialogBoxProps {
  open: boolean;
  onClose: any;
}

export const DialogBox = ({ open, onClose }: DialogBoxProps) => {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <Dialog.Panel>
        <Dialog.Title>Dialog title</Dialog.Title>
        <Dialog.Description>Dialog description</Dialog.Description>
        <button onClick={onClose}>Close</button>
      </Dialog.Panel>
    </Dialog>
  );
};

/* <dialog
id="modalDialog"
open={open}
onClose={onClose}
style={{
  width: 600,
  backgroundColor: "cream",
  border: "1px solid black",
  borderRadius: "5px",
  zIndex: 10,
}}
>
<div style={{ display: "flex", height: 300 }}>
  <button
    onClick={() => console.log("close button")}
    style={{ justifyContent: "flex-end" }}
  >
    close x
  </button>
  <p>Dialog</p>
  <p>is</p>
  <p>Great!</p>
</div>
</dialog> */
