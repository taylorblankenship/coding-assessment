import styles from "./StyledItem.module.css";

interface StyledItemProps {
  text: string;
  isType?: boolean;
}

const StyledItem = ({ text, isType }: StyledItemProps) => {
  const typeClass = isType ? " " + styles[text.toLowerCase()] : "";
  return (
    <div className={styles.styledItem + typeClass}>
      {text.replace("-", " ")}
    </div>
  );
};

export default StyledItem;
