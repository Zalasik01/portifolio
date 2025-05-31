function PrimaryButton({ children, ...props }) {
  return (
    <button className="custom-btn primary-btn" {...props}>
      {children}
    </button>
  );
}

function SecondaryButton({ children, ...props }) {
  return (
    <button className="custom-btn secondary-btn" {...props}>
      {children}
    </button>
  );
}

function DangerButton({ children, ...props }) {
  return (
    <button className="custom-btn danger-btn" {...props}>
      {children}
    </button>
  );
}

export { PrimaryButton, SecondaryButton, DangerButton };