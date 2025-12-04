export function ChoiceButton({ onChoice, children, classItem }) {
    return (
        <button type="button" onClick={onChoice} className={classItem}>
            {children}
        </button>
    );
}

export function ConverterButton({onClick, children, className}) {
    return (
        <button type="button" onClick={onClick} className={className}>
            {children}
        </button>
    )
}