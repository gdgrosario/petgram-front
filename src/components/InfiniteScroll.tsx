import {
  useRef,
  useCallback,
  FC,
  Children,
  cloneElement,
  ReactElement,
} from "react";

interface IInfiniteScroll {
  actionData: () => void;
  loading: boolean;
  min: number;
  max: number;
}
export const InfiniteScroll: FC<IInfiniteScroll> = ({
  loading,
  actionData,
  children,
  min,
  max,
}) => {
  const observer = useRef<any>();

  const lasElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) {
        observer.current = observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          min < max && actionData();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, min]
  );

  return (
    <>
      {Children.map(children, (child, index) => {
        if (Children.count(children) === index + 1) {
          return cloneElement(child as ReactElement, {
            ref: lasElement,
          });
        }
        return child;
      })}
    </>
  );
};
