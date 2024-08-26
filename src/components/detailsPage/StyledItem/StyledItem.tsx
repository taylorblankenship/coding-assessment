import styles from "./StyledItem.module.css";

interface StyledItemProps {
  text: string;
  isType?: boolean;
}

const StyledItem: React.FC<StyledItemProps> = ({ text = '', isType = false }) => {
  // Ensure text is a string and is not undefined
  const formattedText = typeof text === 'string' ? text.replace("-", " ") : '';

  // Compute the class name conditionally
  const typeClass = isType ? " " + styles[formattedText.toLowerCase()] : '';

  return (
    <div className={styles.styledItem + typeClass}>
      {formattedText}
    </div>
  );
};

export default StyledItem;
