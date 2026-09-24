export default function Modal({ onClose, children, wide }) {
  return (
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-wrapper" onClick={onClose}>
        <div
          className={"modal-card" + (wide ? " modal-wide" : "")}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
          {children}
        </div>
      </div>
    </>
  );
}